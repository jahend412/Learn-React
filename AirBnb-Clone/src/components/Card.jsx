import React from 'react'
import Photo2 from '/img/Star1.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`/img/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src={Photo2} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}