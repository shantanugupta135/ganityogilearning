import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ganit Yogi Learning | Best Online Coaching Classes in Tilak Nagar, Delhi',
  description: 'Ganit Yogi Learning offers premium online coaching for Class 6-12, JEE, NEET, Computer Science, IT Interview Preparation & Coding. Physical classes in Tilak Nagar, Delhi. Online classes available worldwide.',
  keywords: 'online coaching classes, Ganit Yogi Learning, Tilak Nagar coaching, JEE coaching, NEET coaching, computer science coaching, IT interview preparation, coding classes, Class 6-12 coaching, online tuition India, CS/IP classes, programming classes Delhi',
  authors: [{ name: 'Ganit Yogi Learning' }],
  creator: 'Ganit Yogi Learning',
  publisher: 'Ganit Yogi Learning',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ganityogilearning.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ganit Yogi Learning | Best Online Coaching Classes in Delhi',
    description: 'Premium online coaching for Class 6-12, JEE, NEET, Computer Science & IT Interview Prep. Physical classes in Delhi & online worldwide.',
    url: 'https://ganityogilearning.in',
    siteName: 'Ganit Yogi Learning',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ganit Yogi Learning | Best Online Coaching Classes',
    description: 'Premium online coaching for Class 6-12, JEE, NEET, Computer Science & IT Interview Prep.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Ganit Yogi Learning",
              "description": "Premium online coaching classes for Class 6-12, JEE, NEET, Computer Science and IT Interview Preparation",
              "url": "https://ganityogilearning.in",
              "logo": "https://ganityogilearning.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123, Main Road, Tilak Nagar",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110018",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6403",
                "longitude": "77.0956"
              },
              "telephone": "+91-9876543210",
              "email": "info@ganityogilearning.in",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "20:00"
                }
              ],
              "sameAs": [
                "https://facebook.com/ganityogilearning",
                "https://instagram.com/ganityogilearning",
                "https://youtube.com/ganityogilearning"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
