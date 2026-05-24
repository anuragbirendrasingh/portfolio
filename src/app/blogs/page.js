import Link from 'next/link';
import { blogsData } from '@/lib/data';

export const metadata = {
  title: "Developer Blog | Tech Articles by Anurag",
  description: "Read the latest articles on Full Stack Development, Next.js, React, Node.js, and modern web architectures.",
  openGraph: {
    title: "Developer Blog | Tech Articles by Anurag",
    description: "Read the latest articles on Full Stack Development, Next.js, React, Node.js, and modern web architectures.",
    url: "https://anuragbirendra.dev/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Blog | Tech Articles by Anurag",
    description: "Read the latest articles on Full Stack Development, Next.js, React, Node.js, and modern web architectures.",
  },
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Tech Journal</h1>
          <Link href="/#home" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors">
            &larr; Portfolio
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map(blog => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`} className="block group h-full">
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100 dark:border-gray-700/50 group-hover:-translate-y-2">
                <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  {/* Using a reliable placeholder service with random seeds for uniqueness */}
                  <img 
                    src={`https://picsum.photos/seed/${blog.imageSeed}/800/400`} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-wider">
                    {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-indigo-600 dark:text-indigo-400 font-bold group-hover:gap-2 transition-all">
                    Read Article 
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
