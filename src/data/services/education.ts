
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
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&w=600&q=80"
      },
      {
        id: "virtual-classrooms",
        slug: "virtual-classrooms",
        title: "Virtual Classroom Solutions",
        description: "Interactive online learning environments that facilitate real-time instruction and collaboration.",
        icon: Video,
        image: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?auto=format&w=600&q=80"
      },
      {
        id: "educational-apps",
        slug: "educational-apps",
        title: "Educational Apps",
        description: "Mobile and desktop applications designed specifically for learning and educational purposes.",
        icon: Monitor,
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&w=600&q=80"
      },
      {
        id: "learning-analytics",
        slug: "learning-analytics",
        title: "Learning Analytics",
        description: "Data-driven tools that provide insights into student performance and learning patterns.",
        icon: LineChart,
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&w=600&q=80"
      },
      {
        id: "corporate-training",
        slug: "corporate-training",
        title: "Corporate Training Platforms",
        description: "Custom learning solutions for employee development, compliance training, and skills enhancement.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&w=600&q=80"
      }
    ]
  }
];
