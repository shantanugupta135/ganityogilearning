import { BookOpen, Calculator, Atom, Code, GraduationCap, Briefcase, MonitorPlay, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const courses = [
  {
    icon: Users,
    title: 'Class 6-8 Foundation',
    description: 'Build strong fundamentals in Mathematics, Science, and English. Perfect foundation for future success.',
    features: ['All Subjects', 'Olympiad Prep', 'NTSE/NSO'],
    color: 'bg-pink-500/10 text-pink-600',
  },
  {
    icon: Calculator,
    title: 'Class 9-10 (CBSE/ICSE)',
    description: 'Complete board exam preparation with focus on Maths, Science, English, and Social Studies.',
    features: ['All Subjects', 'Board Focus', 'Regular Tests'],
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Atom,
    title: 'Class 11-12 Science',
    description: 'Advanced coaching for Physics, Chemistry, Mathematics, and Biology with practical exposure.',
    features: ['PCM/PCB', 'Board + JEE/NEET', 'Lab Sessions'],
    color: 'bg-green-500/10 text-green-600',
  },
  {
    icon: BookOpen,
    title: 'Class 11-12 Commerce',
    description: 'Expert guidance in Accountancy, Business Studies, Economics, and Mathematics.',
    features: ['Accounts', 'Economics', 'Business Studies'],
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: GraduationCap,
    title: 'JEE Main & Advanced',
    description: 'Intensive coaching program designed to crack IIT-JEE with conceptual clarity and problem-solving skills.',
    features: ['2 Year Program', 'Mock Tests', 'Rank Improvement'],
    color: 'bg-red-500/10 text-red-600',
  },
  {
    icon: Atom,
    title: 'NEET Preparation',
    description: 'Comprehensive medical entrance exam preparation with focus on NCERT and competitive concepts.',
    features: ['Biology Focus', 'NCERT Based', 'Previous Papers'],
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: Code,
    title: 'CS/IP (Class 9 to B.Tech)',
    description: 'Computer Science and Informatics Practices coaching. Python, Java, Data Structures & Web Development.',
    features: ['Python/Java', 'Data Structures', 'Web Dev'],
    color: 'bg-violet-500/10 text-violet-600',
  },
  {
    icon: Briefcase,
    title: 'IT Interview Preparation',
    description: 'Complete preparation for IT job interviews. DSA, System Design, Coding Practice & Mock Interviews.',
    features: ['DSA', 'System Design', 'Mock Interviews'],
    color: 'bg-teal-500/10 text-teal-600',
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[oklch(0.75_0.12_85)] uppercase tracking-wider">Our Courses</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Comprehensive Online Coaching Programs
          </h2>
          <p className="text-muted-foreground mt-4">
            From foundation classes to IT interview preparation, we offer a wide range of online courses designed to help students excel. Choose the program that suits your goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Card key={course.title} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center mb-3`}>
                  <course.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  {course.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
