import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h4>Electric Games</h4>
      </div>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create-games">Create Game</Link>
        <Link to="/create-character">Create Character</Link>
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar