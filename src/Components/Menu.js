import React from 'react'
import { NavLink } from 'react-router-dom'
import "./MenuStyle.css"
const Menu = () => {
    return (
        <div className="MenuStyle">
           <ul>
              <li><NavLink to="/" exact> Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
          </ul> 
        </div>
    )
}

export default Menu
