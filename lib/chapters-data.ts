export interface Chapter {
  id: string
  class: string
  subject: string
  chapterNumber: number
  title: string
  description: string
  pdfUrl: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  pages: number
}

export const chaptersData: Chapter[] = [
  // Class 9 - Mathematics
  {
    id: 'class9-math-1',
    class: 'Class 9',
    subject: 'Mathematics',
    chapterNumber: 1,
    title: 'Cordinate Geometry',
    description: 'Introduction to natural numbers, integers, rational and irrational numbers. Understanding the real number line and operations on different number systems.',
    pdfUrl: 'https://example.com/class9-math-ch1.pdf',
    difficulty: 'Beginner',
    pages: 45,
  },
   {
    id: 'class9-math-1',
    class: 'Class 9',
    subject: 'Mathematics',
    chapterNumber: 1,
    title: 'Cordinate Geometry',
    description: 'Introduction to natural numbers, integers, rational and irrational numbers. Understanding the real number line and operations on different number systems.',
    pdfUrl: 'https://odxpvdxmlanxz0b3.private.blob.vercel-storage.com/9thClass/social%20science/Shaping%20of%20the%20Earth%20Surface%20notes%20PDF%20(1).pdf?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfb0RYUHZkeG1MQW5YWjBCMyIsIm93bmVySWQiOiJ0ZWFtX0pHdkRuWjZhSTVDeXZGcjVNdmhObXhkciIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgyNTQyODc0OTQ1LCJpYXQiOjE3ODI0OTk2NzUyODB9.Y9tZUqLc7tfMuZEdT--703wBvTSMjyMv_U7dPHPLqww&vercel-blob-signature=qpSCymOTChbKaRePEz2vV3dZSN4iaarTZn-9VdMwNug',
    difficulty: 'Beginner',
    pages: 45,
  },
  {
    id: 'class9-math-2',
    class: 'Class 9',
    subject: 'Mathematics',
    chapterNumber: 2,
    title: 'Cell',
    description: 'Introduction to the basic unit of life, cell structure, and functions. Understanding different types of cells and their components.',
    pdfUrl: 'https://odxpvdxmlanxz0b3.private.blob.vercel-storage.com/9thClass/Chapter%202%20Cell.pdf?vercel-blob-valid-until=1782640508659&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfb0RYUHZkeG1MQW5YWjBCMyIsIm93bmVySWQiOiJ0ZWFtX0pHdkRuWjZhSTVDeXZGcjVNdmhObXhkciIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgyNjgxNDI2NzMzLCJpYXQiOjE3ODI2MzgyMjY4Nzh9.TK02UhSYoFQbm570X097TiuQQaeyhlSJSrMzMl0zKvs&vercel-blob-signature=PVTOTjMtTA4nBR5ZEjQ_iMvekOT3SlrKWCNRX6RICdo',
    difficulty: 'Beginner',
    pages: 38,
  },
  {
    id: 'class9-math-3',
    class: 'Class 9',
    subject: 'Mathematics',
    chapterNumber: 3,
    title: 'Coordinate Geometry - Exercise 4.1 (Ganita Manjari)',
    description: 'Introduction to Cartesian coordinate system, plotting points, distance formula, and section formula. Foundation for analytical geometry. This includes algebraic identities and their applications with solved examples.',
    pdfUrl: 'https://blobs.vusercontent.net/blob/Exercise%204.1%20Ganita%20Manjari-UuRq2Xl4iIacQGlEE3UhfGrELrTyw6.pdf',
    difficulty: 'Intermediate',
    pages: 12,
  },
  {
    id: 'class9-math-4',
    class: 'Class 9',
    subject: 'Mathematics',
    chapterNumber: 4,
    title: 'Linear Equations in Two Variables',
    description: 'Understanding linear equations, graphical representation, and solving systems of linear equations with two variables.',
    pdfUrl: 'https://example.com/class9-math-ch4.pdf',
    difficulty: 'Intermediate',
    pages: 48,
  },

  // Class 9 - Science
  {
    id: 'class9-science-1',
    class: 'Class 9',
    subject: 'Science',
    chapterNumber: 1,
    title: 'Matter in Our Surroundings',
    description: 'Learn about states of matter (solid, liquid, gas), their properties, and changes of states. Understanding physical and chemical changes.',
    pdfUrl: 'https://example.com/class9-science-ch1.pdf',
    difficulty: 'Beginner',
    pages: 42,
  },
  {
    id: 'class9-science-2',
    class: 'Class 9',
    subject: 'Science',
    chapterNumber: 2,
    title: 'Is Matter Around Us Pure',
    description: 'Understanding elements, compounds, mixtures, and methods of separation. Pure substances and their classification.',
    pdfUrl: 'https://example.com/class9-science-ch2.pdf',
    difficulty: 'Intermediate',
    pages: 50,
  },

  // Class 10 - Mathematics
  {
    id: 'class10-math-1',
    class: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 1,
    title: 'Real Numbers',
    description: 'Euclidean division algorithm, fundamental theorem of arithmetic, rational and irrational numbers with proofs.',
    pdfUrl: 'https://example.com/class10-math-ch1.pdf',
    difficulty: 'Intermediate',
    pages: 55,
  },
  {
    id: 'class10-math-2',
    class: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 2,
    title: 'Polynomials',
    description: 'Degree of polynomials, remainder theorem, factor theorem, and algebraic identities for solving problems.',
    pdfUrl: 'https://example.com/class10-math-ch2.pdf',
    difficulty: 'Intermediate',
    pages: 48,
  },
  {
    id: 'class10-math-3',
    class: 'Class 10',
    subject: 'Mathematics',
    chapterNumber: 3,
    title: 'Quadratic Equations',
    description: 'Standard form, solving by factorization, completing the square, quadratic formula, and nature of roots.',
    pdfUrl: 'https://example.com/class10-math-ch3.pdf',
    difficulty: 'Advanced',
    pages: 60,
  },

  // Class 10 - Science
  {
    id: 'class10-science-1',
    class: 'Class 10',
    subject: 'Science',
    chapterNumber: 1,
    title: 'Chemical Reactions and Equations',
    description: 'Types of chemical reactions, balancing equations, and their applications in daily life.',
    pdfUrl: 'https://example.com/class10-science-ch1.pdf',
    difficulty: 'Intermediate',
    pages: 58,
  },

  // Class 11 - Mathematics
  {
    id: 'class11-math-1',
    class: 'Class 11',
    subject: 'Mathematics',
    chapterNumber: 1,
    title: 'Sets',
    description: 'Concept of sets, types of sets, set operations, and Venn diagrams with applications.',
    pdfUrl: 'https://example.com/class11-math-ch1.pdf',
    difficulty: 'Beginner',
    pages: 45,
  },

  // JEE Preparation
  {
    id: 'jee-math-1',
    class: 'JEE Main/Advanced',
    subject: 'Mathematics',
    chapterNumber: 1,
    title: 'Algebra - Advanced Concepts',
    description: 'Advanced algebraic identities, binomial theorem, sequences and series, and complex number operations for JEE.',
    pdfUrl: 'https://example.com/jee-math-algebra.pdf',
    difficulty: 'Advanced',
    pages: 85,
  },
  {
    id: 'jee-physics-1',
    class: 'JEE Main/Advanced',
    subject: 'Physics',
    chapterNumber: 1,
    title: 'Mechanics - Motion and Forces',
    description: 'Newton&apos;s laws, circular motion, work-energy theorem, and rotational dynamics with solved examples.',
    pdfUrl: 'https://example.com/jee-physics-mechanics.pdf',
    difficulty: 'Advanced',
    pages: 95,
  },

  // NEET Preparation
  {
    id: 'neet-biology-1',
    class: 'NEET',
    subject: 'Biology',
    chapterNumber: 1,
    title: 'Cell Structure and Function',
    description: 'Plant and animal cells, cell organelles, their functions, and ultra-structure relevant for NEET.',
    pdfUrl: 'https://example.com/neet-biology-cells.pdf',
    difficulty: 'Intermediate',
    pages: 72,
  },
]
