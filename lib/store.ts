import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Chapter {
  id: string
  classLevel: string
  subject: string
  chapterNumber: number
  title: string
  description: string
  fileUrl: string
  fileType: 'pdf' | 'docx'
  content?: string
  createdAt: string
  views: number
}

export interface Document {
  id: string
  title: string
  description: string
  price: number
  category: string
  image: string
  fileUrl: string
  createdAt: string
  downloads: number
}

export interface Review {
  id: string
  name: string
  email: string
  rating: number
  comment: string
  createdAt: string
  approved: boolean
}

export interface CartItem {
  document: Document
  quantity: number
}

interface StoreState {
  // Chapters data
  chapters: Chapter[]
  addChapter: (chapter: Omit<Chapter, 'id' | 'createdAt' | 'views'>) => void
  removeChapter: (id: string) => void
  updateChapter: (id: string, chapter: Partial<Chapter>) => void
  getChaptersByClass: (classLevel: string) => Chapter[]
  getChaptersBySubject: (classLevel: string, subject: string) => Chapter[]
  incrementChapterViews: (id: string) => void
  
  // Documents data (for marketplace)
  documents: Document[]
  addDocument: (doc: Omit<Document, 'id' | 'createdAt' | 'downloads'>) => void
  removeDocument: (id: string) => void
  updateDocument: (id: string, doc: Partial<Document>) => void
  
  // Review actions
  reviews: Review[]
  addReview: (review: Omit<Review, 'id' | 'createdAt' | 'approved'>) => void
  approveReview: (id: string) => void
  removeReview: (id: string) => void
  
  // Cart actions
  cart: CartItem[]
  addToCart: (document: Document) => void
  removeFromCart: (documentId: string) => void
  clearCart: () => void
  
  // Auth actions
  isAdminAuthenticated: boolean
  loginAdmin: (username: string, password: string) => boolean
  logoutAdmin: () => void
}

const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'coaching2024'

// Sample chapters data
const sampleChapters: Chapter[] = [
  {
    id: 'ch-1',
    classLevel: 'Class 9',
    subject: 'Maths',
    chapterNumber: 1,
    title: 'Orienting Yourself: The Use of Coordinates',
    description: 'Learn about coordinate geometry, plotting points, and understanding the Cartesian plane with solved examples.',
    fileUrl: '/documents/class9-maths-ch1.pdf',
    fileType: 'pdf',
    createdAt: new Date().toISOString(),
    views: 245
  },
  {
    id: 'ch-2',
    classLevel: 'Class 9',
    subject: 'Maths',
    chapterNumber: 2,
    title: 'Introduction to Linear Polynomials',
    description: 'Comprehensive guide to polynomials, linear equations, and algebraic expressions with practice problems.',
    fileUrl: '/documents/class9-maths-ch2.pdf',
    fileType: 'pdf',
    createdAt: new Date().toISOString(),
    views: 189
  },
  {
    id: 'ch-3',
    classLevel: 'Class 9',
    subject: 'Science',
    chapterNumber: 1,
    title: 'Matter in Our Surroundings',
    description: 'Explore matter, its properties, and states. Includes experiments and real-world applications.',
    fileUrl: '/documents/class9-science-ch1.pdf',
    fileType: 'pdf',
    createdAt: new Date().toISOString(),
    views: 312
  },
  {
    id: 'ch-4',
    classLevel: 'Class 10',
    subject: 'Maths',
    chapterNumber: 1,
    title: 'Real Numbers',
    description: 'Understanding real numbers, rational and irrational numbers, Euclid\'s division algorithm.',
    fileUrl: '/documents/class10-maths-ch1.pdf',
    fileType: 'pdf',
    createdAt: new Date().toISOString(),
    views: 456
  },
  {
    id: 'ch-5',
    classLevel: 'Class 10',
    subject: 'Science',
    chapterNumber: 1,
    title: 'Chemical Reactions and Equations',
    description: 'Learn about chemical reactions, balancing equations, and types of reactions with experiments.',
    fileUrl: '/documents/class10-science-ch1.pdf',
    fileType: 'pdf',
    createdAt: new Date().toISOString(),
    views: 523
  },
  {
    id: 'ch-6',
    classLevel: 'JEE',
    subject: 'Maths',
    chapterNumber: 1,
    title: 'Functions and Relations',
    description: 'Advanced concepts in functions, domain, range, and graphical representations for JEE preparation.',
    fileUrl: '/documents/jee-maths-ch1.pdf',
    fileType: 'pdf',
    createdAt: new Date().toISOString(),
    views: 678
  },
]

