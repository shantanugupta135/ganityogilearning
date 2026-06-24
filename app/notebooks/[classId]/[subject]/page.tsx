'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { chaptersData } from '@/lib/chapters-data'
import { Eye, FileText, ArrowRight, Home, BookOpen } from 'lucide-react'

const classNames: { [key: string]: string } = {
  'class-9': 'Class 9',
  'class-10': 'Class 10',
  'class-11': 'Class 11',
  'class-12': 'Class 12',
  'jee': 'JEE Main/Advanced',
  'neet': 'NEET',
}

const classMapping: { [key: string]: string } = {
  'class-9': 'Class 9',
  'class-10': 'Class 10',
  'class-11': 'Class 11',
  'class-12': 'Class 12',
  'jee': 'JEE Main/Advanced',
  'neet': 'NEET',
}

export default function ChaptersPage() {
  const params = useParams()
  const classId = params.classId as string
  const subjectParam = params.subject as string

  // Convert param to proper subject name
  const subjectMap: { [key: string]: string } = {
    'maths': 'Mathematics',
    'physics': 'Physics',
    'chemistry': 'Chemistry',
    'biology': 'Biology',
    'science': 'Science',
    'english': 'English',
    'social-science': 'Social Science',
    'hindi': 'Hindi',
    'sanskrit': 'Sanskrit',
    'botany': 'Botany',
    'zoology': 'Zoology',
    'cs-it-interview-prep': 'CS/IP',
  }

  const subject = subjectMap[subjectParam] || subjectParam.charAt(0).toUpperCase() + subjectParam.slice(1)
  const className = classMapping[classId] || classId

  // Get chapters for this class and subject
  const chapters = chaptersData.filter(
    (chapter) => chapter.class === className && chapter.subject === subject
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
            <Link href="/notebooks" className="text-blue-600 hover:text-blue-700 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <span>/</span>
            <Link href={`/notebooks/${classId}`} className="text-blue-600 hover:text-blue-700 transition-colors">
              {className}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{subject}</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{className} - {subject}</h1>
            <p className="text-gray-600">Complete chapter-wise study material</p>
          </div>

          {chapters.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center border border-gray-200">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">No chapters available yet</h3>
              <p className="text-gray-600">Check back soon for {subject} chapters for {className}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {chapters.map((chapter) => (
                <Link key={chapter.id} href={`/notebooks/${classId}/${subjectParam}/${chapter.id}`}>
                  <div className="group bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-6 transition-all duration-200 hover:shadow-md cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                            Chapter {chapter.chapterNumber}
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">
                            {chapter.difficulty}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {chapter.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{chapter.description}</p>
                        <div className="flex items-center gap-6 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {chapter.pages} pages
                          </span>
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded">
                            {chapter.difficulty}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
