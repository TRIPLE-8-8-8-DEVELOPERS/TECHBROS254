import { Link, useParams } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";

// Sample team data (add more as needed)
const teamMembers = [
  {
    id: 1,
    slug: "mike-wilson",
    name: "Mike Wilson",
    title: "Chief Executive Officer",
    bio: [
      "Mike is a visionary tech entrepreneur with 20+ years of experience leading high-growth startups and global teams.",
      "He excels at driving innovation, scaling businesses, and building a culture of excellence and collaboration.",
      "Mike holds an MBA from Harvard Business School and a BSc in Computer Science from MIT.",
      "He previously founded two successful SaaS companies, both acquired by Fortune 500 firms.",
      "Mike is a frequent keynote speaker at international tech conferences and an advisor to several Silicon Valley startups.",
      "In his free time, Mike enjoys mountain biking, mentoring young entrepreneurs, and volunteering for STEM education initiatives."
    ],
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    expertise: ["Leadership", "Innovation", "Growth Strategy", "SaaS", "Startups", "Public Speaking", "M&A", "Mentorship"],
    linkedin: "https://www.linkedin.com/in/mike-wilson-337750335/"
  },
  {
    id: 2,
    slug: "john-smith",
    name: "John Smith",
    title: "Chief Technology Officer",
    bio: [
      "John architects scalable solutions and leads the engineering team with a focus on innovation.",
      "He has a background in AI, cloud infrastructure, and full-stack development.",
      "John earned his MS in Artificial Intelligence from Stanford and has 15 years of experience in enterprise software.",
      "He has led cloud migration projects for Fortune 100 companies and built award-winning AI products.",
      "John is passionate about open source and has contributed to several major projects on GitHub.",
      "Outside work, John enjoys chess, hiking, and teaching coding bootcamps for underrepresented groups." 
    ],
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    expertise: ["AI", "Cloud", "Full-Stack Development", "Open Source", "Cloud Migration", "Team Leadership", "Enterprise Software", "Mentorship"],
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 3,
    slug: "mary-johnson",
    name: "Mary Johnson",
    title: "Head of Product",
    bio: [
      "Mary leads product strategy and UX, ensuring customer needs are at the heart of every solution.",
      "She has launched multiple award-winning SaaS products.",
      "Mary holds a Master's in Human-Computer Interaction from Carnegie Mellon.",
      "She has 12 years of experience in product management, working with both startups and global enterprises.",
      "Mary is an advocate for inclusive design and regularly speaks at UX conferences.",
      "She enjoys painting, traveling, and mentoring women in tech." 
    ],
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    expertise: ["Product Management", "UX/UI", "Agile", "Inclusive Design", "SaaS", "User Research", "Roadmapping", "Mentorship"],
    linkedin: "https://linkedin.com/in/maryjohnson"
  },
  {
    id: 4,
    slug: "peter-thomas",
    name: "Peter Thomas",
    title: "Lead Software Engineer",
    bio: [
      "Peter is a full-stack engineer with deep expertise in cloud-native applications and DevOps.",
      "He mentors junior developers and drives technical excellence across projects.",
      "Peter has a BSc in Software Engineering from UC Berkeley and 10+ years of hands-on coding experience.",
      "He has led the migration of legacy systems to microservices architectures for several large clients.",
      "Peter is a certified AWS Solutions Architect and Docker/Kubernetes expert.",
      "He enjoys rock climbing, hackathons, and contributing to open source DevOps tools." 
    ],
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    expertise: ["DevOps", "Cloud-Native", "Mentorship", "Microservices", "AWS", "Docker", "Kubernetes", "Legacy Migration"],
    linkedin: "https://linkedin.com/in/peterthomas"
  },
  {
    id: 5,
    slug: "lucy-miller",
    name: "Lucy Miller",
    title: "UX/UI Designer",
    bio: [
      "Lucy crafts intuitive interfaces and delightful user experiences for web and mobile platforms.",
      "She is passionate about accessibility and design systems.",
      "Lucy has a BFA in Graphic Design from RISD and 8 years of experience in digital product design.",
      "She has designed for fintech, healthcare, and e-commerce brands, winning two Webby Awards.",
      "Lucy is an advocate for digital accessibility and leads internal workshops on inclusive design.",
      "In her spare time, Lucy enjoys photography, yoga, and volunteering for local arts programs." 
    ],
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    expertise: ["UX/UI", "Accessibility", "Design Systems", "Web Design", "Mobile Design", "Figma", "Prototyping", "Workshops"],
    linkedin: "https://linkedin.com/in/lucymiller"
  },
  {
    id: 6,
    slug: "david-brown",
    name: "David Brown",
    title: "Data Scientist",
    bio: [
      "David builds machine learning models and data pipelines for actionable business insights.",
      "He has experience in NLP, computer vision, and big data analytics."
    ],
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    expertise: ["Machine Learning", "NLP", "Big Data"],
    linkedin: "https://linkedin.com/in/davidbrown"
  },
  {
    id: 7,
    slug: "agnes-taylor",
    name: "Agnes Taylor",
    title: "Marketing Manager",
    bio: [
      "Agnes drives brand strategy and digital marketing campaigns for global reach.",
      "She specializes in content marketing, SEO, and growth hacking."
    ],
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    expertise: ["Marketing", "SEO", "Growth Hacking"],
    linkedin: "https://linkedin.com/in/agnestaylor"
  },
  {
    id: 8,
    slug: "susan-martin",
    name: "Susan Martin",
    title: "Cloud Solutions Architect",
    bio: [
      "Susan designs scalable cloud infrastructures and leads cloud migration projects for enterprise clients.",
      "She is passionate about automation, security, and DevOps best practices."
    ],
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    expertise: ["Cloud Architecture", "DevOps", "Security"],
    linkedin: "https://linkedin.com/in/susanmartin"
  },
  {
    id: 9,
    slug: "brian-moore",
    name: "Brian Moore",
    title: "Mobile App Developer",
    bio: [
      "Brian specializes in building high-performance mobile apps for Android and iOS platforms.",
      "He is skilled in React Native, Flutter, and mobile UI/UX design."
    ],
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    expertise: ["React Native", "Flutter", "Mobile UX"],
    linkedin: "https://linkedin.com/in/brianmoore"
  },
  {
    id: 10,
    slug: "grace-harris",
    name: "Grace Harris",
    title: "QA Lead",
    bio: [
      "Grace ensures product quality through automated and manual testing, and leads the QA team.",
      "She is experienced in test automation frameworks and continuous integration."
    ],
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    expertise: ["QA Automation", "Manual Testing", "CI/CD"],
    linkedin: "https://linkedin.com/in/graceharris"
  },
  {
    id: 11,
    slug: "kevin-anderson",
    name: "Kevin Anderson",
    title: "Backend Developer",
    bio: [
      "Kevin builds robust APIs and microservices, focusing on performance and scalability.",
      "He is proficient in Node.js, Python, and database design."
    ],
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    expertise: ["Node.js", "Python", "APIs"],
    linkedin: "https://linkedin.com/in/kevinanderson"
  },
  {
    id: 12,
    slug: "edith-thomas",
    name: "Edith Thomas",
    title: "Content Strategist",
    bio: [
      "Edith crafts compelling content strategies to boost brand awareness and engagement.",
      "She has a background in digital marketing, copywriting, and SEO."
    ],
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    expertise: ["Content Strategy", "Copywriting", "SEO"],
    linkedin: "https://linkedin.com/in/ediththomas"
  },
  {
    id: 13,
    slug: "james-miller",
    name: "James Miller",
    title: "Front-End Developer",
    bio: [
      "James creates responsive, accessible, and visually appealing web interfaces.",
      "He is skilled in React, TypeScript, and modern CSS frameworks."
    ],
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    expertise: ["React", "TypeScript", "CSS"],
    linkedin: "https://linkedin.com/in/jamesmiller"
  },
  {
    id: 14,
    slug: "pauline-jones",
    name: "Pauline Jones",
    title: "Project Manager",
    bio: [
      "Pauline ensures projects are delivered on time and within scope, leading cross-functional teams.",
      "She is experienced in Agile, Scrum, and stakeholder management."
    ],
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    expertise: ["Agile", "Scrum", "Project Management"],
    linkedin: "https://linkedin.com/in/paulinejones"
  },
  {
    id: 15,
    slug: "daniel-white",
    name: "Daniel White",
    title: "UI/UX Researcher",
    bio: [
      "Daniel conducts user research and usability testing to inform design decisions.",
      "He is passionate about user-centered design and accessibility."
    ],
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    expertise: ["User Research", "Usability Testing", "Accessibility"],
    linkedin: "https://linkedin.com/in/danielwhite"
  },
  {
    id: 16,
    slug: "carol-walker",
    name: "Carol Walker",
    title: "Business Analyst",
    bio: [
      "Carol bridges the gap between business needs and technical solutions.",
      "She excels at requirements gathering, process mapping, and stakeholder communication."
    ],
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    expertise: ["Business Analysis", "Process Mapping", "Stakeholder Management"],
    linkedin: "https://linkedin.com/in/carolwalker"
  },
  {
    id: 17,
    slug: "frank-young",
    name: "Frank Young",
    title: "DevOps Engineer",
    bio: [
      "Frank automates deployment pipelines and manages cloud infrastructure for reliability and scalability.",
      "He is experienced in CI/CD, Docker, and Kubernetes."
    ],
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    expertise: ["DevOps", "CI/CD", "Kubernetes"],
    linkedin: "https://linkedin.com/in/frankyoung"
  },
  {
    id: 18,
    slug: "sylvia-hall",
    name: "Sylvia Hall",
    title: "Customer Success Manager",
    bio: [
      "Sylvia ensures clients achieve their goals and have a seamless experience with our solutions.",
      "She is skilled in onboarding, support, and building long-term relationships."
    ],
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    expertise: ["Customer Success", "Onboarding", "Client Support"],
    linkedin: "https://linkedin.com/in/sylviahall"
  },
  {
    id: 19,
    slug: "martin-king",
    name: "Martin King",
    title: "Security Engineer",
    bio: [
      "Martin protects our systems and data through proactive security measures and audits.",
      "He is experienced in penetration testing, threat modeling, and compliance."
    ],
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    expertise: ["Cybersecurity", "Penetration Testing", "Compliance"],
    linkedin: "https://linkedin.com/in/martinking"
  },
  {
    id: 20,
    slug: "janet-lee",
    name: "Janet Lee",
    title: "HR Specialist",
    bio: [
      "Janet manages recruitment, onboarding, and employee engagement initiatives.",
      "She is passionate about people, culture, and professional development."
    ],
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    expertise: ["HR", "Recruitment", "Employee Engagement"],
    linkedin: "https://linkedin.com/in/janetlee"
  },
  {
    id: 21,
    slug: "george-baker",
    name: "George Baker",
    title: "Full Stack Developer",
    bio: [
      "George builds and maintains both frontend and backend systems for scalable web applications.",
      "He is skilled in JavaScript, Node.js, and cloud platforms."
    ],
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    expertise: ["Full Stack", "JavaScript", "Cloud"],
    linkedin: "https://linkedin.com/in/georgebaker"
  },
  {
    id: 22,
    slug: "mercy-adams",
    name: "Mercy Adams",
    title: "Finance Manager",
    bio: [
      "Mercy oversees financial planning, budgeting, and reporting for the company.",
      "She is experienced in financial analysis, forecasting, and compliance."
    ],
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    expertise: ["Finance", "Budgeting", "Analysis"],
    linkedin: "https://linkedin.com/in/mercyadams"
  },
  {
    id: 23,
    slug: "vincent-cooper",
    name: "Vincent Cooper",
    title: "AI Solutions Engineer",
    bio: [
      "Vincent develops and deploys AI-powered solutions for business automation and analytics.",
      "He is skilled in machine learning, data engineering, and cloud AI services."
    ],
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    expertise: ["AI Engineering", "Machine Learning", "Cloud AI"],
    linkedin: "https://linkedin.com/in/vincentcooper"
  },
  {
    id: 24,
    slug: "hannah-wood",
    name: "Hannah Wood",
    title: "Operations Manager",
    bio: [
      "Hannah oversees daily operations, process optimization, and resource allocation.",
      "She is experienced in logistics, team leadership, and workflow automation."
    ],
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    expertise: ["Operations", "Logistics", "Process Optimization"],
    linkedin: "https://linkedin.com/in/hannahwood"
  },
  {
    id: 25,
    slug: "patrick-murphy",
    name: "Patrick Murphy",
    title: "Support Engineer",
    bio: [
      "Patrick provides technical support and troubleshooting for clients and internal teams.",
      "He is skilled in customer service, diagnostics, and technical documentation."
    ],
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    expertise: ["Support", "Diagnostics", "Documentation"],
    linkedin: "https://linkedin.com/in/patrickmurphy"
  },
  {
    id: 26,
    slug: "esther-mitchell",
    name: "Esther Mitchell",
    title: "Partnerships Lead",
    bio: [
      "Esther builds and manages strategic partnerships to drive business growth.",
      "She is experienced in B2B sales, negotiations, and relationship management."
    ],
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    expertise: ["Partnerships", "B2B Sales", "Negotiation"],
    linkedin: "https://linkedin.com/in/esthermitchell"
  },
  {
    id: 27,
    slug: "samuel-ross",
    name: "Samuel Ross",
    title: "Systems Administrator",
    bio: [
      "Samuel manages IT infrastructure, networks, and system security for the organization.",
      "He is skilled in Linux, Windows Server, and network administration."
    ],
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    expertise: ["Systems Admin", "Networking", "Security"],
    linkedin: "https://linkedin.com/in/samuelross"
  },
  {
    id: 28,
    slug: "olivia-brooks",
    name: "Olivia Brooks",
    title: "Head of Legal Affairs",
    bio: [
      "Olivia oversees all legal operations, compliance, and risk management for the company.",
      "She holds a JD from Yale Law School and has over 14 years of experience in corporate law.",
      "Olivia has advised Fortune 500 companies on mergers, acquisitions, and intellectual property.",
      "She is a member of the American Bar Association and a frequent speaker on tech law.",
      "Outside work, Olivia enjoys hiking, reading historical fiction, and volunteering for pro bono legal clinics."
    ],
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    expertise: ["Corporate Law", "Compliance", "Risk Management", "M&A", "IP Law", "Public Speaking"],
    linkedin: "https://linkedin.com/in/oliviabrooks"
  },
  {
    id: 29,
    slug: "ethan-reed",
    name: "Ethan Reed",
    title: "Senior Data Engineer",
    bio: [
      "Ethan designs and maintains scalable data pipelines and analytics infrastructure.",
      "He has a Master's in Data Engineering from Columbia University and 10+ years in big data.",
      "Ethan has implemented real-time analytics for e-commerce and fintech platforms.",
      "He is passionate about open data, automation, and mentoring junior engineers.",
      "Ethan enjoys cycling, woodworking, and participating in hackathons."
    ],
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    expertise: ["Data Engineering", "Big Data", "ETL", "Analytics", "Automation", "Mentorship"],
    linkedin: "https://linkedin.com/in/ethanreed"
  },
  {
    id: 30,
    slug: "emma-ward",
    name: "Emma Ward",
    title: "Head of Customer Experience",
    bio: [
      "Emma leads the customer experience team, ensuring every client interaction is positive and impactful.",
      "She has a BA in Communications from Northwestern and 12 years in CX leadership roles.",
      "Emma has launched award-winning customer loyalty programs and digital support initiatives.",
      "She is a certified CX professional and advocates for customer-centric innovation.",
      "Emma loves traveling, gourmet cooking, and hosting community workshops."
    ],
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    expertise: ["Customer Experience", "CX Strategy", "Loyalty Programs", "Digital Support", "Innovation", "Workshops"],
    linkedin: "https://linkedin.com/in/emmaward"
  },
  {
    id: 31,
    slug: "jackson-bell",
    name: "Jackson Bell",
    title: "Principal Cloud Engineer",
    bio: [
      "Jackson architects and optimizes cloud infrastructure for high-availability and security.",
      "He holds multiple AWS and Azure certifications and has 15 years in cloud engineering.",
      "Jackson has led global cloud migration projects and disaster recovery planning.",
      "He is a regular contributor to open source cloud tools and speaks at DevOps conferences.",
      "Jackson enjoys drone photography, marathon running, and mentoring tech students."
    ],
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    expertise: ["Cloud Engineering", "AWS", "Azure", "Infrastructure", "Security", "Disaster Recovery"],
    linkedin: "https://linkedin.com/in/jacksonbell"
  },
  {
    id: 32,
    slug: "sophia-evans",
    name: "Sophia Evans",
    title: "Director of Corporate Communications",
    bio: [
      "Sophia manages all internal and external communications, public relations, and media outreach.",
      "She has an MA in Public Relations from NYU and 13 years of experience in tech communications.",
      "Sophia has led crisis communications and brand reputation campaigns for global tech firms.",
      "She is a published author on digital PR and a mentor for women in media.",
      "Sophia enjoys classical music, creative writing, and volunteering at local libraries."
    ],
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    expertise: ["Corporate Communications", "PR", "Media Relations", "Brand Reputation", "Crisis Management", "Mentorship"],
    linkedin: "https://linkedin.com/in/sophiaevans"
  },
  {
    id: 33,
    slug: "olivia-brooks",
    name: "Olivia Brooks",
    title: "Senior Data Engineer",
    bio: [
      "Olivia architects and optimizes large-scale data pipelines, ensuring data quality and reliability across the organization.",
      "She holds an MSc in Data Engineering from Columbia University and has 11 years of experience in the tech industry.",
      "Olivia has led data migration projects for Fortune 500 companies and is an expert in distributed systems and ETL processes.",
      "She is a certified Google Cloud Professional Data Engineer and regularly speaks at data engineering conferences.",
      "Olivia is passionate about mentoring women in STEM and volunteers as a coding instructor for high school students.",
      "In her free time, she enjoys hiking, baking artisan bread, and exploring new data visualization tools."
    ],
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    expertise: ["Data Engineering", "ETL", "Distributed Systems", "Cloud Data", "Mentorship", "Data Migration", "Python", "BigQuery"],
    linkedin: "https://linkedin.com/in/oliviabrooks"
  },
  {
    id: 34,
    slug: "jackson-reed",
    name: "Jackson Reed",
    title: "Principal Solutions Architect",
    bio: [
      "Jackson designs end-to-end technical solutions for enterprise clients, specializing in cloud transformation and system integration.",
      "He has a dual degree in Computer Science and Business from the University of Michigan.",
      "Jackson has 15+ years of experience in architecture roles at leading tech consultancies and has delivered projects across finance, healthcare, and retail.",
      "He is an AWS Certified Solutions Architect Professional and a TOGAF-certified enterprise architect.",
      "Jackson is known for his ability to translate complex requirements into scalable, maintainable systems.",
      "Outside work, he enjoys woodworking, marathon running, and mentoring junior architects."
    ],
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    expertise: ["Solutions Architecture", "Cloud Transformation", "System Integration", "AWS", "TOGAF", "Enterprise IT", "Mentorship", "Consulting"],
    linkedin: "https://linkedin.com/in/jacksonreed"
  },
  {
    id: 35,
    slug: "emma-hughes",
    name: "Emma Hughes",
    title: "Lead Frontend Engineer",
    bio: [
      "Emma leads the frontend engineering team, delivering high-performance, accessible, and visually stunning web applications.",
      "She holds a BSc in Computer Science from Georgia Tech and has 9 years of experience in frontend development.",
      "Emma is an expert in React, TypeScript, and modern CSS, and has contributed to several open-source UI libraries.",
      "She is passionate about web accessibility and regularly conducts internal workshops on inclusive design.",
      "Emma has received multiple company awards for innovation in UI/UX and is a frequent speaker at JavaScript conferences.",
      "In her spare time, she enjoys digital illustration, cycling, and volunteering at local animal shelters."
    ],
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    expertise: ["React", "TypeScript", "UI/UX", "Accessibility", "CSS", "Open Source", "Web Performance", "Workshops"],
    linkedin: "https://linkedin.com/in/emmahughes"
  },
  {
    id: 36,
    slug: "henry-campbell",
    name: "Henry Campbell",
    title: "Director of Customer Experience",
    bio: [
      "Henry oversees the customer experience strategy, ensuring every client interaction is positive and impactful.",
      "He has an MBA from Northwestern's Kellogg School of Management and 13 years of experience in customer success and operations.",
      "Henry has built and scaled customer support teams for SaaS companies, achieving industry-leading satisfaction scores.",
      "He is a certified Customer Experience Professional (CCXP) and a regular panelist at CX industry events.",
      "Henry is passionate about leveraging technology to personalize customer journeys and drive retention.",
      "He enjoys playing jazz piano, traveling with his family, and coaching youth soccer."
    ],
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    expertise: ["Customer Experience", "CX Strategy", "SaaS", "Support Operations", "Retention", "CCXP", "Team Building", "Personalization"],
    linkedin: "https://linkedin.com/in/henrycampbell"
  },
  {
    id: 37,
    slug: "sophia-turner",
    name: "Sophia Turner",
    title: "Head of People & Culture",
    bio: [
      "Sophia leads the People & Culture team, fostering an inclusive, high-performing workplace where everyone can thrive.",
      "She holds a Master's in Organizational Psychology from NYU and has 12 years of HR leadership experience.",
      "Sophia has implemented award-winning diversity and wellness programs at both startups and Fortune 500 companies.",
      "She is a SHRM-SCP certified professional and a frequent guest speaker on workplace culture and employee engagement.",
      "Sophia is dedicated to professional development and regularly mentors emerging HR leaders.",
      "In her free time, she enjoys yoga, creative writing, and organizing community volunteer events."
    ],
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    expertise: ["People & Culture", "HR Leadership", "Diversity & Inclusion", "Employee Engagement", "SHRM-SCP", "Wellness Programs", "Mentorship", "Organizational Psychology"],
    linkedin: "https://linkedin.com/in/sophiaturner"
  }
];

