import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const handleClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 300);
    };

    return (
        <div className='nav-container'>
            <div className='toggle-bar'>
                <p>button</p>
            </div>
            <div className='menu-list'>
                <Link to="/about" className='list-items' onClick={handleClick}>About</Link>
                <Link to="/resume" className='list-items' onClick={handleClick}>Resume</Link>
                <Link to="/project" className='list-items' onClick={handleClick}>Projects</Link>
                <Link to="https://github.com/4arjun" className='list-items' onClick={handleClick}>Github</Link>
                
            </div>
        </div>
    );
};

export default Nav;
