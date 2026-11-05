'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Publications } from '@/components/Publications'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'
import { Achievements } from '@/components/Achievements'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Publications />
        <Projects />
        <Skills />
        <Timeline />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}