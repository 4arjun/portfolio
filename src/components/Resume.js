import './resume.css';
import resume from '../assets/ML_CV1_ARJUN_AJITH.pdf'
const Resume = () => {
    return (
        <div className='resume-container'>
            <iframe
                title="Resume"
                src={resume}
                className="resume-pdf"
            ></iframe>
        </div>
    );
}

export default Resume;
