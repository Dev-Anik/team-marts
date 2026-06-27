import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-sm-5 footer-left">
          <div className="custom-container-left">
            <Link to="/"><img src="/assets/images/team-marts-logo.png" alt="" className="footer-logo" /></Link>
            <div className="footer-address">
              <div className="address-item">
                <i className="fa-solid fa-location-dot footer-i"></i>
                <p className="footer-p">House-11, Road-06, Block-D, <br />Bamnertek, Turag, Dhaka</p>
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
        <div className="col-sm-7 footer-right">
          <div className="custom-container-right">
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li>
                  <NavLink to="/" className={({isActive})=>isActive?'footer-active':''}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({isActive})=>isActive?'footer-active':''}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/products" className={({isActive})=>isActive?'footer-active':''}>Products</NavLink>
                </li>
                <li>
                  <NavLink to="/services" className={({isActive})=>isActive?'footer-active':''}>Services</NavLink>
                </li>
                <li>
                  <NavLink to="/media" className={({isActive})=>isActive?'footer-active':''}>Media</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" className={({isActive})=>isActive?'footer-active':''}>Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us" className={({isActive})=>isActive?'footer-active':''}>Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <div className="ripple-wrapper prev-btn">
                <Link className="ripple" to=""><i className="fa-brands fa-facebook-f"></i></Link>
              </div>
              <div className="ripple-wrapper prev-btn">
                <Link className="ripple" to=""><i className="fa-brands fa-instagram"></i></Link>
              </div>
              <div className="ripple-wrapper prev-btn">
                <Link className="ripple" to=""><i className="fa-brands fa-linkedin-in"></i></Link>
              </div>
              <div className="ripple-wrapper prev-btn">
                <Link className="ripple" to=""><i className="fa-brands fa-x-twitter"></i></Link>
              </div>
            </div>
            <div className="copyright">
              <p className="copyright-text">©2024 Team Marts BD Ltd.</p>
              <Link href="" to="copyright-text">Design & Developed by Tariqul Islam</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer