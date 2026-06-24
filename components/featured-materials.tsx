'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Download, ArrowRight, Check } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export function FeaturedMaterials() {
  const { documents, addToCart, cart } = useStore()
  const [addedItems, setAddedItems] = useState<string[]>([])

  const featuredDocs = documents.slice(0, 4)

  const handleAddToCart = (doc: typeof documents[0]) => {
    addToCart(doc)
    setAddedItems([...addedItems, doc.id])
    toast({
      title: 'Added to Cart',
      description: `${doc.title} has been added to your cart.`,
    })
    
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== doc.id))
    }, 2000)
  }

  const isInCart = (docId: string) => cart.some(item => item.document.id === docId)
  const justAdded = (docId: string) => addedItems.includes(docId)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-[oklch(0.75_0.12_85)] uppercase tracking-wider">Study Materials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Popular Study Materials
            </h2>
            <p className="text-muted-foreground mt-2">
              Download comprehensive notes, practice papers, and study guides
            </p>
          </div>
          <Link href="/marketplace">
            <Button variant="outline" className="gap-2">
              View All Materials
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDocs.map((doc) => (
            <Card key={doc.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {doc.category}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base line-clamp-2">{doc.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground line-clamp-2">{doc.description}</p>
                <div className="flex items-center gap-2 mt-3">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{doc.downloads} downloads</span>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-2">
                <span className="text-xl font-bold text-primary">₹{doc.price}</span>
                <Button
                  size="sm"
                  onClick={() => handleAddToCart(doc)}
                  disabled={isInCart(doc.id)}
                  className={`gap-2 ${justAdded(doc.id) ? 'bg-[oklch(0.60_0.15_145)]' : ''}`}
                >
                  {isInCart(doc.id) ? (
                    <>
                      <Check className="h-4 w-4" />
                      In Cart
                    </>
                  ) : justAdded(doc.id) ? (
                    <>
                      <Check className="h-4 w-4" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4" />
                      Add
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
