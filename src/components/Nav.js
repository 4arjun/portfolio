import './Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='toggle-bar'>
                <p>button</p>
            </div>
            <div className='menu-list'>
                <p className='list-item-1'>About</p>
                <p className='list-item-2'>Resume</p>
                <p className='list-item-3'>Projects</p>
                <p className='list-item-4'>Github</p>
            </div>
        </div>
    )
}
export default Nav