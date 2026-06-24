'use client'

import { useState } from 'react'
import { useStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Star, Quote, Send } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export function ReviewsSection() {
  const { reviews, addReview } = useStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
  })

  const approvedReviews = reviews.filter((r) => r.approved)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    addReview(formData)
    setFormData({ name: '', email: '', rating: 5, comment: '' })
    setIsSubmitting(false)

    toast({
      title: 'Review Submitted!',
      description: 'Thank you for your feedback. Your review will appear after approval.',
    })
  }

  const renderStars = (rating: number, interactive = false, onSelect?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? 'button' : undefined}
            onClick={() => interactive && onSelect?.(star)}
            className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
            disabled={!interactive}
          >
            <Star
              className={`h-5 w-5 ${
                star <= rating
                  ? 'fill-[oklch(0.75_0.12_85)] text-[oklch(0.75_0.12_85)]'
                  : 'text-muted-foreground/30'
              }`}
            />
          </button>
        ))}
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[oklch(0.75_0.12_85)] uppercase tracking-wider">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground mt-4">
            Read genuine reviews from our students and parents. Your feedback helps us improve!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Reviews Display */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {approvedReviews.map((review) => (
                <Card key={review.id} className="relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/10" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{formatDate(review.createdAt)}</p>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Review Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Share Your Experience</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Your Rating</Label>
                    {renderStars(formData.rating, true, (rating) =>
                      setFormData({ ...formData, rating })
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comment">Your Review</Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Share your experience with us..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
