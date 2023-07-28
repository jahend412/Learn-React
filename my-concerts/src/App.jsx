import React from "react"
import NavBar from './components/NavBar'
import data from "/src/data"
import Card from '/src/components/Card'


export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })


  return (
    <div className="container">
      <NavBar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}