export function Team() {
  return (
    <>
      <Navbar />
      <section className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Animated/gradient background shapes for visual interest */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 rounded-full filter blur-3xl opacity-30 animate-pulse z-0" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-tr from-pink-200 via-blue-200 to-purple-200 dark:from-pink-900 dark:via-blue-950 dark:to-purple-950 rounded-full filter blur-2xl opacity-30 animate-pulse z-0" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-14 gap-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-center md:text-left text-primary drop-shadow-lg tracking-tight">Meet Our Team</h1>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/" className="px-5 py-2.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition font-semibold shadow">Home</Link>
              <Link to="/dashboard" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold shadow">Go to Dashboard</Link>
            </div>
          </div>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 text-center max-w-3xl mx-auto mb-12">Our diverse, award-winning team brings together expertise from across the tech industry. Get to know the people driving our innovation, culture, and client success.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-white/80 dark:bg-neutral-900/80 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center border border-neutral-200 dark:border-neutral-800 backdrop-blur-xl relative overflow-hidden">
                {/* Decorative floating badge */}
                <span className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-80 group-hover:scale-110 transition-transform">{member.title.split(' ')[0]}</span>
                <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mb-4 border-4 border-primary shadow-lg object-cover bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 group-hover:scale-105 transition-transform" />
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1 text-center group-hover:text-primary transition-colors">{member.name}</h2>
                <p className="text-primary font-medium mb-2 text-center">{member.title}</p>
                <p className="mb-3 text-center text-neutral-600 dark:text-neutral-300 text-sm line-clamp-2">{member.bio[0]}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {member.expertise.slice(0, 4).map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium shadow-sm border border-primary/10">{skill}</span>
                  ))}
                  {member.expertise.length > 4 && (
                    <span className="bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-300 px-2 py-1 rounded-full text-xs font-medium">+{member.expertise.length - 4}</span>
                  )}
                </div>
                <div className="flex gap-2 mt-2">
                  <Link to={`/team/${member.slug}`} className="text-sm font-semibold text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition">View Profile</Link>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-neutral-500 hover:text-blue-700 dark:hover:text-blue-400 transition" title="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Team member detail page
