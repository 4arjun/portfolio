import { useEffect, useState } from 'react'
import './Main_bottom.css'

const Main_bottom = () => {
    const[isVisible,setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 920);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`bottom-container ${isVisible ? 'visible' : ''}`}>
            <p>MEC'27</p>
    
        </div>
    )
}
export default Main_bottom