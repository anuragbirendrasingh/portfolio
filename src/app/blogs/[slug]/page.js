import { blogsData } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SubscribeForm from '@/components/SubscribeForm';

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = blogsData.find((b) => b.slug === resolvedParams.slug);
  if (!blog) return { title: 'Not Found' };
  return {
    title: `${blog.title} | Developer Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://anuragbirendra.dev/blogs/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      images: [
        {
          url: `https://picsum.photos/seed/${blog.imageSeed}/1200/600`,
          width: 1200,
          height: 600,
          alt: blog.title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [`https://picsum.photos/seed/${blog.imageSeed}/1200/600`],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const blog = blogsData.find((b) => b.slug === resolvedParams.slug);
  
  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-950">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blogs" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all articles
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
            {blog.title}
          </h1>
          <div className="flex items-center text-gray-500 dark:text-gray-400 font-medium tracking-wide">
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            <span className="mx-3">&bull;</span>
            <span>5 min read</span>
          </div>
        </header>

        <div className="w-full h-64 md:h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src={`https://picsum.photos/seed/${blog.imageSeed}/1200/600`} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          className="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-300 leading-loose space-y-8 [&>h2]:text-3xl [&>h2]:font-extrabold [&>h2]:text-gray-900 [&>h2]:dark:text-white [&>h2]:mt-16 [&>h2]:mb-6 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-8 [&>ul>li]:mb-3 [&>ul>li]:pl-2"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {blogsData.filter(b => b.slug !== blog.slug).slice(0, 3).map(related => (
              <Link key={related.id} href={`/blogs/${related.slug}`} className="group block h-full">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  <div className="h-32 w-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/${related.imageSeed}/400/200`} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{related.title}</h4>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-auto">Read &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 pt-10">
           <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-8 md:p-12 text-center">
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enjoyed this article?</h3>
             <p className="text-gray-600 dark:text-gray-300 mb-2 max-w-lg mx-auto">
               Subscribe to get the latest insights on web development, Node.js, and React architecture straight to your inbox.
             </p>
             <SubscribeForm />
           </div>
        </div>
      </article>
    </div>
  );
}
