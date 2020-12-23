import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cx from 'classnames';

const Header = () => {
  const [tabname, setTabName] = React.useState(window.location.pathname);
    return (
      <header className={cx("app-header", {
        "article-header": tabname === '/',
        "diet-plan-header": tabname === '/diet-plan',
        "exercise-header": tabname === '/exercise'
      })}>
        <nav className="app-header-menu">
          <span className="app-header-img"><img src={logo}/></span>
          <ul onClick={() => setTabName(window.location.pathname)}>
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