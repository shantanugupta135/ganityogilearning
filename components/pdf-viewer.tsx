'use client'

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
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 px-6 py-4 flex items-center justify-between gap-4">
          <div className="text-sm font-semibold text-gray-700">
            {title}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              aria-label="Download PDF"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={handleFullscreen}
              className="px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium text-sm"
              aria-label="View fullscreen"
            >
              Fullscreen
            </button>
          </div>
        </div>

        {/* PDF Display using iframe */}
        <div className="relative bg-gray-100">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full border-0"
            style={{ height: '70vh', minHeight: '600px' }}
            title={title}
            loading="lazy"
          />
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col">
          <div className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between border-b border-gray-700">
            <h3 className="font-semibold">{title}</h3>
            <button
              onClick={handleCloseFullscreen}
              className="text-gray-300 hover:text-white transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <iframe
            src={`${fullscreenUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="flex-1 border-0 w-full"
            title={`${title} Fullscreen`}
            loading="lazy"
          />
        </div>
      )}
    </>
  )
}
