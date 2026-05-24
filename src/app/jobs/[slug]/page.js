import { jobsData } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ApplyModal from '@/components/ApplyModal';

export function generateStaticParams() {
  return jobsData.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const job = jobsData.find((j) => j.slug === resolvedParams.slug);
  if (!job) return { title: 'Not Found' };
  return {
    title: `${job.title} | Jobs`,
    description: job.description,
    openGraph: {
      title: job.title,
      description: job.description,
      url: `https://anuragbirendra.dev/jobs/${job.slug}`,
      type: "article",
      publishedTime: job.date,
    },
    twitter: {
      card: "summary_large_image",
      title: job.title,
      description: job.description,
    },
  };
}

export default async function JobDetailPage({ params }) {
  const resolvedParams = await params;
  const job = jobsData.find((j) => j.slug === resolvedParams.slug);
  
  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-950">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/jobs" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mb-10 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all jobs
        </Link>
        <header className="mb-12 pb-8 border-b border-gray-100 dark:border-gray-800/60">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-lg">
            <span className="font-bold text-gray-800 dark:text-gray-200">{job.company}</span>
            <span className="text-gray-400">&bull;</span>
            <span className="text-gray-600 dark:text-gray-400">{job.location}</span>
            <span className="text-gray-400">&bull;</span>
            <span className="bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium">
              {job.type}
            </span>
          </div>
        </header>
        <div 
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:dark:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2"
          dangerouslySetInnerHTML={{ __html: job.content }}
        />
        
        <div className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-800/60">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Similar Openings</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {jobsData.filter(j => j.slug !== job.slug).slice(0, 3).map(related => (
              <Link key={related.id} href={`/jobs/${related.slug}`} className="block group h-full">
                <div className="bg-gray-50 dark:bg-gray-800/30 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors h-full flex flex-col">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">{related.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{related.company} &bull; {related.location}</p>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-auto">View Job &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-10 border-t border-gray-100 dark:border-gray-800/60 flex justify-center sm:justify-start">
           <ApplyModal jobTitle={job.title} />
        </div>
      </article>
    </div>
  );
}
