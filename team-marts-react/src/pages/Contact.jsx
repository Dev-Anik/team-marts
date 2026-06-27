import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    {/* <!-- Hero Starts --> */}
        <section className="hero" id="aboutus-hero">
            <div className="hero-wrapper container">
                <div className="row hero-content">
                    <div className="col">
                        <h6 className="hero-name">Contact Us</h6>
                        <h2 className="hlh-thin">ALL EARS</h2>
                        <h2 className="hlh">ALL YEAR TO HELP YOU</h2>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Hero Ends --> */}
        {/* <!-- Office Address Starts --> */}
        <section className="office-address black-bg">
            <div className="row">
                <div className="col-sm-5 footer-left">
                    <div className="custom-container-left">
                        <h2 className="green corporate-head">Corporate Office</h2>
                        <div className="footer-address">
                            <div className="address-item">
                                <i className="fa-solid fa-location-dot footer-i"></i>
                                <p className="footer-p">House-11, Road-06, Block-D, <br/>Bamnertek, Turag, Dhaka</p>
                            </div>
                            <div className="address-item">
                                <i className="fa-regular fa-envelope footer-i"></i>
                                <Link to="mailto:info@teammarts-bd.com" className="footer-p">info@teammarts-bd.com</Link>
                            </div>
                            <div className="address-item">
                                <i className="fa-solid fa-square-phone footer-i"></i>
                                <Link to="tel:017XXXXXXXX" className="footer-p">01911804904</Link>
                            </div>
                            <div className="address-item">
                                <i className="fa-solid fa-square-phone footer-i"></i>
                                <div>
                                    <Link to="tel:017XXXXXXXX" className="footer-p">01920816511</Link>
                                    <Link to="tel:017XXXXXXXX" className="footer-p">01680748094</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 h-600">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1084.5954389238077!2d90.38030826080985!3d23.885020287345498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c473c76676e9%3A0x68fd27d664e0676a!2sBamnartek%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1724046566316!5m2!1sen!2sbd"
                        width="100%" height="600" style={{border:0}} allowFullscreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
        {/* <!-- Office Address Ends --> */}
        {/* <!-- Get in Touch STarts --> */}
        <section className="getin-touch">
            <div className="container">
                <div className="row short-desc-wrapper">
                    <div className="col-xl-6 offset-md-6">
                        <h2 className="green corporate-head mb-0">Get In Touch</h2>
                        <p className="form-text">Fill up the form & submit, Our team member contact you asap.</p>
                        <form action="" method="">
                            <div className="input-grid">
                                <input type="text" name="" id="" placeholder="Name" required/>
                                <input type="number" name="" id="" placeholder="Phone Number" required/>
                            </div>
                            <div className="input-grid">
                                <input type="email" name="" id="" placeholder="name@example.com" required/>
                                <input type="number" name="" id="" placeholder="Subjecty" required/>
                            </div>
                            <div className="input-grid">
                                <textarea name="" id="" placeholder="Message" className="two-col"></textarea>
                            </div>
                            <div className="input-grid">
                                <input type="submit" className="two-col submit-btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </section>
        {/* <!-- Get in Touch Ends --> */}
    </>
  )
}

export default Contact