import  "./Navbar.css";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import { useState } from "react";

export const  Navbar  = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to='/'><img src={logo} alt='logo' /></Link>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item" onClick={closeMenu}>
            <Link to='/' className="nav-link">Home</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to='/pricing' className="nav-link">Pricing</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to='/faq' className="nav-link">FAQ</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link to='/contact' className="nav-link">Contact</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{color: '#eeeeee'}} />) : (<FaBars size={30} style={{color: '#eeeeee'}} />)}
        </div>
      </nav>
    </header>
  )
};
