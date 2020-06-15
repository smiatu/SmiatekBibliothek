import React from 'react';
import './App.css';

//TODO
//budowa modulow, css osobny dla kazdego wyswietlanego modulu,
//ponizej render warunkowy w zaleznosci od state (zalogowany, niezalogowany itp)
const App = props => {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Smiatek-Bibliothek
        </p>
      </header>
      <div className="App-body">
        <p>
          Biblioteka od znajomych, dla znajomych. Daj znać co możesz pożyczyć innym, odezwij się kiedy chcesz coś przeczytać.
        </p>
      </div>
    </div>
  )
}

export default App;
