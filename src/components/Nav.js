import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const handleClick = (e, link) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = link;
        }, 300);
    };

    return (
        <div className='nav-container'>
            <div className='toggle-bar'>
                <p>button</p>
            </div>
            <div className='menu-list'>
                <Link to="/about" className='list-items' onClick={(e) => handleClick(e, "/about")}>About</Link>
                <Link to="/resume" className='list-items' onClick={(e) => handleClick(e, "/resume")}>Resume</Link>
                <Link to="/project" className='list-items' onClick={(e) => handleClick(e, "/project")}>Projects</Link>
                <a href="https://github.com/4arjun" className='list-items' onClick={(e) => handleClick(e, "https://github.com/4arjun")}>Github</a>
            </div>
        </div>
    );
};

export default Nav;
