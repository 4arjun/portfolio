import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsVisible1(true);
        }, 700);

        return () => clearTimeout(timer1);
    }, []);

    useEffect(() => {
        const timer2 = setTimeout(() => {
            setIsVisible2(true);
        }, 800);

        return () => clearTimeout(timer2);
    }, []); 

    return (
        <div className={`main-container ${isVisible1 ? 'visible' : ''}`}>
            <p>
                <span className={`first-part ${isVisible1 ? 'visible' : ''}`}>hello</span><br />
                <span className={`second-part ${isVisible2 ? 'visible' : ''}`}>I'm Arjun</span>
            </p>
        </div>
    );
}

export default Main;
