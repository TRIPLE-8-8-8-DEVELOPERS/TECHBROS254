
import { BookOpen, GraduationCap, Monitor, Users, Video, LineChart } from "lucide-react";
import { ServiceDetail } from "./types";

export const educationServices: ServiceDetail[] = [
  {
    id: "education-technology",
    slug: "education-technology",
    title: "Education Technology",
    icon: GraduationCap,
    category: "Education",
    shortDescription: "Digital learning solutions that transform educational experiences for students, educators, and institutions.",
    description: [
      "Our education technology services help educational institutions, publishers, and corporate training departments create innovative learning solutions. We develop digital tools that enhance engagement, improve learning outcomes, and streamline educational processes.",
      "From custom learning management systems (LMS) and interactive e-learning modules to student information systems and virtual classroom solutions, we create technology that addresses specific educational challenges and opportunities. Our solutions support traditional, online, and hybrid learning environments.",
      "We focus on creating intuitive, accessible learning experiences that engage students and provide educators with valuable insights. Our education technology solutions incorporate learning science principles, analytics capabilities, and seamless integration with existing tools."
    ],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Learning Platforms",
        description: "Custom LMS and learning experience platforms for diverse educational needs"
      },
      {
        title: "Interactive Content",
        description: "Engaging digital learning materials with multimedia and assessment capabilities"
      },
      {
        title: "Educational Analytics",
        description: "Data-driven insights to improve learning outcomes and instructional strategies"
      },
      {
        title: "Accessibility",
        description: "Ensuring digital learning resources are accessible to all learners"
      },
      {
        title: "Mobile Learning",
        description: "Learning solutions optimized for mobile devices and on-the-go access"
      },
      {
        title: "Gamification",
        description: "Game-based elements that increase motivation and engagement"
      }
    ],
    processSteps: [
      {
        title: "Needs Assessment",
        description: "Understanding specific learning objectives and educational requirements."
      },
      {
        title: "Solution Design",
        description: "Creating the educational technology architecture and user experience."
      },
      {
        title: "Content Strategy",
        description: "Planning how content will be structured, delivered, and assessed."
      },
      {
        title: "Development",
        description: "Building the educational technology solution with engagement in mind."
      },
      {
        title: "Testing & Validation",
        description: "Ensuring functionality, usability, and pedagogical effectiveness."
      },
      {
        title: "Implementation & Support",
        description: "Launching the solution and providing ongoing assistance and updates."
      }
    ],
    technologies: ["Learning Management Systems", "SCORM/xAPI", "Educational Data Mining", "Adaptive Learning", "Virtual Classrooms", "Content Authoring Tools"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&w=600&q=80"
    ],
    relatedServices: ["custom-software", "mobile-development", "ux-ui-design"],
    subcategories: [
      {
        id: "learning-management",
        slug: "learning-management",
        title: "Learning Management Systems",
        description: "Custom LMS solutions that streamline course delivery, student management, and assessment.",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&w=600&q=80",
        features: [
          "Course creation and content management tools",
          "Student enrollment and progress tracking",
          "Assignment submission and grading systems",
          "Discussion forums and collaboration spaces",
          "Assessment and certification management",
          "Learning path customization and adaptive learning"
        ],
        benefits: [
          "Centralized management of all learning activities",
          "Reduced administrative overhead for educators",
          "Enhanced student engagement through interactive features",
          "Data-driven insights to improve course effectiveness",
          "Scalable solution for growing educational needs",
          "Accessible learning anytime, anywhere"
        ]
      },
      {
        id: "virtual-classrooms",
        slug: "virtual-classrooms",
        title: "Virtual Classroom Solutions",
        description: "Interactive online learning environments that facilitate real-time instruction and collaboration.",
        icon: Video,
        image: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?auto=format&w=600&q=80",
        features: [
          "HD video conferencing with breakout rooms",
          "Interactive whiteboards and screen sharing",
          "Real-time polls and quizzes for engagement",
          "Session recording and playback capabilities",
          "Integrated chat and hand-raising features",
          "Attendance tracking and participation analytics"
        ],
        benefits: [
          "Remote learning experience comparable to in-person classes",
          "Increased accessibility for geographically dispersed students",
          "Cost savings on physical classroom facilities",
          "Enhanced learning through diverse digital tools",
          "Flexibility for synchronous and asynchronous learning",
          "Detailed analytics on student engagement and participation"
        ]
      },
      {
        id: "educational-apps",
        slug: "educational-apps",
        title: "Educational Apps",
        description: "Mobile and desktop applications designed specifically for learning and educational purposes.",
        icon: Monitor,
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&w=600&q=80",
        features: [
          "Subject-specific learning modules and activities",
          "Interactive exercises and skill-building games",
          "Progress tracking and personalized recommendations",
          "Offline access to learning materials",
          "Social learning features and peer collaboration",
          "Multimedia content integration (videos, animations, etc.)"
        ],
        benefits: [
          "Engaging, self-paced learning experiences",
          "Reinforcement of classroom concepts through practice",
          "Personalized learning paths based on individual progress",
          "Increased student motivation through gamification",
          "Convenient learning on mobile devices",
          "Data-driven insights on learning patterns and progress"
        ]
      },
      {
        id: "learning-analytics",
        slug: "learning-analytics",
        title: "Learning Analytics",
        description: "Data-driven tools that provide insights into student performance and learning patterns.",
        icon: LineChart,
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&w=600&q=80",
        features: [
          "Comprehensive learner performance dashboards",
          "Predictive analytics for identifying at-risk students",
          "Learning pattern recognition and visualization",
          "Custom reporting for administrators and educators",
          "Engagement metrics and correlation analysis",
          "Intervention recommendation systems"
        ],
        benefits: [
          "Early identification of learning challenges",
          "Data-informed teaching strategies and interventions",
          "Improved course design based on learning patterns",
          "Personalized support for diverse learning needs",
          "Evidence-based educational policy development",
          "Continuous improvement of learning outcomes"
        ]
      },
      {
        id: "corporate-training",
        slug: "corporate-training",
        title: "Corporate Training Platforms",
        description: "Custom learning solutions for employee development, compliance training, and skills enhancement.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&w=600&q=80",
        features: [
          "Role-based training paths and curricula",
          "Compliance tracking and certification management",
          "Skills assessment and gap analysis tools",
          "Microlearning modules for just-in-time training",
          "Simulation and scenario-based learning",
          "Integration with HR and performance management systems"
        ],
        benefits: [
          "Accelerated employee onboarding and productivity",
          "Reduced compliance risks with documented training",
          "Cost-effective scalable training delivery",
          "Consistent training experience across locations",
          "Improved employee retention through skills development",
          "Data-driven insights on training effectiveness and ROI"
        ]
      }
    ]
  }
];
