'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { BookMarked, ArrowRight, Home } from 'lucide-react'

const classSubjects: { [key: string]: { subjects: string[], title: string } } = {
  'class-9': {
    title: 'Class 9 Subjects',
    subjects: ['Maths', 'Science', 'English', 'Social Science', 'Hindi', 'Sanskrit']
  },
  'class-10': {
    title: 'Class 10 Subjects',
    subjects: ['Maths', 'Science', 'English', 'Social Science', 'Hindi', 'Sanskrit']
  },
  'class-11': {
    title: 'Class 11 Subjects',
    subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English']
  },
  'class-12': {
    title: 'Class 12 Subjects',
    subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English']
  },
  'jee': {
    title: 'JEE Preparation',
    subjects: ['Maths', 'Physics', 'Chemistry', 'CS/IT Interview Prep']
  },
  'neet': {
    title: 'NEET Preparation',
    subjects: ['Biology', 'Chemistry', 'Physics', 'Botany', 'Zoology']
  }
}

const subjectColors: { [key: string]: string } = {
  'Maths': 'from-blue-500 to-cyan-500',
  'Physics': 'from-purple-500 to-pink-500',
  'Chemistry': 'from-green-500 to-emerald-500',
  'Biology': 'from-orange-500 to-red-500',
  'Science': 'from-indigo-500 to-blue-500',
  'English': 'from-rose-500 to-pink-500',
  'Social Science': 'from-amber-500 to-yellow-500',
  'Hindi': 'from-red-500 to-rose-500',
  'Sanskrit': 'from-purple-500 to-blue-500',
  'Botany': 'from-lime-500 to-green-500',
  'Zoology': 'from-sky-500 to-cyan-500',
  'CS/IT Interview Prep': 'from-slate-600 to-slate-400',
}

export default function SubjectsPage() {
  const params = useParams()
  const classId = params.classId as string
  const classInfo = classSubjects[classId]

  if (!classInfo) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Class not found</h1>
            <Link href="/notebooks" className="text-primary hover:underline">
              Go back to classes
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <Link href="/notebooks" className="text-primary hover:text-primary/80 transition-colors">
              <Home className="w-5 h-5" />
            </Link>
            <span className="text-muted-foreground">/</span>
            <h1 className="text-4xl font-bold text-foreground">{classInfo.title}</h1>
          </div>

          <p className="text-muted-foreground mb-12">Select a subject to explore chapters and study materials</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classInfo.subjects.map((subject) => {
              const color = subjectColors[subject] || 'from-gray-500 to-gray-600'
              return (
                <Link key={subject} href={`/notebooks/${classId}/${subject.toLowerCase().replace(/\//g, '-')}`}>
                  <div className="h-full group cursor-pointer transform transition duration-300 hover:scale-105">
                    <div className={`bg-gradient-to-br ${color} rounded-lg p-6 h-full flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-shadow`}>
                      <div>
                        <h2 className="text-2xl font-bold">{subject}</h2>
                        <p className="text-white/70 mt-2">View all chapters</p>
                      </div>
                      <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium">Browse Chapters</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
