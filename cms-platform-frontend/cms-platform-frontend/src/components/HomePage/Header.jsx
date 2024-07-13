import React from 'react'
import { FaPiggyBank } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FaPiggyBank size={45} />
        <h2>iSave</h2>
      </div>
        <nav className="nav">
          <a href="#about">About Us</a>
          <a href="#blog">Blog</a>
          <a href="#faq">FAQ</a>
          <a href="#contact"><Link to="/contact">Contact Us</Link></a>
        </nav>
        <Link to="/login">

        <button className="login-btn">Log In</button>
        </Link>
      </header>
  )
}

export default Header