import React from 'react';
import './Hero.css';
import phone from "../../assets/images/hero/phone.png";
import heroImg from '../../assets/images/hero/Group.png';

function Hero() {
    return (
        <div className='hero'>
            <div className="hero__left">
                <h1 className='hero__title'>Quality cleaning for your home</h1>
                <p className='hero__about'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                <div className='hero__box'>
                    <button className='hero__btn'>Get a free quote</button>
                    <div className="hero__contact__card">
                        <div className='hero__phone__img'>
                            <img src={phone} alt="" />
                        </div>
                        <div className='hero__contact'>
                            <label htmlFor="">Call us now</label>
                            <p>(414) 567 - 2109</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__reight">
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero