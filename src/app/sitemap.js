import { jobsData, blogsData } from '@/lib/data';

// app/sitemap.js — tera sahi sitemap
export default function sitemap() {
    const baseUrl = 'https://anuragbirendra.dev';

    const jobsUrls = jobsData.map((job) => ({
        url: `${baseUrl}/jobs/${job.slug}`,
        lastModified: new Date(job.date),
    }));

    const blogsUrls = blogsData.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(blog.date),
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/jobs`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
        },
        ...jobsUrls,
        ...blogsUrls,
    ]
}