export default function Projects() {
  const projects = [
    {
      title: "ARGMinds - AI-Powered EdTech Platform",
      description: "A full-stack EdTech platform deployed on Vercel for college discovery, exam prep, and AI-driven career counseling. Features a multi-provider AI chatbot (Gemini + Claude) with context-aware sessions, 12+ student tools (JEE/NEET predictors, AI Career Finder), Firebase authentication, and a complete SEO pipeline.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "React", "Firebase", "Gemini API", "Claude API", "Tailwind CSS", "Vercel Analytics"],
      liveUrl: "https://argminds.vercel.app/",
      githubUrl: "https://github.com/anuragbirendrasingh/chatbot",
      featured: true
    },
    {
      title: "AI-Powered PDF Data Extraction Pipeline",
      description: "Developed an intelligent PDF data extraction system using Google Gemini API that significantly reduces manual data entry for non-technical staff at EduKyu. The pipeline processes PDF documents and extracts structured data automatically.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Google Gemini API", "PDF Parsing", "Node.js", "MongoDB"],
      liveUrl: "https://github.com/anuragbirendrasingh",
      githubUrl: "https://github.com/anuragbirendrasingh",
      featured: true
    },
    {
      title: "Dynamic Next.js Landing Pages",
      description: "Built and deployed multiple live Next.js landing pages with dynamic slug-based routing system. Implemented responsive design and optimized performance for production environment at EduKyu.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "React", "Tailwind CSS", "Dynamic Routing", "SSG/SSR"],
      liveUrl: "https://edukyu.com",
      githubUrl: "https://github.com/anuragbirendrasingh",
      featured: true
    },
    {
      title: "Frontend Intern Auth Dashboard",
      description: "A scalable full-stack web application featuring authentication, protected routes, and dashboard CRUD operations. Includes task CRUD, status filters, JWT authorization, and a responsive interface.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://frontend-intern-auth-dashboard.onrender.com/",
      githubUrl: "https://github.com/anuragbirendrasingh/frontend-intern-auth-dashboard",
      featured: true
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-800">
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center transform transition-transform duration-500 group-hover:scale-110">
            <svg className="w-16 h-16 mx-auto mb-2 animate-float" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <p className="text-sm font-medium">Project Preview</p>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium transform transition-all duration-300 hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my key projects including production work at EduKyu and training projects. 
            Each one represents unique challenges and learning experiences in full-stack development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/anuragbirendrasingh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
