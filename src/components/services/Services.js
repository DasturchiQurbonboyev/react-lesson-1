import React from 'react';
import './Services.css'
import houseImg from '../../assets/images/services/IMAGE1.png';
import officeImg from '../../assets/images/services/IMAGE2.png';
import industrial from '../../assets/images/services/IMAGE3.png';

function Services() {
    return (
        <>
            <div className="services__title">
                <h2>Our Services</h2>
                <button>Explore services</button>
            </div>
            <div className="services__box">
                <div className="services__card">
                    <div>
                        <img src={houseImg} alt="" />
                    </div>
                    <h4>House cleaning</h4>
                    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                </div>
                <div className="services__card">
                    <div>
                        <img src={officeImg} alt="" />
                    </div>
                    <h4>Office cleaning</h4>
                    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                </div>
                <div className="services__card">
                    <div>
                        <img src={industrial} alt="" />
                    </div>
                    <h4>Industrial cleaning</h4>
                    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                </div>
            </div>
        </>
    )
}

export default Services