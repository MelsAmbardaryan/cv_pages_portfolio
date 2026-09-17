'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fineHover = window.matchMedia('(pointer: fine) and (hover: hover)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const evaluate = () => setEnabled(fineHover.matches && !reduceMotion.matches)
    evaluate()
    fineHover.addEventListener('change', evaluate)
    reduceMotion.addEventListener('change', evaluate)
    return () => {
      fineHover.removeEventListener('change', evaluate)
      reduceMotion.removeEventListener('change', evaluate)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    let cancelled = false
    let onMove, onOver, onOut

    document.body.classList.add('has-custom-cursor')

    ;(async () => {
      const { gsap } = await import('gsap')
      if (cancelled) return

      gsap.set([dotRef.current, ringRef.current], { xPercent: -50, yPercent: -50 })
      const moveX = gsap.quickTo(dotRef.current, 'x', { duration: 0.1, ease: 'power3' })
      const moveY = gsap.quickTo(dotRef.current, 'y', { duration: 0.1, ease: 'power3' })
      const ringX = gsap.quickTo(ringRef.current, 'x', { duration: 0.45, ease: 'power3' })
      const ringY = gsap.quickTo(ringRef.current, 'y', { duration: 0.45, ease: 'power3' })

      onMove = e => {
        moveX(e.clientX)
        moveY(e.clientY)
        ringX(e.clientX)
        ringY(e.clientY)
      }
      window.addEventListener('pointermove', onMove)

      const HOVER_SELECTOR = 'a, .btn, .services-box, .work-featured, .skills-card'
      onOver = e => { if (e.target.closest(HOVER_SELECTOR)) ringRef.current.classList.add('cursor-hover') }
      onOut = e => { if (e.target.closest(HOVER_SELECTOR)) ringRef.current.classList.remove('cursor-hover') }
      document.addEventListener('pointerover', onOver)
      document.addEventListener('pointerout', onOut)
    })()

    return () => {
      cancelled = true
      document.body.classList.remove('has-custom-cursor')
      if (onMove) window.removeEventListener('pointermove', onMove)
      if (onOver) document.removeEventListener('pointerover', onOver)
      if (onOut) document.removeEventListener('pointerout', onOut)
      import('gsap').then(({ gsap }) => gsap.killTweensOf([dotRef.current, ringRef.current]))
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
