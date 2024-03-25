import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
    
    return (
        <div className='nav-container'>
            <div className='toggle-bar'>
                <p>button</p>
            </div>
            <div className='menu-list'>
                <Link to="/about" className='list-items'>About</Link>
                <Link to="/resume"className='list-items'>Resume</Link>
                <Link to="/project" className='list-items'>Projects</Link>
                <Link to="https://github.com/4arjun" className='list-items'>Github</Link>
            </div>
        </div>
    );
};

export default Nav;
