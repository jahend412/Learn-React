import React, { useCallback } from 'react'
import NavBar from '/src/components/NavBar'
import Hero from '/src/components/Hero'
import Card from '/src/components/Card'
import data from '/src/data'


export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  // <Hero />
  return (
    <div>
      <NavBar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}
