import React from 'react';
import './App.css';
import MainPanel from './layoutModule/components/mainPanel/mainPanel';

//TODO
//przeniesienie strony glownej do mainPanel, tam odniesienia
//do OSOBNO headera, osobno tresci, osobno paneli bocznych
const App = props => {
  
  return (
    <div className="App">
      <MainPanel />
      
    </div>
  )
}

export default App;
