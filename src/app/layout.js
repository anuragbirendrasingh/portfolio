import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});



// app/layout.js ya pages/_app.js mein

export const metadata = {
  metadataBase: new URL('https://anuragbirendra.dev'),
  title: "Anurag Birendra Singh | Full Stack Developer",
  description: "Portfolio of Anurag Birendra Singh, Full Stack Developer from India. Expert in MERN stack, Next.js, and AI-powered solutions.",
  keywords: ["Anurag Birendra Singh", "Anurag Singh Developer", "anuragbirendra.dev", "Full Stack Developer", "Next.js", "React"],
  openGraph: {
    title: "Anurag Birendra Singh | Full Stack Developer",
    description: "Portfolio of Anurag Birendra Singh, Full Stack Developer from India.",
    url: "https://anuragbirendra.dev",
    siteName: "Anurag Birendra Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Birendra Singh | Full Stack Developer",
    description: "Portfolio of Anurag Birendra Singh, Full Stack Developer from India.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${displayFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
