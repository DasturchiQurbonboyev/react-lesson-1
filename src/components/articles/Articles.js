import React from 'react';
import "./Articles.css";
import cleanerImg from '../../assets/images/article/cleaner.png';
import personImg from '../../assets/images/article/persn.png';

function Articles() {
    return (
        <>
            <div className="article__title">
                <h2>Articles & resources</h2>
                <div>
                    <button className='about__get__btn'>Get a free quote</button>
                    <button className='about__exp__btn'>Explore services</button>
                </div>
            </div>

            <div className="article__box">
                <div className="article__card">
                    <div className="article__card__img">
                        <img src={cleanerImg} alt="" />
                    </div>
                    <div className="article__card__child">
                        <h5>8 best vacuum cleaners to clean any mess for your home in 2022</h5>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                        <div className='card__child'>
                            <label htmlFor="">Jan 28, 2022</label>
                            <div className='kvartat'></div>
                        </div>
                    </div>
                </div>
                <div className="article__card">
                    <div className="article__card__img">
                        <img src={personImg} alt="" />
                    </div>
                    <div className="article__card__child">
                        <h5>8 best vacuum cleaners to clean any mess for your home in 2022</h5>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                        <div className='card__child'>
                            <label htmlFor="">Jan 28, 2022</label>
                            <div className='kvartat'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles