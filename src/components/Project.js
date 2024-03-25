// Project.js
import './Project.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/photo.jpg';

const Project = () => {
    return (
        <div className='projects-container'>
            <div className='projects-sub-container'>
                <div className='intro-text'>
                    <p>Projects</p>
                </div>
                <div className='project-details'>
                    <Link to="https://github.com/4arjun/AmpPay" className='project-list-item'>AmpPay</Link>
                    <p className='project-tech'>React, Django, MySql, Postman</p>
                    <ul className='project-features'>
                        <li>Featurfjhdvb hvfej hhvfhqevewr e 1</li>
                        <li>Featurerenjngeqner  ejewi rgrew 2</li>
                    </ul>
                    <div className='projects-gallery'>
                        <img src={img1} alt='Project 1'/>
                        <img src={img1} alt='Project 2'/>
                        <img src={img1} alt='Project 3'/>
                        <img src={img1} alt='Project 4'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
