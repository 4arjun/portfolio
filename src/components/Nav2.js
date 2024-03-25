import React from 'react';
import './Nav2.css';
import { Link } from 'react-router-dom';

const Nav2 = () => {
    

    return (
        <div className='nav-container'>
            <div className='toggle-bar'>
                <p>button</p>
            </div>
            <div className='menu-list'>
                <Link to="/about" className='list-items2'>About</Link>
                <Link to="/resume" className='list-items2'>Resume</Link>
                <Link to="/project" className='list-items2'>Projects</Link>
                <a href="https://github.com/4arjun" className='list-items2'>Github</a>
            </div>
        </div>
    );
};

export default Nav2;
