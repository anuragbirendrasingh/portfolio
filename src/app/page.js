import Hero from '@/components/Hero';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}
