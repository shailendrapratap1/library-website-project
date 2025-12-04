import React from 'react'


import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="navbar-container container">
           <input type="checkbox"/>
           <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
           <span class="line line3"></span>

           
           </div>
           <ul class="menu-items">
            <li><a href="#showcase">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#explore">Explore</a></li>
             <li><a href="#testimonial">Testimonial</a></li>
             <li><a href="#Contact">Contact</a></li>
         <li><a href="#Contact">sign up</a></li>
          </ul>
           <h1 class="logo">K.A.L</h1>
        </div>
  </nav>
  )
}

export default Navbar
