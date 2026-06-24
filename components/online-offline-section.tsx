import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MonitorPlay, MapPin, ArrowRight, Globe, CheckCircle } from 'lucide-react'

export function OnlineOfflineSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[oklch(0.25_0.10_250)] to-[oklch(0.35_0.12_250)] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[oklch(0.75_0.12_85)] uppercase tracking-wider">How We Teach</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 text-balance">
            Online Classes - Our Primary Focus
          </h2>
          <p className="text-white/80 mt-4">
            We specialize in live online classes that bring quality education to your doorstep. Physical classes also available at our Tilak Nagar center for Delhi students.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Online Classes - Primary */}
          <div className="relative rounded-2xl overflow-hidden group md:row-span-1 order-1">
            <div className="absolute inset-0">
              <Image
                src="/images/online-learning.jpg"
                alt="Online Learning"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="relative p-8 min-h-[450px] flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 bg-[oklch(0.75_0.12_85)] text-[oklch(0.15_0.02_240)] px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                <Globe className="h-4 w-4" />
                <span>Recommended</span>
              </div>
              <div className="flex items-center gap-2 text-[oklch(0.75_0.12_85)] mb-3">
                <MonitorPlay className="h-5 w-5" />
                <span className="text-sm font-medium">Live Online Classes</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Learn from Anywhere in the World</h3>
              <p className="text-white/80 mb-4">
                Our interactive online platform connects students across India and 20+ countries. Experience quality education from the comfort of your home with the same effectiveness as classroom learning.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
                  Live interactive sessions with real-time doubt solving
                </li>
                <li className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
                  Recorded classes available for revision anytime
                </li>
                <li className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
                  Digital study materials & practice tests included
                </li>
                <li className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
                  One-on-one mentoring sessions available
                </li>
                <li className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
                  Flexible timings for students worldwide
                </li>
              </ul>
              <Link href="/#contact">
                <Button className="bg-[oklch(0.75_0.12_85)] text-[oklch(0.15_0.02_240)] hover:bg-[oklch(0.80_0.10_85)] gap-2 w-full sm:w-auto">
                  Join Online Batch
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Physical Classes */}
          <div className="relative rounded-2xl overflow-hidden group order-2">
            <div className="absolute inset-0">
              <Image
                src="/images/classroom.jpg"
                alt="Physical Classroom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="relative p-8 min-h-[450px] flex flex-col justify-end">
              <div className="flex items-center gap-2 text-[oklch(0.75_0.12_85)] mb-3">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Physical Classes</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Visit Our Center in Delhi</h3>
              <p className="text-white/80 mb-4">
                For students in Delhi, join our state-of-the-art facility in Tilak Nagar. Experience personalized attention, peer learning, and direct interaction with our expert faculty.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.12_85)]" />
                  Small batch sizes (max 15 students)
                </li>
                <li className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.12_85)]" />
                  AC classrooms with modern facilities
                </li>
                <li className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.12_85)]" />
                  Free doubt-clearing sessions
                </li>
              </ul>
              <Link href="/#contact">
                <Button className="bg-white text-primary hover:bg-white/90 gap-2 w-full sm:w-auto">
                  Book Free Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
