import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {
  let [mobNav, setMobNav]=useState(false);
  const openMobNav=()=>{
    setMobNav(!mobNav);
  }
  return (
    <header className="header">
      <nav className="header-container navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/"><img className="brand-logo" src="/assets/images/team-marts-logo.png" alt=""/></Link>
          <button className={mobNav?'navbar-toggler  toggler-active':'navbar-toggler'} type="button" onClick={openMobNav}>
            {
              mobNav?<i className="cross-icon fa-solid fa-xmark"></i>:<i className="menu-icon fa-solid fa-bars"></i>
            }
          </button>
          <div className="collapse navbar-collapse desk-only">
            <ul className="navbar-nav container">
              <li className="nav-item">
                <NavLink to="/" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/media" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Media</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact-us" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={mobNav?'mob-menu container mob-active':'mob-menu container'}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Home</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to="/about" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/media" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Media</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact-us" className={({isActive})=>isActive? 'nav-link active':'nav-link'}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header