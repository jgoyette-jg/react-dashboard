import React from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import DynamicProjects from './battle-grounds/DynamicProjects';
import { ProjectProvider } from './_services/ProjectContext';

function App() {
  return (
    <div className="App">
      <ProjectProvider username="Anthony">
        <Dashboard username="Anthony" />
      </ProjectProvider>
      
      <ProjectProvider username="Anthony">
        <DynamicProjects username="Blah blah blah" />
      </ProjectProvider>
    </div>
  );
}

export default App;
