# How to Add PDF Files to Ganit Yogi Learning

## Overview
Your learning platform now has full PDF viewing and download capabilities. Here's how to add more PDFs:

## Step 1: Upload Your PDF to Vercel Blob

### Option A: Using the Upload API (Recommended)
You can programmatically upload PDFs using the `/api/upload-pdf` endpoint:

```javascript
async function uploadPDF(file) {
  const formData = new FormData()
  formData.append('file', file)
  
  const response = await fetch('/api/upload-pdf', {
    method: 'POST',
    body: formData,
  })
  
  const data = await response.json()
  return data.url // This is your PDF URL to use in chapters-data
}
```

### Option B: Upload from v0 Dashboard
1. Go to your Vercel project settings
2. Navigate to Storage → Blob
3. Upload your PDF file directly
4. Copy the public URL provided

## Step 2: Add PDF Information to `lib/chapters-data.ts`

Once you have your PDF URL, add a new chapter entry to the `chaptersData` array:

```typescript
{
  id: 'class9-math-4',  // Unique identifier (format: class-subject-number)
  class: 'Class 9',     // Class level
  subject: 'Mathematics', // Subject name
  chapterNumber: 4,     // Chapter number
  title: 'Linear Equations in Two Variables',
  description: 'Understanding linear equations, graphical representation, and solving systems...',
  pdfUrl: 'https://your-vercel-blob-url/your-pdf-file.pdf', // YOUR PDF URL HERE
  difficulty: 'Intermediate', // 'Beginner', 'Intermediate', or 'Advanced'
  pages: 48, // Total pages in PDF
}
```

## Step 3: How the Viewer Works

Your PDF will automatically display with these features:

✅ **PDF Preview**: Full page-by-page viewing in the browser
✅ **Navigation**: Previous/Next page buttons with page counter
✅ **Download**: Direct download button to save the PDF locally
✅ **Share**: Share the chapter link with others
✅ **Responsive**: Works on mobile, tablet, and desktop

## Example: Adding Ganita Manjari Exercise 4.1

We've already added Exercise 4.1 from Ganita Manjari:

```typescript
{
  id: 'class9-math-3',
  class: 'Class 9',
  subject: 'Mathematics',
  chapterNumber: 3,
  title: 'Coordinate Geometry - Exercise 4.1 (Ganita Manjari)',
  description: 'Introduction to Cartesian coordinate system, plotting points, distance formula, and section formula. Foundation for analytical geometry.',
  pdfUrl: 'https://blobs.vusercontent.net/blob/Exercise%204.1%20Ganita%20Manjari-UuRq2Xl4iIacQGlEE3UhfGrELrTyw6.pdf',
  difficulty: 'Intermediate',
  pages: 12,
}
```

**To view it**: Navigate to `/notebooks/class-9/maths/class9-math-3`

## Key Files Modified

1. **`lib/chapters-data.ts`** - Chapter metadata including PDF URLs
2. **`components/pdf-viewer.tsx`** - PDF viewer component with page navigation
3. **`app/notebooks/[classId]/[subject]/[chapterId]/page.tsx`** - Chapter display page
4. **`app/api/upload-pdf/route.ts`** - PDF upload endpoint for Vercel Blob

## URL Structure for PDFs

Navigate to any chapter using this URL pattern:
```
/notebooks/[classId]/[subject]/[chapterId]

Examples:
- /notebooks/class-9/maths/class9-math-3  (Class 9 Math - Coordinate Geometry)
- /notebooks/class-10/science/class10-science-1  (Class 10 Science)
- /notebooks/jee/maths/jee-math-1  (JEE Maths)
- /notebooks/neet/biology/neet-biology-1  (NEET Biology)
```

## Class and Subject IDs

### Classes:
- `class-9`
- `class-10`
- `class-11`
- `class-12`
- `jee`
- `neet`

### Subjects (URL format - lowercase with hyphens):
- `maths`
- `physics`
- `chemistry`
- `biology`
- `science`
- `english`
- `social-science`
- `hindi`
- `sanskrit`
- `botany`
- `zoology`
- `cs-it-interview-prep`

## Adding a Complete Chapter Set

To add all chapters for a class and subject:

```typescript
// Class 9 - English
{
  id: 'class9-english-1',
  class: 'Class 9',
  subject: 'English',
  chapterNumber: 1,
  title: 'The Fountain - Poem',
  description: 'Appreciation and understanding of the famous poem by James Russell Lowell.',
  pdfUrl: 'https://your-vercel-blob-url/class9-english-1.pdf',
  difficulty: 'Beginner',
  pages: 35,
},
{
  id: 'class9-english-2',
  class: 'Class 9',
  subject: 'English',
  chapterNumber: 2,
  title: 'The Bond of Love - Story',
  description: 'Analysis of friendship and loyalty through this heartwarming narrative.',
  pdfUrl: 'https://your-vercel-blob-url/class9-english-2.pdf',
  difficulty: 'Beginner',
  pages: 40,
},
// ... continue for all chapters
```

## Troubleshooting

### PDF not displaying
- Check that the PDF URL is publicly accessible
- Ensure CORS is configured on Vercel Blob (it should be by default)
- Try downloading the PDF instead

### PDF takes too long to load
- PDF is large - consider splitting into smaller files
- Check your internet connection
- Verify the URL is correct

### Download not working
- Click the blue "Download" button in the chapter header
- Your browser should download the PDF automatically

## Features Available on Each Chapter

1. **Page Navigation** - Use arrow buttons to flip through pages
2. **Page Counter** - See current page and total pages
3. **Download Button** - Download the entire PDF with one click
4. **Share Button** - Share chapter link on social media or via messaging
5. **Chapter Info** - View difficulty level, page count, and description
6. **Navigation Links** - Jump to previous/next chapter
7. **Breadcrumbs** - Navigate back through your path (Class → Subject → Chapter)
