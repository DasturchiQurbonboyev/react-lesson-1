import React from 'react';
import "./Contact.css"
import phone from "../../assets/images/hero/phone.png";


function Contact() {
    return (
        <div className='contact container '>
            <div className="contact__left">
                <div className="contact__left__top">
                    <h2>Contact Us</h2>
                    <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
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
                <div className="contact__left__bottom">
                    <h4>Not convinced yet?</h4>
                    <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                    <button className='about__exp__btn'>Browse our packages</button>
                </div>
            </div>


            <div className="contact__reight">
                <div>
                    <label htmlFor="">Full name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Phone number</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Requested service</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Day of service</label>
                    <input type="text" />
                </div>
                <div className='contact__textarea'>
                    <label htmlFor="">Add a note</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='contact__reight__btn'>
                    <button className='about__get__btn'>Browse our packages</button>
                </div>
            </div>
        </div>
    )
}

export default Contact