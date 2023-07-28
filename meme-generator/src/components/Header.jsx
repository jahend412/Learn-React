import React from "react";
import HeaderImg from '/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img className="header--img" src={HeaderImg} />
            <h2 className="header--title">Meme-Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>
    )
}