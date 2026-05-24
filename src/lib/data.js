export const generateJobs = () => {
  const jobs = [];
  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Engineer", "React Developer", "Node.js Expert", "Next.js Architect"];
  const companies = ["TechFlow", "DevInnovate", "CloudScale", "WebWorks", "NextGen Systems", "CodeCraft", "StartupX"];
  const locations = ["Remote", "Bengaluru, India", "Pune, India", "Hyderabad, India", "London, UK"];
  const types = ["Full-time", "Contract", "Freelance"];

  for (let i = 1; i <= 50; i++) {
    const role = roles[i % roles.length];
    const company = companies[i % companies.length];
    const location = locations[i % locations.length];
    const type = types[i % types.length];
    
    jobs.push({
      id: `job-${i}`,
      slug: `${role.toLowerCase().replace(/ /g, "-").replace(/\./g, "")}-at-${company.toLowerCase().replace(/ /g, "-")}-${i}`,
      title: `${role} at ${company}`,
      company: company,
      location: location,
      type: type,
      description: `We are looking for an experienced ${role} to join our fast-growing team at ${company}. You will be responsible for building scalable web applications and collaborating with cross-functional teams.`,
      content: `
        <h2>About the Role</h2>
        <p>As a ${role} at ${company}, you will play a crucial role in our engineering team. We are looking for someone with a strong background in modern web technologies who can take ownership of complex features.</p>
        
        <h2>Requirements</h2>
        <ul>
          <li>Proven experience as a ${role}.</li>
          <li>Strong proficiency in JavaScript, TypeScript, and modern frameworks (React, Next.js, or Node.js).</li>
          <li>Experience with RESTful APIs and modern backend architectures.</li>
          <li>Familiarity with version control (Git) and CI/CD pipelines.</li>
          <li>Excellent problem-solving skills and attention to detail.</li>
        </ul>
        
        <h2>Benefits</h2>
        <ul>
          <li>Competitive salary and equity options.</li>
          <li>${location === "Remote" ? "100% Remote work flexibility." : "Hybrid work model with a great office environment."}</li>
          <li>Health, dental, and vision insurance.</li>
          <li>Annual learning and development budget.</li>
        </ul>
        
        <p><strong>Job Type:</strong> ${type}</p>
        <p><strong>Location:</strong> ${location}</p>
      `,
      date: new Date(Date.now() - i * 86400000).toISOString(),
    });
  }
  return jobs;
};

export const generateBlogs = () => {
  const blogs = [];
  const topics = [
    "Understanding Server Components in Next.js",
    "Mastering React Hooks in 2026",
    "Building Scalable APIs with Node.js and Express",
    "The Future of Frontend Development",
    "Tailwind CSS Advanced Patterns",
    "Authentication in Next.js 14",
    "Optimizing Core Web Vitals for React Apps",
    "GraphQL vs REST: A Developer's Perspective",
    "Deploying Node.js Apps to AWS",
    "State Management in React: Redux vs Context"
  ];

  for (let i = 1; i <= 50; i++) {
    const topic = topics[i % topics.length];
    
    blogs.push({
      id: `blog-${i}`,
      slug: `${topic.toLowerCase().replace(/ /g, "-").replace(/[:']/g, "")}-${i}`,
      title: topic,
      excerpt: `Dive deep into ${topic}. In this article, we explore best practices, advanced patterns, and real-world implementations that every full-stack developer should know.`,
      content: `
        <h2>Introduction</h2>
        <p>Welcome to our comprehensive guide on <strong>${topic}</strong>. As the web development landscape continues to evolve, staying updated with the latest paradigms is crucial for any full-stack developer.</p>
        
        <h2>Deep Dive</h2>
        <p>When working with modern web applications, performance and maintainability are key. By leveraging the right tools and architectures, developers can build robust systems that scale effectively.</p>
        <p>In this section, we discuss the underlying concepts. We'll look at code organization, state management, and how to optimize your build for production environments.</p>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Keep your code modular and reusable.</li>
          <li>Always write tests for critical business logic.</li>
          <li>Monitor performance metrics continuously.</li>
          <li>Stay engaged with the developer community for updates and security patches.</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Mastering <em>${topic}</em> takes time and practice, but the investment pays off by making your applications faster and your codebase easier to maintain. Happy coding!</p>
      `,
      imageSeed: i * 10,
      date: new Date(Date.now() - i * 186400000).toISOString(),
    });
  }
  return blogs;
};

export const jobsData = generateJobs();
export const blogsData = generateBlogs();
