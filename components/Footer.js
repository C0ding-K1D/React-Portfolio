import React from 'react';
import SecondaryLogo from '../assets/SecondaryLogo';
import SmallLogo from '../assets/SmallLogo';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={classes.container} >
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SKILLS</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul> 
            <SecondaryLogo />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat voluptate nobis non obcaecati, dolorum alias, deserunt voluptatem similique ad laborum nulla perferendis! Incidunt ipsum unde excepturi. Atque necessitatibus minus consequuntur.</p>
            </div>
        </footer>
    )
};

export default Footer;