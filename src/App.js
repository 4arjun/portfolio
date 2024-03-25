import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Project from './components/Project';

function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/resume' element={<Resume />}/>
          <Route path='/project' element={<Project />}/>
      </Routes>
    </Router>
  );
}
export default App;
