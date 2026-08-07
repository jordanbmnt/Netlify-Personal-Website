import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { NotFound } from './pages/not_found';
import { NavBar } from './universal_components/nav_bar';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <div className='routes-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
