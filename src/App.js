// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ClickThrough from './pages/ClickThrough';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='flex flex-column w-100'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClickThrough />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
