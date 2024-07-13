import React from 'react'
import { FaPiggyBank } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   
        <footer className="footer">
       
       <div className="footer-section">
       <div className="logo">
       <FaPiggyBank size={45} />
       <h2>iSave</h2>
     </div>
         <p>
         Develop a growth mindset and overcome obstacles to reach new heights. 
         By joining our platform, you'll become  part of a vibrant community that  fosters learning, contribution, and achievement. Embrace this journey and unlock your full potential!
         </p>
       </div>
       <div className="footer-section">
         <h4>Quick links</h4>
         <p>
           <a href="#blog">Blog</a>
         </p>
         <p>
          <Link to="/contact">Contact</Link>
         </p>
         <p>
           <a href="#faq">FAQ</a>
         </p>
       </div>
       <div className="footer-section">
         <h4>Pages</h4>
         <p>
           <Link to="register">Register</Link>
         </p>
         <p>
           <a href="#login">Log in</a>
         </p>
         <p>
         <a href="#about"> About us</a>
         </p>
         <p>
          <a href="#faq">FAQ</a>
         </p>
       </div>
     </footer>
   
  )
}

export default Footer