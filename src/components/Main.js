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

    const handleHover = (event) => {
        event.target.classList.add('bounce');
        setTimeout(() => {
            event.target.classList.remove('bounce');
        }, 500);
    };

    return (
        <div className={`main-container ${isVisible1 ? 'visible' : ''}`}>
            <p>
                <span className={`first-part ${isVisible1 ? 'visible' : ''}`}>
                    <span className="letter" onMouseEnter={handleHover}>h</span>
                    <span className="letter" onMouseEnter={handleHover}>e</span>
                    <span className="letter" onMouseEnter={handleHover}>l</span>
                    <span className="letter" onMouseEnter={handleHover}>l</span>
                    <span className="letter" onMouseEnter={handleHover}>o</span>
                </span>
                <br />
                <span className={`second-part ${isVisible2 ? 'visible' : ''}`}>
                    <span className="letter" onMouseEnter={handleHover}>I</span>
                    <span className="letter" onMouseEnter={handleHover}>'</span>
                    <span className="letter" onMouseEnter={handleHover}>m</span>
                    <span className="letter" onMouseEnter={handleHover}>&nbsp;</span>
                    <span className="letter" onMouseEnter={handleHover}>A</span>
                    <span className="letter" onMouseEnter={handleHover}>r</span>
                    <span className="letter" onMouseEnter={handleHover}>j</span>
                    <span className="letter" onMouseEnter={handleHover}>u</span>
                    <span className="letter" onMouseEnter={handleHover}>n</span>
                </span>
            </p>
        </div>
    );
}

export default Main;
