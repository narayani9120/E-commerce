import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <nav className="header">
            <img src="Logo_E.jpg" alt="Logo" class="logo" /> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Westernwear">Westernwear</Link></li>
                <li><Link to="/Indian">Indianwear</Link></li>
                <li><Link to="/Footwear">Footwear</Link></li>
                <li><Link to="/Watches">Watches</Link></li>
                <button type="submit"><li><Link href="/Register">Register</Link></li></button>
                <button type="submit"><li><Link to="/Login">Login</Link></li></button>
            </ul>
    </nav>
    </div>
  )
}

export default Header
