import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Partners from './pages/Partners/Partners';
import Contacts from './pages/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <section id="home">
            <Home />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="partners">
            <Partners />
          </section>
          <section id="contacts">
            <Contacts />
          </section>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
