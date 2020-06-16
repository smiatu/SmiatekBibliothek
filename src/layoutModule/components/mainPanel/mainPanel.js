import React from 'react';
import './styles/mainPanel.scss';


//TODO przeniesc teksty aplikacji do jsona, pobieranego pozniej ze store
//dodaj lewa kolumne, patrz https://www.bookdepository.com/
//dodaj index do importu modulow w App.js
//podziel main panel na osobny komponent headera i tresci
const MainPanel = props => {
    return (
        <div className='main-panel'>
                <header className="main-panel__header">
            <p>
                Smiatek-Bibliothek
            </p>
            </header>
            <div className="main-panel__body">
                <p>
                Biblioteka od znajomych, dla znajomych. Daj znać co możesz pożyczyć innym, odezwij się kiedy chcesz coś przeczytać.
                </p>
            </div>
        </div>
    )
}

export default MainPanel;