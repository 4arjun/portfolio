import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    

    return (
        <div className='nav-container'>
            <div className='toggle-bar'>
                <p>button</p>
            </div>
            <div className='menu-list'>
                <Link to="/about" className='list-items'>About</Link>
                <Link to="/resume" className='list-items'>Resume</Link>
                <Link to="/project" className='list-items'>Projects</Link>
                <a href="https://github.com/4arjun" className='list-items'>Github</a>
            </div>
        </div>
    );
};

export default Nav;
