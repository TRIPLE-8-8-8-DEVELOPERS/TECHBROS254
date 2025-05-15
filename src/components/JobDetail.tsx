
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { ArrowLeft, MapPin, Clock, DollarSign, Briefcase, Calendar, User, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  level: "Entry" | "Mid" | "Senior" | "Lead";
  salary: string;
  posted: string;
  slug: string;
  image?: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  applicationProcess?: string[];
}

// Import job data
import { jobPositions } from "../data/jobs";

const JobDetail = () => {
  const { jobSlug } = useParams<{ jobSlug: string }>();
  const job = jobPositions.find((job) => job.slug === jobSlug);

  const handleApply = () => {
    toast.success("Your application has been submitted successfully!", {
      description: "We'll review your application and get back to you soon.",
    });
  };

  if (!job) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
              <p className="text-gray-600 mb-8">
                The job position you're looking for doesn't exist or has been removed.
              </p>
              <Button asChild>
                <Link to="/careers">View All Positions</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section
          className="relative py-16 md:py-24 overflow-hidden"
          style={{
            backgroundImage:
              job.image
                ? `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${job.image}')`
                : "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tech-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <div className="container mx-auto px-4 relative z-10">
            <Link
              to="/careers"
              className="inline-flex items-center text-white hover:text-tech-300 transition-colors mb-4"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to All Positions
            </Link>

            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-tech-500/20 text-tech-200 font-medium text-sm backdrop-blur-sm">
                {job.department}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {job.title}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-3 text-tech-300" />
                  <div>
                    <p className="text-sm text-tech-200">Location</p>
                    <p className="font-medium">{job.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Briefcase size={20} className="mr-3 text-tech-300" />
                  <div>
                    <p className="text-sm text-tech-200">Employment Type</p>
                    <p className="font-medium">
                      {job.type} • {job.level} Level
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <DollarSign size={20} className="mr-3 text-tech-300" />
                  <div>
                    <p className="text-sm text-tech-200">Salary Range</p>
                    <p className="font-medium">{job.salary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main content */}
              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-none mb-12">
                  <h2>Job Description</h2>
                  <p>{job.description || "We are looking for a talented professional to join our team and help us deliver exceptional results for our clients."}</p>

                  <h3>Key Responsibilities</h3>
                  <ul>
                    {job.responsibilities ? (
                      job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <>
                        <li>Design, develop, and maintain high-quality solutions</li>
                        <li>Collaborate with cross-functional teams to define requirements</li>
                        <li>Implement best practices and standards</li>
                        <li>Stay up-to-date with emerging trends in your field</li>
                        <li>Troubleshoot and resolve issues in a timely manner</li>
                      </>
                    )}
                  </ul>

                  <h3>Requirements</h3>
                  <ul>
                    {job.requirements ? (
                      job.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <>
                        <li>{job.level === "Entry" ? "0-2" : job.level === "Mid" ? "3-5" : "5+"} years of experience in {job.department}</li>
                        <li>Strong problem-solving skills and attention to detail</li>
                        <li>Excellent communication and teamwork abilities</li>
                        <li>Bachelor's degree in a relevant field or equivalent experience</li>
                        <li>Demonstrated expertise with relevant technologies and tools</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/30 p-6 rounded-xl mb-12">
                  <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                  <ul className="space-y-3">
                    {job.benefits ? (
                      job.benefits.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-2 h-2 bg-tech-500 rounded-full"></div>
                          </div>
                          {item}
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-2 h-2 bg-tech-500 rounded-full"></div>
                          </div>
                          Competitive salary and performance bonuses
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-2 h-2 bg-tech-500 rounded-full"></div>
                          </div>
                          Comprehensive health, dental, and vision insurance
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-2 h-2 bg-tech-500 rounded-full"></div>
                          </div>
                          401(k) plan with employer match
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-2 h-2 bg-tech-500 rounded-full"></div>
                          </div>
                          Generous paid time off and flexible work arrangements
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-2 h-2 bg-tech-500 rounded-full"></div>
                          </div>
                          Professional development opportunities and education reimbursement
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Application Process</h2>
                  <div className="space-y-4">
                    {job.applicationProcess ? (
                      job.applicationProcess.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-4 text-tech-500 font-semibold">
                            {index + 1}
                          </div>
                          <div>{item}</div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-4 text-tech-500 font-semibold">
                            1
                          </div>
                          <div>Submit your application through our online form or email your resume to careers@techbros.com</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-4 text-tech-500 font-semibold">
                            2
                          </div>
                          <div>Initial screening call with our recruitment team</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-4 text-tech-500 font-semibold">
                            3
                          </div>
                          <div>Technical assessment or skills evaluation relevant to the role</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-4 text-tech-500 font-semibold">
                            4
                          </div>
                          <div>Interview with the hiring manager and team members</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-tech-100 dark:bg-tech-900/50 flex items-center justify-center mr-4 text-tech-500 font-semibold">
                            5
                          </div>
                          <div>Final decision and job offer</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-6">Apply for this Position</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-3 text-tech-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Posted</p>
                        <p className="font-medium">{job.posted}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <User size={18} className="mr-3 text-tech-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                        <p className="font-medium">
                          {job.level === "Entry" ? "0-2 years" : 
                           job.level === "Mid" ? "3-5 years" : 
                           job.level === "Senior" ? "5-8 years" : "8+ years"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Users size={18} className="mr-3 text-tech-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Team Size</p>
                        <p className="font-medium">
                          {job.department === "Engineering" ? "10-15 members" :
                           job.department === "Design" ? "5-8 members" : 
                           "3-6 members"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FileText size={18} className="mr-3 text-tech-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Applications</p>
                        <p className="font-medium">
                          {Math.floor(Math.random() * 50) + 10} so far
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" size="lg" onClick={handleApply}>
                    Apply Now
                  </Button>

                  <div className="mt-4 text-center text-sm text-gray-500">
                    or send your CV to{" "}
                    <a href="mailto:careers@techbros.com" className="text-tech-500 hover:underline">
                      careers@techbros.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar positions */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Similar Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobPositions
                .filter((p) => p.department === job.department && p.id !== job.id)
                .slice(0, 3)
                .map((position) => (
                  <Link
                    key={position.id}
                    to={`/careers/${position.slug}`}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-tech-100 dark:bg-tech-900/50 text-tech-600 dark:text-tech-400 text-xs font-medium rounded-full mb-2">
                        {position.department}
                      </span>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-tech-500 transition-colors">
                        {position.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <MapPin size={16} className="mr-2 text-gray-400 dark:text-gray-500" />
                          <span className="text-sm">{position.location}</span>
                        </div>

                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Briefcase size={16} className="mr-2 text-gray-400 dark:text-gray-500" />
                          <span className="text-sm">{position.type}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetail;
