import React from 'react';
import './Covid.css'
import img from '../../assets/images/covid/Group.png'
import phone from "../../assets/images/hero/phone.png";

function Covid() {
    return (
        <div className='covid'>
            <div className="covid__left">
                <img src={img} alt="" />
            </div>
            <dir className="covid__reight">
                <label htmlFor="">Covid-19 sanitization</label>
                <h2>We follow guidelines to keep you safe from the COVID-19 virus</h2>
                <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
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
            </dir>

        </div>
    )
}

export default Covid