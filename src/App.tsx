import React from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import DynamicProjects from './battle-grounds/DynamicProjects';

function App() {
  return (
    <div className="App">
      <Dashboard username="Anthony" />
      <DynamicProjects username="Blah blah blah" />
    </div>
  );
}

export default App;
