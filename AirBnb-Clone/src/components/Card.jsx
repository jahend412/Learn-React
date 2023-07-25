import React from 'react'
import Photo1 from '/img/card-photo.png'
import Photo2 from '/img/Star1.png'

export default function Card() {
    return (
        <div className="card">
            <img
                className='card--image'
                src={Photo1}
                alt="" />
            <div className="card--stats">
                <img
                    className='card--star'
                    src={Photo2}
                />
                <span >5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span>  / person</p>
        </div>
    )
}