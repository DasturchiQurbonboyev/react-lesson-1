import React from 'react';
import './Footer.css'
import freame from '../../assets/images/footer/Frame.png';
import logo from '../../assets/images/navbar/logo.png';

function Footer() {
    return (
        <div className='container footer'>
            <div className="footer__top">
                <div className="footer__clearing">
                    <h3>Quality cleaning for your home</h3>
                    <p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                    <div>
                        <img src={freame} alt="" />
                    </div>
                </div>
                <div className="footer__contact">
                    <h5>Contact us</h5>
                    <div className='footer__contact__card'>
                        <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                        <p>(414) 567 - 2109</p>
                        <p>contact@cleaning.com</p>
                    </div>
                </div>
                <div className="footer__hours">
                    <h5>Hours</h5>
                    <div>
                        <h5>Monday to Friday</h5>
                        <p>6:00 AM - 9:00 PM</p>
                    </div>
                    <div>
                        <h5>Saturday & Sunday</h5>
                        <p>8:00 AM - 8:00 PM</p>
                    </div>
                </div>
                <div className="footer__estimate">
                    <h5>Get a free estimate</h5>
                    <div>
                        <label htmlFor="">(414) 567 - 2109</label>
                        <p>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
                        <button className='about__get__btn'>Browse our packages</button>
                    </div>

                </div>
            </div>

            <div className="footer__bottom">
                <img src={logo} alt="" />
                <div>
                    <p>Copyright © Cleaning X | Designed by</p>
                    <a style={{ textDecoration: "underline" }} href="#">BRIX Templates</a>
                    <p>- Powered by</p>
                    <a href="#">Webflow</a>
                    <a href="#">Licenses</a>
                </div>
            </div>

        </div>

    )
}

export default Footer