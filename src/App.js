import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Partners from './pages/Partners/Partners';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Career />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
