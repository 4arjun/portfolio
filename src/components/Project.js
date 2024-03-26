import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
    return (
        <div className='projects-container'>
            <div className='projects-sub-container'>
                <div className='intro-text'>
                    <p>Projects</p>
                </div>
                <div className='project-details'>
                    <Link to="/amppay" className='project-list-item'>AmpPay</Link>
                    <p className='project-tech'>Technologies: React, Django, MySQL, Postman</p>
                    <div className='project-description'>
                        <ul>
                            <li>AmpPay is an all-in-one solution for energy management.</li>
                            <li>It provides real-time tracking, predictive billing, efficiency rankings, carbon footprint assessment, and a notification system.</li>
                            <li>The app seamlessly integrates microcontrollers for precise meter reading, enabling users to track energy consumption instantly.</li>
                            <li>It predicts future electricity bills based on historical usage patterns and compares users' efficiency rankings against neighboring households.</li>
                            <li>AmpPay empowers users to make informed decisions about their energy consumption and contributes to environmental sustainability by addressing carbon footprint concerns.</li>
                        </ul>
                        <h3>Achievements:</h3>
                        <ul>
                            <li>Finalist, IBeTo - Innovations for a Better Tomorrow: Secured a place in the finals of IBeTo, Excel 2023’s premier event, where innovative ideas were celebrated for their potential to create positive social change.</li>
                            <li>Finalist, MECLABS at Excel 2K23: Advanced to the final round of MECLABS, showcasing creativity and collaborative problem-solving skills in a dynamic and supportive environment.</li>
                        </ul>
                    </div>
                    <Link to="https://www.tedxmec.in/" className='project-list-item'>TEDxMEC</Link>
                    <p className='project-tech'>Technologies: HTML, CSS, JavaScript</p>
                    <div className='project-description'>
                        <ul>
                            <li>The TEDxMEC website is the digital platform for TEDx events hosted by Model Engineering College (MEC).</li>
                            <li>It serves as the hub for information about upcoming events, past talks, speakers, and ticketing details.</li>
                            <li>The website features a modern and intuitive design, providing visitors with easy navigation and access to relevant content.</li>
                        </ul>
                    </div>
                    <Link to="https://merchhub.excelmec.org" className='project-list-item'>MerchHub</Link>
                    <p className='project-tech'>Technologies: React, Node.js, MongoDB</p>
                    <div className='project-description'>
                        <ul>
                            <li>MerchHub is an online merchandise store developed for Excel MEC, offering a wide range of products including shirts, hoodies, bags, and other items branded with Excel MEC logos and designs.</li>
                            <li>The website provides users with a convenient platform to browse through the available merchandise, view product details, and make purchases securely.</li>
                            
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;
