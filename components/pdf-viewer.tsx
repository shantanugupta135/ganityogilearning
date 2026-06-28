'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Download } from 'lucide-react'

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [fullscreenUrl, setFullscreenUrl] = useState<string | null>(null)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleFullscreen = () => {
    setFullscreenUrl(pdfUrl)
  }

  const handleCloseFullscreen = () => {
    setFullscreenUrl(null)
  }

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* PDF Controls */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
          <div className="text-xs md:text-sm font-semibold text-gray-700 truncate flex-1">
            {title}
          </div>
          <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-xs md:text-sm flex-1 md:flex-none justify-center"
              aria-label="Download PDF"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">DL</span>
            </button>
            <button
              onClick={handleFullscreen}
              className="px-3 md:px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium text-xs md:text-sm whitespace-nowrap"
              aria-label="View fullscreen"
            >
              <span className="hidden sm:inline">Fullscreen</span>
              <span className="sm:hidden">⛶</span>
            </button>
          </div>
        </div>

        {/* PDF Display using iframe */}
        <div className="relative bg-gray-100 w-full overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full border-0"
            style={{ 
              height: '50vh',
              minHeight: '400px'
            }}
            title={title}
            loading="lazy"
            allow="fullscreen"
          />
          <div className="md:hidden text-center py-3 bg-blue-50 border-t border-gray-200">
            <p className="text-xs text-gray-600">Tip: Tap fullscreen for better viewing on mobile</p>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenUrl && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="bg-gray-900 text-white px-3 md:px-6 py-3 md:py-4 flex items-center justify-between border-b border-gray-700">
            <h3 className="font-semibold text-sm md:text-base truncate flex-1">{title}</h3>
            <button
              onClick={handleCloseFullscreen}
              className="text-gray-300 hover:text-white transition-colors text-2xl md:text-3xl leading-none ml-3 flex-shrink-0"
              aria-label="Close fullscreen"
            >
              ×
            </button>
          </div>
          <div className="flex-1 w-full overflow-hidden">
            <iframe
              src={`${fullscreenUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              title={`${title} Fullscreen`}
              loading="lazy"
              allow="fullscreen"
            />
          </div>
        </div>
      )}
    </>
  )
}
