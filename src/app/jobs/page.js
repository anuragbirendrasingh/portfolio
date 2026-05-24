import Link from 'next/link';
import { jobsData } from '@/lib/data';

export const metadata = {
  title: "Latest Developer Jobs | Anurag Birendra Singh",
  description: "Browse the latest authenticated job postings for frontend, backend, and full-stack developers.",
  openGraph: {
    title: "Latest Developer Jobs",
    description: "Browse the latest authenticated job postings for frontend, backend, and full-stack developers.",
    url: "https://anuragbirendra.dev/jobs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Developer Jobs",
    description: "Browse the latest authenticated job postings for frontend, backend, and full-stack developers.",
  },
}

export default function JobsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Latest Openings</h1>
          <Link href="/#home" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
            &larr; Portfolio
          </Link>
        </div>
        <div className="grid gap-6">
          {jobsData.map(job => (
            <Link key={job.id} href={`/jobs/${job.slug}`} className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                      {job.company} &bull; <span className="text-gray-500 dark:text-gray-400">{job.location}</span>
                    </p>
                  </div>
                  <span className="inline-flex bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full self-start">
                    {job.type}
                  </span>
                </div>
                <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {job.description}
                </p>
                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  View full description 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
