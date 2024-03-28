import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Project from './components/Project';
import Amppay from './components/Amppay';
import About from './components/About';

function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume /> }/>
          <Route path='/project' element={<Project />} />
          <Route path='/amppay' element={<Amppay />} />
      </Routes>
    </Router>
  );
}
export default App;
