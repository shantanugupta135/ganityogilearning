'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PDFViewer } from '@/components/pdf-viewer'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { chaptersData } from '@/lib/chapters-data'
import { Home, BookOpen, Download, Share2, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react'
import { useState } from 'react'

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

export default function ChapterViewerPage() {
  const params = useParams()
  const classId = params.classId as string
  const subjectParam = params.subject as string
  const chapterId = params.chapterId as string



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

  // Find chapter
  const chapter = chaptersData.find((ch) => ch.id === chapterId)

  if (!chapter) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h1 className="text-2xl font-bold mb-2 text-gray-900">Chapter not found</h1>
            <p className="text-gray-600 mb-6">The chapter you are looking for does not exist.</p>
            <Link href="/notebooks" className="text-blue-600 hover:text-blue-700 font-medium">
              Go back to notebooks
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Get adjacent chapters for navigation
  const allChapters = chaptersData.filter((ch) => ch.class === className && ch.subject === subject)
  const currentIndex = allChapters.findIndex((ch) => ch.id === chapterId)
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null

  const handleDownload = () => {
    // Create a temporary link and download
    const link = document.createElement('a')
    link.href = chapter.pdfUrl
    link.download = `${chapter.title}.pdf`
    link.click()
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: chapter.title,
        text: `Check out this chapter: ${chapter.title} from ${className} ${subject}`,
        url: window.location.href,
      }).catch(() => {})
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600 overflow-x-auto pb-2">
            <Link href="/notebooks" className="text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0">
              <Home className="w-4 h-4" />
            </Link>
            <span>/</span>
            <Link href={`/notebooks/${classId}`} className="text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0">
              {className}
            </Link>
            <span>/</span>
            <Link href={`/notebooks/${classId}/${subjectParam}`} className="text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0">
              {subject}
            </Link>
            <span>/</span>
            <span className="truncate text-gray-900">Chapter {chapter.chapterNumber}</span>
          </div>

          {/* Header with Actions */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Chapter {chapter.chapterNumber}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">
                    {chapter.difficulty}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{chapter.title}</h1>
                <p className="text-gray-600 mb-4">{chapter.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {chapter.pages} pages
                  </span>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                    {chapter.difficulty}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="mb-8">
            <PDFViewer pdfUrl={chapter.pdfUrl} title={chapter.title} />
          </div>

          {/* Chapter Content Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Chapter</h3>
            <p className="text-gray-700 leading-relaxed">{chapter.description}</p>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Difficulty</p>
                  <p className="text-sm font-bold text-gray-900">{chapter.difficulty}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Pages</p>
                  <p className="text-sm font-bold text-gray-900">{chapter.pages}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Subject</p>
                  <p className="text-sm font-bold text-gray-900">{chapter.subject}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Class</p>
                  <p className="text-sm font-bold text-gray-900">{chapter.class}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {prevChapter ? (
              <Link href={`/notebooks/${classId}/${subjectParam}/${prevChapter.id}`}>
                <div className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-3">
                    <ChevronLeft className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-600 font-medium">Previous Chapter</p>
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        Chapter {prevChapter.chapterNumber}: {prevChapter.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 rounded-lg p-4 opacity-50 cursor-not-allowed" />
            )}

            {nextChapter ? (
              <Link href={`/notebooks/${classId}/${subjectParam}/${nextChapter.id}`}>
                <div className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 transition-all cursor-pointer h-full">
                  <div className="flex items-center justify-end gap-3">
                    <div className="flex-1 min-w-0 text-right">
                      <p className="text-xs text-gray-600 font-medium">Next Chapter</p>
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        Chapter {nextChapter.chapterNumber}: {nextChapter.title}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-100 rounded-lg p-4 opacity-50 cursor-not-allowed" />
            )}
          </div>

          {/* Back to Chapters */}
          <div className="text-center">
            <Link href={`/notebooks/${classId}/${subjectParam}`} className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2">
              ← Back to all chapters
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
