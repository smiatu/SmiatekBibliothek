import React from 'react';
import './App.css';
import MainPanel from './layoutModule/components/mainPanel/mainPanel';
import LeftColumn from './layoutModule/components/leftColumn/leftColumn';

const App = props => {
  
  return (
    <div className="App">
      <LeftColumn />
      <MainPanel />
    </div>
  )
}

export default App;
