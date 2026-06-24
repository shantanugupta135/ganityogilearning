import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Users, Award, Globe, MonitorPlay } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.25_0.10_250)] to-[oklch(0.35_0.12_250)]">
      <div className="absolute inset-0 bg-[url('/images/online-learning.jpg')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
              <MonitorPlay className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
              <span>Online Classes Available Worldwide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Master Your <span className="text-[oklch(0.75_0.12_85)]">Academic Journey</span> with Ganit Yogi
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 text-pretty">
              Premium online coaching for Class 6-12, JEE, NEET, Computer Science & IT Interview Preparation. Learn from expert teachers, anywhere in the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/marketplace">
                <Button size="lg" className="bg-[oklch(0.75_0.12_85)] text-[oklch(0.15_0.02_240)] hover:bg-[oklch(0.80_0.10_85)] gap-2 w-full sm:w-auto">
                  Browse Study Materials
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                  Book Free Demo Class
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-2 text-[oklch(0.75_0.12_85)]">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl font-bold text-white">5000+</span>
                </div>
                <span className="text-sm text-white/70">Students Enrolled</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-2 text-[oklch(0.75_0.12_85)]">
                  <Globe className="h-5 w-5" />
                  <span className="text-2xl font-bold text-white">20+</span>
                </div>
                <span className="text-sm text-white/70">Countries Reached</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-2 text-[oklch(0.75_0.12_85)]">
                  <Award className="h-5 w-5" />
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
                <span className="text-sm text-white/70">Success Rate</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-2 text-[oklch(0.75_0.12_85)]">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-2xl font-bold text-white">14+</span>
                </div>
                <span className="text-sm text-white/70">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/online-learning.jpg"
                alt="Ganit Yogi Online Classes"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[oklch(0.60_0.15_145)] flex items-center justify-center">
                  <MonitorPlay className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Live Online Classes</p>
                  <p className="text-sm text-muted-foreground">Interactive Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
