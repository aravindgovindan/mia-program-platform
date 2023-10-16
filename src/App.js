// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import NewCoreStructure from './pages/NewCoreStructure';

function App() {

  const navItems = [
    { label: 'Foo', icon: 'F' },
    { label: 'Bar', icon: 'B' },
    { label: 'Baz', icon: 'Z' },
    { label: 'Qux', icon: 'Q' }
  ]

  return (
    <div className='app'>
      <NavBar navItems={navItems} />
      <div className='flex flex-column w-100'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewCoreStructure />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
