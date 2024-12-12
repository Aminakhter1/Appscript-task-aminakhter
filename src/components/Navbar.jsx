// Navbar.js
'use client';
import  { useState } from 'react';
import '../styles/navbar.css';
import Link from 'next/link';


const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__menu">
          <button className="menu__icon" onClick={toggleMenu}>☰</button>
        </div>
        <div className="navbar__logo">LOGO</div>
        <ul className={`navbar__links ${menuActive ? 'active' : ''}`}>
          <li><Link href ="/shop" >
          Shop</Link></li>
          <li><Link href ="/skills" >
          Skills</Link></li>
          <li><Link href ="/stories" >
          Stories</Link></li>
          <li><Link href ="/about" >
     About
</Link>  </li>
          <li><Link href ="/contactus" >
          Contact Us</Link></li>
        </ul>
        <div className="navbar__icons">
          <a href="#" className="icon">🔍</a>
          <a href="#" className="icon">♡</a>
          <a href="#" className="icon">🛒</a>
          <a href="#" className="icon">👤</a>
          <a href="#" className="dropdown"><select>
            <option>ENG</option>
            <option>HID</option>
            </select></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
