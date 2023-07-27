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
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
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
