import React from 'react';
import "./About.css"
import kalendarImg from '../../assets/images/about/IMAGE1.png';
import kartaImg from '../../assets/images/about/IMAGE2.png';
import pelesos from '../../assets/images/about/IMAGE3.png';

function About() {
    return (
        <>
            <div className='about__title'>
                <h2>About Us</h2>
                <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
            </div>
            <div className='about__box'>
                <div className="about__box__card">
                    <div>
                        <img src={kalendarImg} alt="" />
                    </div>
                    <h3>1. Schedule online</h3>
                    <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                </div>
                <div className="about__box__card">
                    <div>
                        <img src={kartaImg} alt="" />
                    </div>
                    <h3>1. Schedule online</h3>
                    <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                </div>
                <div className="about__box__card">
                    <div>
                        <img src={pelesos} alt="" />
                    </div>
                    <h3>1. Schedule online</h3>
                    <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                </div>
            </div>
            <div className="about__btns">
                <button className='about__get__btn'>Get a free quote</button>
                <button className='about__exp__btn'>Explore services</button>
            </div>
        </>
    )
}

export default About