import React from 'react'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Info from '../components/Info'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Thanks from '../components/Thanks'
import Social from '../components/social'
const Intro = () => {
  const scroll = () => {
    if (window.scrollY >= 300) {
      document.body.classList.add('scroll-effect')
    } else {
      document.body.classList.remove('scroll-effect')
    }
  }

  // scroll()
  window.addEventListener('scroll', scroll)
  return (
    <div>
      <Header />
      <Info />
      <Skills />
      <About />
      <Project />
      <Contact />
      <Thanks />
      <Social />
    </div>
  )
}

export default Intro
