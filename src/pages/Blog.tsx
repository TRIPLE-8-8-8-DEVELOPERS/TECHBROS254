
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { ArrowRight, Search, Tag, Clock, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development in 2023",
    excerpt: "Discover the latest trends and technologies shaping the future of web development in 2023 and beyond.",
    category: "Web Development",
    date: "June 15, 2023",
    author: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?auto=format&w=800&q=80",
    tags: ["WebDev", "Trends", "Technology"]
  },
  {
    id: 2,
    title: "How AI is Transforming Mobile App Development",
    excerpt: "Artificial intelligence is revolutionizing how we build mobile applications. Learn about the impact and opportunities.",
    category: "Mobile Development",
    date: "May 28, 2023",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&w=800&q=80",
    tags: ["AI", "Mobile", "Innovation"]
  },
  {
    id: 3,
    title: "Ultimate Guide to Cloud Infrastructure Security",
    excerpt: "Essential security practices for building and maintaining secure cloud infrastructure in today's threat landscape.",
    category: "Cloud Security",
    date: "April 12, 2023",
    author: "Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=800&q=80",
    tags: ["Security", "Cloud", "Best Practices"]
  },
  {
    id: 4,
    title: "Building Scalable E-commerce Solutions",
    excerpt: "Learn the architecture and design patterns behind high-performing e-commerce platforms that can scale with your business.",
    category: "E-commerce",
    date: "March 5, 2023",
    author: "Emma Williams",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&w=800&q=80",
    tags: ["E-commerce", "Scalability", "Architecture"]
  },
  {
    id: 5,
    title: "The Rise of Low-Code Development Platforms",
    excerpt: "How low-code platforms are democratizing software development and enabling faster time-to-market.",
    category: "Development",
    date: "February 20, 2023",
    author: "David Kim",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&w=800&q=80",
    tags: ["Low-Code", "Productivity", "Business"]
  },
  {
    id: 6,
    title: "Implementing Serverless Architectures",
    excerpt: "A comprehensive guide to designing and deploying serverless applications for optimal performance and cost-efficiency.",
    category: "Cloud Computing",
    date: "January 8, 2023",
    author: "Lisa Thompson",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&w=800&q=80",
    tags: ["Serverless", "AWS", "Architecture"]
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Cloud Security", "E-commerce", "Development", "Cloud Computing"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-50 via-tech-100 to-tech-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-tech-800">Tech Insights & Updates</h1>
              <p className="text-lg text-gray-700 mb-10">
                The latest news, trends, and insights from the world of technology and innovation.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-tech-300 focus:border-transparent transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-tech-400 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-medium text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try changing your search criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-tech-400 text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-left">{post.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow text-left">{post.excerpt}</p>
                      <div className="mt-4 space-x-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center text-xs text-tech-600 bg-tech-50 px-2 py-1 rounded">
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={`/blog/${post.id}`} 
                        className="inline-flex items-center text-tech-500 hover:text-tech-700 font-medium text-sm mt-auto self-start"
                      >
                        Read More <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
            
            {/* Newsletter Section */}
            <div className="mt-20 bg-gradient-to-r from-tech-400 to-tech-500 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-left">Stay updated with our newsletter</h3>
                    <p className="text-white/90 mb-6 text-left">
                      Get the latest tech insights, tips, and industry news delivered directly to your inbox.
                    </p>
                  </div>
                  <div>
                    <form className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-white text-tech-500 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-white/80 text-sm mt-3">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
