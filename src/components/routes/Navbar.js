import React from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css'; 
export default function Navbar() {
  return (
    <div className="navbar-container">
      
      
    <div className="nav-links"> 
    <Link to={'/tp1'}>CALCUL</Link>
    <Link to={'/tp2'}>SLIDER</Link>
    <Link to={'/tp3'}>TO DO LIST</Link>
    <Link to={'/tp4'}>API & PAGINATION</Link>
  </div>
      

    </div>
  )
}
