import Link from 'next/link'
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Ganit Yogi Learning</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your complete online learning platform for Class 9 to B.Tech students. Master mathematics, science, and competitive exam preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link href="/notebooks" className="text-gray-400 hover:text-white text-sm transition-colors">
                Study Materials
              </Link>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <a href="tel:+919876543210" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:ganityogiclasses@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                  ganityogiclasses@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="text-gray-400 text-sm">Tilak Nagar, Delhi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Ganit Yogi Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
