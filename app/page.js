import Header from '@/components/Header'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Works from '@/components/Works'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SiteScripts from '@/components/SiteScripts'
import ScrollEffects from '@/components/ScrollEffects'
import CustomCursor from '@/components/CustomCursor'

export default function Page() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Home />
        <Services />
        <Works />
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
