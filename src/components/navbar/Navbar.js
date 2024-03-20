import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/navbar/logo.png'
import hamburger from '../../assets/images/navbar/tuggle.svg';

function Navbar() {
    return (
        <nav>
            <div className='navigation__left'>
                <div className='navigation__logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='navigation__links'>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Article</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='navigation__reight'>
                <p className='cart__num'>Cart(0)</p>
                <button className='navigation__get__btn'>Get a free quote</button>
            </div>
            <div className='navbat__tuggle'>
                <img src={hamburger} alt="" />
            </div>
        </nav>
    )
}

export default Navbar