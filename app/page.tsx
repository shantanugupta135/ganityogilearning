'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BookOpen, Sparkles, Users, Award, Globe, Zap } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-6 inline-block">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Ganit Yogi Learning
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Master Every Subject Online
                </h1>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Your complete study companion trusted by thousands of students. Access comprehensive notes, solved examples, and practice problems for Class 9 to B.Tech. Learn from experienced educators from India's leading coaching institute.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/notebooks">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg w-full sm:w-auto">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Start Learning Free
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <p className="text-gray-600 text-sm mt-1">Expert Teachers</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">10k+</div>
                    <p className="text-gray-600 text-sm mt-1">Active Students</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">100+</div>
                    <p className="text-gray-600 text-sm mt-1">Chapters</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-learning.png"
                    alt="Student Learning"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-gray-200 max-w-xs">
                  <p className="text-sm font-semibold text-gray-900">Available on All Devices</p>
                  <p className="text-xs text-gray-600 mt-1">Learn on your phone, tablet, or computer anytime, anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Physical Institute Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
              India's Leading Coaching Institute Now Online
            </h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
              With years of experience providing quality education at our physical coaching center in Delhi Tilak Nagar, we're now bringing our expertise to students worldwide through online classes.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Image */}
              <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/coaching-class.png"
                  alt="Physical Coaching Class"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Right Content */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Physical Presence
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Located in Delhi Tilak Nagar, our state-of-the-art coaching center has been guiding students to excellence for years. Our experienced faculty members provide personalized attention and comprehensive coaching for competitive exams and academic subjects.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Experienced Faculty</p>
                      <p className="text-gray-600 text-sm">Expert teachers with years of teaching experience</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Modern Teaching Methods</p>
                      <p className="text-gray-600 text-sm">Interactive classes with latest teaching techniques</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Small Batch Size</p>
                      <p className="text-gray-600 text-sm">Personalized attention for each student</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Online Classes Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Expertise in Online Learning
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Bringing the same quality education online! Our comprehensive study materials, expert guidance, and proven methodologies are now accessible to students across India and worldwide. Join thousands of students learning from home with our interactive online platform.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Global Access</p>
                      <p className="text-gray-600 text-sm">Learn from anywhere in India and worldwide</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Flexible Learning</p>
                      <p className="text-gray-600 text-sm">Study at your own pace with lifetime access</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Comprehensive Materials</p>
                      <p className="text-gray-600 text-sm">Complete study notes and practice problems</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Right Image */}
              <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/online-class.png"
                  alt="Online Classes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Why Students Love Learning With Us
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            We combine the effectiveness of proven coaching methodologies with the convenience of online learning.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Content</h3>
              <p className="text-gray-600">
                Carefully curated study materials from experienced educators covering all topics comprehensively.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Navigation</h3>
              <p className="text-gray-600">
                Well-organized by class, subject, and chapter for easy access to any topic you need.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Learn Anywhere</h3>
              <p className="text-gray-600">
                Access your studies 24/7 on any device. Perfect for busy students and exam preparation.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">
                Trusted by thousands of students preparing for board exams and competitive tests.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Teachers</h3>
              <p className="text-gray-600">
                Learn from the same educators guiding students at our physical coaching center.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Updated Content</h3>
              <p className="text-gray-600">
                Regularly updated materials aligned with latest syllabi and exam patterns.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20 mt-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Free access to comprehensive study materials. No signup required. Start learning now.
            </p>
            <Link href="/notebooks">
              <Button size="lg" variant="secondary" className="px-10 py-6 text-lg font-semibold">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Chapters
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
