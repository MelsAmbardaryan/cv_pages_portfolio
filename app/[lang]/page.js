import Header from '@/components/Header'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Works from '@/components/Works'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SiteScripts from '@/components/SiteScripts'
import ScrollEffects from '@/components/ScrollEffects'
import CustomCursor from '@/components/CustomCursor'
import { getDictionary } from '@/lib/dictionaries'

export default async function Page() {
  const dict = await getDictionary()

  return (
    <>
      <a href="#main-content" className="skip-link">{dict.skipLink}</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Home />
        <Services />
        <Works />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <SiteScripts />
      <ScrollEffects />
      <CustomCursor />
    </>
  )
}
