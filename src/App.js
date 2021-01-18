import React from 'react';
import './App.css';

import Title from './Components/Title/'
import Dashboard from './Components/Dashboard/'

function App() {
  return (
    <div className="app">
      <Title 
        titleText="The Shoppies"
        subtitleText="Movie awards for entrepreneurs"
        explaination="We need your help to chose the best films! Search for and nominate your 5 favourite movies below."
      />
      <Dashboard />
    </div>
  );
}

export default App;
