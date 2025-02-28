
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "CEO & Founder",
    bio: "Alex has over 15 years of experience in technology leadership. Previously, he worked at major tech companies like Google and Microsoft before founding TechBros.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&w=400&q=80",
    socialLinks: {
      email: "alex@techbros.com",
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO",
    bio: "Sarah is a cloud architecture expert with a background in distributed systems. She leads our technical strategy and ensures we utilize the latest technologies.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&w=400&q=80",
    socialLinks: {
      email: "sarah@techbros.com",
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Lead Developer",
    bio: "James specializes in full-stack development and has contributed to numerous open-source projects. He leads our development team with expertise in React and Node.js.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=400&q=80",
    socialLinks: {
      email: "james@techbros.com",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "Melissa Rodriguez",
    role: "UX/UI Designer",
    bio: "Melissa brings creativity and user-centered design principles to our team. She has a background in psychology and specializes in creating intuitive interfaces.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&w=400&q=80",
    socialLinks: {
      email: "melissa@techbros.com",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 5,
    name: "David Kim",
    role: "DevOps Engineer",
    bio: "David ensures our infrastructure runs smoothly. With expertise in AWS and Kubernetes, he manages our CI/CD pipelines and cloud architecture.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&w=400&q=80",
    socialLinks: {
      email: "david@techbros.com",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 6,
    name: "Emma Johnson",
    role: "Product Manager",
    bio: "Emma bridges the gap between business needs and technical implementation. She manages our product roadmap and ensures we deliver value to clients.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&w=400&q=80",
    socialLinks: {
      email: "emma@techbros.com",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 7,
    name: "Michael Davis",
    role: "Data Scientist",
    bio: "Michael applies machine learning and AI techniques to solve complex problems. He leads our data science initiatives and AI implementations.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&w=400&q=80",
    socialLinks: {
      email: "michael@techbros.com",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 8,
    name: "Lisa Zhang",
    role: "Mobile Developer",
    bio: "Lisa specializes in cross-platform mobile development using React Native and Flutter. She has shipped several successful mobile apps.",
    image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?auto=format&w=400&q=80",
    socialLinks: {
      email: "lisa@techbros.com",
      linkedin: "#",
      github: "#"
    }
  }
];

const Team = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-50 via-tech-100 to-tech-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-tech-800">Meet Our Team</h1>
              <p className="text-lg text-gray-700 mb-6">
                The brilliant minds behind TechBros. We're a diverse team of developers, designers, and digital strategists.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <div className="w-16 h-1 bg-tech-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 animate-reveal"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <div className="flex space-x-3">
                          {member.socialLinks.email && (
                            <a 
                              href={`mailto:${member.socialLinks.email}`} 
                              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-sm"
                              aria-label={`Email ${member.name}`}
                            >
                              <Mail size={16} className="text-white" />
                            </a>
                          )}
                          {member.socialLinks.linkedin && (
                            <a 
                              href={member.socialLinks.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-sm"
                              aria-label={`LinkedIn profile of ${member.name}`}
                            >
                              <Linkedin size={16} className="text-white" />
                            </a>
                          )}
                          {member.socialLinks.twitter && (
                            <a 
                              href={member.socialLinks.twitter} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-sm"
                              aria-label={`Twitter profile of ${member.name}`}
                            >
                              <Twitter size={16} className="text-white" />
                            </a>
                          )}
                          {member.socialLinks.github && (
                            <a 
                              href={member.socialLinks.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-sm"
                              aria-label={`GitHub profile of ${member.name}`}
                            >
                              <Github size={16} className="text-white" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-left">{member.name}</h3>
                      <p className="text-tech-500 font-medium mb-3 text-left">{member.role}</p>
                      <p className="text-gray-600 text-sm text-left">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16 bg-tech-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-left">Collaborative Culture</h3>
                  <p className="text-gray-600 text-left">Work in a dynamic environment where ideas are valued and innovation is encouraged.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-left">Professional Growth</h3>
                  <p className="text-gray-600 text-left">Continuous learning opportunities and career advancement paths for all team members.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-left">Work-Life Balance</h3>
                  <p className="text-gray-600 text-left">Flexible working arrangements and comprehensive benefits to support your wellbeing.</p>
                </div>
              </div>
              
              <a 
                href="/careers" 
                className="inline-block px-8 py-4 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 font-medium"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
