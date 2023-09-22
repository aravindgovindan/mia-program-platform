// App.js
import React from 'react';
import Tree from './components/Tree';
import './App.css';

function App() {
  return (
    <div className="app flex flex-column">
      <div className='flex flex-column ba b--blue ph3 flex-grow-1'>
        <div className='pv3 f6'>
          Add required label and description for each level
        </div>
        <Tree />
      </div>
    </div>
  );
}

export default App;
