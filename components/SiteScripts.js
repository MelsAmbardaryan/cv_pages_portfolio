'use client'
import { useEffect } from 'react'

export default function SiteScripts({ typedStrings }) {
  useEffect(() => {
    let cancelled = false
    let typedInstance
    let idleHandle

    const menuIcon = document.querySelector('#menu-icon')
    const navBar = document.querySelector('.navbar')
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('header nav a')
    const header = document.querySelector('header')

    const onMenuClick = () => {
      menuIcon.classList.toggle('x')
      const isOpen = navBar.classList.toggle('active')
      menuIcon.setAttribute('aria-expanded', String(isOpen))
    }
    menuIcon.onclick = onMenuClick

    const onScroll = () => {
      sections.forEach(section => {
        const top = window.scrollY
        const offset = section.offsetTop - 150
        const height = section.offsetHeight
        const id = section.getAttribute('id')

        if (id && top >= offset && top < offset + height) {
          const matchingLink = document.querySelector(`header nav a[href*=${id}]`)
          if (matchingLink) {
            navLinks.forEach(link => link.classList.remove('active'))
            matchingLink.classList.add('active')
          }
        }
      })

      header.classList.toggle('sticky', window.scrollY > 100)

      menuIcon.classList.remove('x')
      navBar.classList.remove('active')
      menuIcon.setAttribute('aria-expanded', 'false')
    }
    window.addEventListener('scroll', onScroll)

    const startTyped = async () => {
      if (!document.querySelector('.multiple-text')) return
      const { default: Typed } = await import('typed.js')
      if (cancelled) return

      typedInstance = new Typed('.multiple-text', {
        strings: typedStrings,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      })
    }

    // Defer to idle time so it doesn't compete with initial hydration/interactivity
    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(startTyped)
    } else {
      idleHandle = setTimeout(startTyped, 200)
    }

    return () => {
      cancelled = true
      menuIcon.onclick = null
      window.removeEventListener('scroll', onScroll)
      typedInstance?.destroy()
      if ('cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle)
      } else {
        clearTimeout(idleHandle)
      }
    }
  }, [])

  return null
}
