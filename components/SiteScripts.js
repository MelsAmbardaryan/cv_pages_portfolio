'use client'
import { useEffect } from 'react'

export default function SiteScripts() {
  useEffect(() => {
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

    return () => {
      menuIcon.onclick = null
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
