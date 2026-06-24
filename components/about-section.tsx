import Image from 'next/image'
import { CheckCircle, Users, Trophy, Clock, Globe, MonitorPlay } from 'lucide-react'

export function AboutSection() {
  const features = [
    { icon: MonitorPlay, title: 'Live Online Classes', description: 'Interactive live sessions with real-time doubt solving' },
    { icon: Globe, title: 'Learn Anywhere', description: 'Access quality education from anywhere in the world' },
    { icon: Trophy, title: 'Result Oriented', description: '95% of our students achieve their academic goals' },
  ]

  const highlights = [
    'Personalized attention with small batch sizes',
    'Regular tests and performance tracking',
    'Doubt clearing sessions every week',
    'Comprehensive study materials included',
    'Recorded sessions for revision',
    'CS/IP & IT Interview Preparation',
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/teachers.jpg"
                alt="Ganit Yogi Learning Teachers"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-xl p-6 shadow-xl text-primary-foreground hidden sm:block">
              <p className="text-4xl font-bold">14+</p>
              <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-[oklch(0.75_0.12_85)] uppercase tracking-wider">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Your Trusted Partner in Online Learning Excellence
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Ganit Yogi Learning has been a beacon of quality education since 2010. We specialize in online coaching for Class 6-12 students and competitive exam aspirants preparing for JEE, NEET, and beyond. Our physical center in Tilak Nagar, Delhi complements our online presence.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We also offer specialized courses in Computer Science, Informatics Practices (CS/IP), and IT Interview Preparation for students from Class 9 to B.Tech. Our mission is to provide accessible, high-quality education that transforms lives, no matter where you are in the world.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="p-4 rounded-xl bg-muted/50">
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[oklch(0.60_0.15_145)] flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