export function TeamMemberDetail({ slug }: { slug: string }) {
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return <div className="p-8">Team member not found.</div>;
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-blue-950 overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full filter blur-3xl opacity-30 animate-pulse z-0" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full filter blur-2xl opacity-30 animate-pulse z-0" />
      <div className="container mx-auto py-16 max-w-3xl z-10">
        <div className="relative flex flex-col items-center bg-white/90 dark:bg-neutral-900/90 rounded-3xl shadow-2xl p-10 border border-neutral-200 dark:border-neutral-800 backdrop-blur-xl">
          <button
            onClick={() => window.history.back()}
            className="absolute left-6 top-6 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition text-sm font-medium"
          >
            ← Back to Team
          </button>
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 rounded-full border-8 border-primary shadow-lg mb-4 object-cover bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900"
          />
          <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white mb-1 text-center drop-shadow">{member.name}</h1>
          <p className="text-xl text-primary font-semibold mb-4 text-center">{member.title}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {member.expertise.map((skill) => (
              <span key={skill} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-semibold shadow-sm border border-primary/20">{skill}</span>
            ))}
          </div>
          <div className="w-full max-w-2xl mb-8">
            {member.bio.map((line, idx) => (
              <p key={idx} className="mb-3 text-lg text-neutral-700 dark:text-neutral-200 text-center leading-relaxed">{line}</p>
            ))}
          </div>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-lg shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v10.5A2.25 2.25 0 009.75 19.5h4.5a2.25 2.25 0 002.25-2.25v-1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
            </svg>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export function TeamMemberDetailWrapper() {
  const { slug } = useParams();
  if (!slug) return <div className="p-8">Team member not found.</div>;
  return <TeamMemberDetail slug={slug} />;
}