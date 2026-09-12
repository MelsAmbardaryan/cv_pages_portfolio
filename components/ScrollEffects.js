'use client'
import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    let cancelled = false
    let triggers = []
    let idleHandle

    const setup = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const reveal = (targets, vars, trigger) => {
        const tween = gsap.from(targets, {
          ...vars,
          scrollTrigger: { trigger, start: 'top 85%', toggleActions: 'play none none none' },
        })
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      }

      gsap.utils.toArray('.heading').forEach(el =>
        reveal(el, { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' }, el))

      reveal('.services-box', { opacity: 0, y: 60, duration: 0.7, ease: 'power3.out', stagger: 0.15 }, '.services-contener')
      reveal('.work-featured', { opacity: 0, y: 50, duration: 0.8, ease: 'power3.out' }, '.work-featured')
      reveal('.works-box', { opacity: 0, y: 60, duration: 0.7, ease: 'power3.out', stagger: 0.15 }, '.works-more-grid')
      reveal('.about-img-frame', { opacity: 0, x: -60, duration: 0.8, ease: 'power3.out' }, '.about')
      reveal('.about-content > *', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out', stagger: 0.12 }, '.about-content')
      reveal('.contact', { opacity: 0, y: 50, duration: 0.8, ease: 'power3.out' }, '.contact')

      const parallax = (target, trigger, yPercent) => {
        const tw = gsap.to(target, {
          yPercent,
          ease: 'none',
          scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: true },
        })
        if (tw.scrollTrigger) triggers.push(tw.scrollTrigger)
      }
      parallax('.home-img', '.home', 15)
      parallax('.about-img-frame', '.about', 10)
    }

    // Defer to idle time so ScrollTrigger's layout measurements don't compete
    // with initial hydration/interactivity (a timeout caps the wait so the
    // hero parallax still sets up promptly even under heavy main-thread load).
    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(setup, { timeout: 500 })
    } else {
      idleHandle = setTimeout(setup, 200)
    }

    return () => {
      cancelled = true
      if ('cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle)
      } else {
        clearTimeout(idleHandle)
      }
      triggers.forEach(st => st.kill())
      import('gsap').then(({ gsap }) =>
        gsap.killTweensOf(['.home-img', '.about-img-frame', '.heading', '.services-box', '.work-featured', '.works-box', '.about-content > *', '.contact'])
      )
    }
  }, [])

  return null
}
