import React from 'react'
import ProfilePic from '/img/profile-pic.png'

export default function Info() {
    return (
        <div className='main--info'>
            <img src={ProfilePic} alt="" />
            <h1>Josh Endemann</h1>
            <h3>Full-Stack Developer</h3>
            <a href='https://joshuaendemann-portfolio.netlify.app/'>My Portfolio</a>
        </div>
    )

}