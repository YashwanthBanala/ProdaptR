import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Contactus from './components/Contactus';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ fontSize: '1.2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        html, body, #root {
          height: 100vh !important;
          margin: 0;
          padding: 0;
        }
        .App {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .app-content {
          flex: 1 0 auto;
          overflow-y: auto;
        }
      `}</style>
      <Router>
        <Header />
        <div className="app-content">
          <Home />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


