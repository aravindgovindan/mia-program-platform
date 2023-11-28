// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
// import Header from './components/Header';
import NewCoreStructure from './pages/NewCoreStructure';
import PhonicsInterventionStructure from './pages/PhonicsInterventionStructure';
import UnderDevelopmentPage from './pages/UnderDevelopment';
import BaseStructure from './pages/BaseStructure';
import Attributes from './pages/Attributes';

function App() {

  const navItems = [
    { label: 'New Core', icon: 'advance', link: '/' },
    { label: 'Phonics Intervention', icon: 'speak', link: '/PhonicsIntervention' },
    { label: 'Base Structure', icon: 'base', link: '/BaseStructure' },
    { label: 'Attribute Table', icon: 'table', link: '/AttributeTable' },
  ]

  return (
    <div className='app'>
      <NavBar navItems={navItems} />
      <div className='w-100 pt4 pl4 flex flex-column h-100 overflow-y-auto'>
        <Routes>
          <Route path="/" element={<NewCoreStructure />} />
          <Route path="/PhonicsIntervention" element={<PhonicsInterventionStructure />} />
          <Route path="/BaseStructure" element={<BaseStructure />} />
          <Route path="/AttributeTable" element={<Attributes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
