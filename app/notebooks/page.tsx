'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'

const classes = [
  { id: 'class-9', name: 'Class 9', description: 'Foundation concepts for all subjects', color: 'from-blue-500 to-cyan-500' },
  { id: 'class-10', name: 'Class 10', description: 'Board exam preparation with detailed chapters', color: 'from-purple-500 to-pink-500' },
  { id: 'class-11', name: 'Class 11', description: 'Advanced topics for competitive exams', color: 'from-green-500 to-emerald-500' },
  { id: 'class-12', name: 'Class 12', description: 'Final year comprehensive coverage', color: 'from-orange-500 to-red-500' },
  { id: 'jee', name: 'JEE Advanced', description: 'In-depth preparation for engineering', color: 'from-indigo-500 to-blue-500' },
  { id: 'neet', name: 'NEET', description: 'Complete medical entrance preparation', color: 'from-rose-500 to-pink-500' },
]

export default function NotebooksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Study Notebooks</h1>
            <p className="text-lg text-muted-foreground">Select your class to explore chapter-wise study materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <Link key={cls.id} href={`/notebooks/${cls.id}`}>
                <div className="h-full group cursor-pointer transform transition duration-300 hover:scale-105">
                  <div className={`bg-gradient-to-br ${cls.color} rounded-lg p-8 h-full flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-shadow`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{cls.name}</h2>
                        <p className="text-white/80">{cls.description}</p>
                      </div>
                      <BookOpen className="w-8 h-8 opacity-60" />
                    </div>
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Explore Subjects</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-primary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-xl font-bold mb-4 text-foreground">How to Use Study Notebooks</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-primary text-white rounded-full text-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">1</span>
                <span>Select your class from the cards above</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-primary text-white rounded-full text-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">2</span>
                <span>Choose the subject you want to study</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-primary text-white rounded-full text-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">3</span>
                <span>Browse all chapters with descriptions</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-primary text-white rounded-full text-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">4</span>
                <span>Click on any chapter to view the complete study material</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
