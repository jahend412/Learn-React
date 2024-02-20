import React from 'react';
import Logo from '../assets/react-logo.jpeg';

function Header() {
    return (
        <header>
            <img src={Logo} alt="React Logo" />
            <h1>React Essentials</h1>
            <p>Fundamental React concepts you will need for almost any app you will build!</p>
        </header>
    )
}

export default Header;