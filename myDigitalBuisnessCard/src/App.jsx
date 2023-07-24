import React from 'react'
import Info from '/src/components/Info'
import About from '/src/components/About'
import Skills from '/src/components/Skills'
import Footer from '/src/components/Footer'

import './App.css'

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Skills />
      <Footer />

    </div>
  )
}

