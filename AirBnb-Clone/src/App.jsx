import React, { useCallback } from 'react'
import NavBar from '/src/components/NavBar'
import Hero from '/src/components/Hero'
import Card from '/src/components/Card'
import data from '/src/data'



import './App.css'

export default function App(props) {
  // Hero
  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div>
      <NavBar />
      {cards}
    </div>
  )
}


