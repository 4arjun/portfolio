import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/resume' element={<Resume />}/>
      </Routes>
    </Router>
  );
}
export default App;
