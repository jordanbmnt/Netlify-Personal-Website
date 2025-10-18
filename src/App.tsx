import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { Settings } from './pages/settings';
import { NotFound } from './pages/not_found';

function App() {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
  });

  return (
    <BrowserRouter>
      <div className="App">
        <nav style={{ marginBottom: '20px' }}>
          <NavLink to="/" style={navLinkStyles}>Home</NavLink>
          <NavLink to="/settings" style={navLinkStyles}>Settings</NavLink>
          <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
