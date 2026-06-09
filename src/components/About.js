export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Full Stack Developer with hands-on production experience building real-world applications. 
              Currently working on-site at EduKyu, I've built and deployed live Next.js landing pages, 
              implemented dynamic slug-based routing, and developed an AI-powered PDF data extraction pipeline.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My AI-powered pipeline integrates Google Gemini API, significantly reducing manual data entry 
              for non-technical staff. I'm skilled in the MERN stack, Next.js, Tailwind CSS, and REST API development, 
              comfortable working in team environments and shipping features fast.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently upskilling through an intensive offline MERN bootcamp at AccioJob and DSA training at 
              Coding Blocks. I'm passionate about solving real business problems with code and contributing from day one.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Live</div>
              <div className="text-gray-600 dark:text-gray-400">Applications Deployed</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">MERN</div>
              <div className="text-gray-600 dark:text-gray-400">Stack Expert</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">AI</div>
              <div className="text-gray-600 dark:text-gray-400">Integration Skills</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7.67</div>
              <div className="text-gray-600 dark:text-gray-400">CGPA in B.Tech</div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education & Training
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                B.Tech - Computer Science & Engineering (Data Science)
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Haldia Institute of Technology, West Bengal • 2020 - 2024</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                CGPA: 7.67 | Specialized in Data Science with Computer Science Engineering
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                MERN Stack Developer Program (Offline Bootcamp)
              </h4>
              <p className="text-gray-600 dark:text-gray-400">AccioJob • Dec 2024 - Oct 2025</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Built production-grade full-stack applications using React, Node.js, Express.js, and MongoDB
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Data Structures & Algorithms with Java
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Coding Blocks • Mar 2025 - Oct 2025</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Mastered core DSA topics and actively solving problems on LeetCode
              </p>
              <a 
                href="https://drive.google.com/file/d/1cxFUm65pOQi8bDkOhsw-DSl6oi8OG3JO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                View Certificate
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
