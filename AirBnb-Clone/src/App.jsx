import React, { useCallback } from 'react'
import NavBar from '/src/components/NavBar'
import Hero from '/src/components/Hero'
import Card from '/src/components/Card'



import './App.css'

export default function App() {
  return (

    <div>
      <NavBar />
      <Hero />
      <Card
        img='card-photo.png'
        rating='5.0'
        reviewCount={6}
        country='USA'
        title='Life Lessons with Katie Zaferes'
        price={136}
      />

    </div>
  )
}


