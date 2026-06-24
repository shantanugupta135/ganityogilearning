'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'contact',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
        toast({
          title: 'Message Sent!',
          description: 'We will get back to you within 24 hours.',
        })
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast({
        title: 'Failed to Send',
        description: 'Please try again or contact us via WhatsApp.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123, Main Road, Near Metro Station', 'Tilak Nagar, Delhi - 110018'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 11-2555-1234'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['ganityogiclasses@gmail.com', 'admissions@ganityogilearning.in'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 8:00 AM - 8:00 PM', 'Sunday: 9:00 AM - 2:00 PM'],
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[oklch(0.75_0.12_85)] uppercase tracking-wider">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Get in Touch With Us
          </h2>
          <p className="text-muted-foreground mt-4">
            Have questions about our online courses or study materials? Contact us today for a free demo class!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    {item.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20know%20about%20Ganit%20Yogi%20Learning%20online%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-[oklch(0.60_0.15_145)] text-white hover:bg-[oklch(0.55_0.15_145)] transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center gap-4">
                  <MessageCircle className="h-8 w-8" />
                  <div>
                    <p className="font-semibold">Chat on WhatsApp</p>
                    <p className="text-sm text-white/80">Quick response within minutes</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Enquiry about..."
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto gap-2" disabled={isSubmitting}>
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="mt-4 overflow-hidden">
              <div className="aspect-[16/9] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5455566730396!2d77.09041687495846!3d28.612952984568894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d053a0a3c8f3d%3A0x5e5d5c5e5e5e5e5e!2sTilak%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