const sampleDocuments: Document[] = [
  {
    id: '1',
    title: 'Complete Mathematics Notes - Class 10',
    description: 'Comprehensive mathematics notes covering all chapters with solved examples and practice questions.',
    price: 299,
    category: 'Class 10',
    image: '/images/math-notes.jpg',
    fileUrl: '/documents/math-class10.pdf',
    createdAt: new Date().toISOString(),
    downloads: 156
  },
]

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Chapters
      chapters: sampleChapters,
      addChapter: (chapter) => set((state) => ({
        chapters: [...state.chapters, {
          ...chapter,
          id: `ch-${Date.now()}`,
          createdAt: new Date().toISOString(),
          views: 0
        }]
      })),
      removeChapter: (id) => set((state) => ({
        chapters: state.chapters.filter(ch => ch.id !== id)
      })),
      updateChapter: (id, chapter) => set((state) => ({
        chapters: state.chapters.map(ch => ch.id === id ? { ...ch, ...chapter } : ch)
      })),
      getChaptersByClass: (classLevel) => {
        const state = get()
        return state.chapters.filter(ch => ch.classLevel === classLevel)
      },
      getChaptersBySubject: (classLevel, subject) => {
        const state = get()
        return state.chapters.filter(ch => ch.classLevel === classLevel && ch.subject === subject)
      },
      incrementChapterViews: (id) => set((state) => ({
        chapters: state.chapters.map(ch => 
          ch.id === id ? { ...ch, views: ch.views + 1 } : ch
        )
      })),

      // Documents
      documents: sampleDocuments,
      addDocument: (doc) => set((state) => ({
        documents: [...state.documents, {
          ...doc,
          id: `doc-${Date.now()}`,
          createdAt: new Date().toISOString(),
          downloads: 0
        }]
      })),
      removeDocument: (id) => set((state) => ({
        documents: state.documents.filter(d => d.id !== id)
      })),
      updateDocument: (id, doc) => set((state) => ({
        documents: state.documents.map(d => d.id === id ? { ...d, ...doc } : d)
      })),

      // Reviews
      reviews: [],
      addReview: (review) => set((state) => ({
        reviews: [...state.reviews, {
          ...review,
          id: `rev-${Date.now()}`,
          createdAt: new Date().toISOString(),
          approved: false
        }]
      })),
      approveReview: (id) => set((state) => ({
        reviews: state.reviews.map(r => r.id === id ? { ...r, approved: true } : r)
      })),
      removeReview: (id) => set((state) => ({
        reviews: state.reviews.filter(r => r.id !== id)
      })),

      // Cart
      cart: [],
      addToCart: (document) => set((state) => ({
        cart: [...state.cart, { document, quantity: 1 }]
      })),
      removeFromCart: (documentId) => set((state) => ({
        cart: state.cart.filter(item => item.document.id !== documentId)
      })),
      clearCart: () => set({ cart: [] }),

      // Auth
      isAdminAuthenticated: false,
      loginAdmin: (username, password) => {
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
          set({ isAdminAuthenticated: true })
          return true
        }
        return false
      },
      logoutAdmin: () => set({ isAdminAuthenticated: false })
    }),
    {
      name: 'ganit-yogi-store'
    }
  )
)
