import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Header = () => {
    return (
      <header className="app-header">
        <nav className="app-header-menu">
          <span className="app-header-img"><img src={logo}/></span>
          <ul>
              <li><NavLink className="link" exact to="/" replace>Articles</NavLink></li>
              <li><NavLink className="link" to="/diet-plan" replace>Diet Plan</NavLink></li>
              <li><NavLink className="link" to="/exercise" replace>Exercise</NavLink></li>
              <li><NavLink className="link" to="/" replace>Profile</NavLink></li>
          </ul>   
        </nav>
      </header>
    )
}

export default Header;