import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
