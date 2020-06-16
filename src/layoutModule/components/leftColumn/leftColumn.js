import React from 'react';
import './styles/leftColumn.scss';

const LeftColumn = props => {
    return (
        <div className='left-column'>
            <div className="left-column__top-panel">
                <p>
                Miejsce na tekst górnej części lewej kolumny, ponizej powinna być np. wyszukiwarka
                </p>
            </div>
            <div className='left-column__bottom-panel'>
                <p>
                    Miejsce na wyniki wyszukiwania, obrazki itp.
                </p>
            </div>
        </div>
    )
}

export default LeftColumn;