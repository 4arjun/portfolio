// Project.js
import './Project.css';
import { Link } from 'react-router-dom';



const Project = () => {
    return (
        <div className='projects-container'>
            <div className='projects-sub-container'>
                <div className='intro-text'>
                    <p>Projects</p>
                </div>
                <div className='project-details'>
                    <Link to="/amppay" className='project-list-item'>AmpPay</Link>
                    <p className='project-tech'>React, Django, MySql, Postman</p>
                    <ul className='project-features'>
                        <li>Featurfjhdvb hvfej hhvfhqevewr e 1</li>
                        <li>Featurerenjngeqner  ejewi rgrew 2</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Project;
