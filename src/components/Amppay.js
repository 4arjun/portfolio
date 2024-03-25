import React from 'react';
import './Amppay.css'
import amppay1 from '../assets/amppay1.png';
import amppay2 from '../assets/amppay2.png';
import amppay3 from '../assets/amppay3.png';
import amppay4 from '../assets/amppay4.png';
import amppay5 from '../assets/amppay5.png';
import amppay6 from '../assets/amppay6.png';
import amppay7 from '../assets/amppay7.png';
import amppay8 from '../assets/amppay8.png';

import Nav2 from './Nav2';

const Amppay = () => {

    return (
        <div>
            <div className='nac-col'>
            < Nav2 />
            </div>
        
        <div className='amppay-container'>
            <iframe
                title="Amppay"
                src={amppay1}
                className="amppay-pdf"
            ></iframe>
            <iframe
                title="Amppay"
                src={amppay2}
                className="amppay-pdf"
            ></iframe>
            <iframe
                title="Amppay"
                src={amppay3}
                className="amppay-pdf"
            ></iframe>
            <iframe
                title="Amppay"
                src={amppay4}
                className="amppay-pdf"
            ></iframe>
            <iframe
                title="Amppay"
                src={amppay5}
                className="amppay-pdf"
            ></iframe>
            <iframe
                title="Amppay"
                src={amppay6}
                className="amppay-pdf"
            ></iframe>
            <iframe
                title="Amppay"
                src={amppay7}
                className="amppay-pdf"
            ></iframe>
            <iframe
                title="Amppay"
                src={amppay8}
                className="amppay-pdf"
            ></iframe>
        </div>
        </div>
    );
}

export default Amppay;
