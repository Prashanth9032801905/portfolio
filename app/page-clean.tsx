import EnhancedHero from '@/components/EnhancedHero'
import FresherAbout from '@/components/FresherAbout'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section id="home">
        <EnhancedHero />
      </section>
      <FresherAbout />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
