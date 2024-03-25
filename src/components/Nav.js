import './Nav.css';
import { Link } from 'react-router-dom';

const DelayedLink = ({ to, delay, children }) => {
    const handleClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = to;
        }, delay);
    };

    return <a href={to} onClick={handleClick}>{children}</a>;
};

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='toggle-bar'>
                <p>button</p>
            </div>
            <div className='menu-list'>
                <DelayedLink to="/about" delay={300}>About</DelayedLink>
                <DelayedLink to="/resume" delay={300}>Resume</DelayedLink>
                <DelayedLink to="/project" delay={300}>Projects</DelayedLink>
                <DelayedLink to="https://github.com/4arjun" delay={300}>Github</DelayedLink>
            </div>
        </div>
    );
};

export default Nav;
