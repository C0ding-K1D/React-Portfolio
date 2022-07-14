import React from 'react';
import SecondaryLogo from '../assets/SecondaryLogo';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={classes["navigation"]}>
        <input className={classes["navigation-checkbox"]} type="checkbox" id="navi-toggle" />
        <label for="navi-toggle" className={classes["navigation-button"]}>
            <span className={classes["navigation-icon"]}>&nbsp;</span>
        </label>
        <div className={classes["navigation-background"]}>&nbsp;</div>

        <nav className={classes["navigation-nav"]}>
            <SecondaryLogo />
            <ul className={classes["nav-list"]}>
                <li>
                  <Link to='/' className={classes['nav-link']}>
                    HOME
                  </Link>  
                </li>
                <li>
                  <Link to='/about' className={classes['nav-link']}>
                    ABOUT
                  </Link>  
                </li>
                <li>
                  <Link to='/skills' className={classes['nav-link']}>
                    SKILLS
                  </Link>  
                </li>
                <li>
                  <Link to='/projects' className={classes['nav-link']}>
                    PROJECTS
                  </Link>  
                </li>
                <li>
                  <Link to='/contact' className={classes['nav-link']}>
                    CONTACT
                  </Link>  
                </li>
            </ul>
        </nav>
    </div>
    );
}

export default Header;