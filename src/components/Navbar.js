import React from 'react';
import { Link } from 'react-router-dom'

// Displayed Button component here
const Navbar = () => {
    return (
        <div className='wrapper'>
        <header>
            <div className="name-site">
                <h1><a href='/'><Link to="/">Nexter Live</Link></a></h1>
            </div>
            <nav>
                <ul className="menu">
                <li><a href='/'><Link to="/table">Групи</Link></a></li>                  
                    <li><a href='/'><Link to="/info">Факти</Link></a></li>
                    <li><a href="https://t.me/+jtNW6DyMMCs0N2Uy">Телеграм</a></li>
                </ul>
            </nav>
        </header>
        </div>
        )
};

export default Navbar;