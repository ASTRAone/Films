import React, { useState } from 'react';
import './style.scss';

const SearchPanel = (props) => {
    
    const [value, setValue] = useState('');

    // Отправить на поиск
    const setSend = () => {
        if (value.length !== 0 && props.setSearchFilms) {
            props.setSearchFilms(value);
            setValue('');
        } else {
            console.log('Ошибка отправки');
        }
    };

    return (
        <div className="search-panel">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text" 
                placeholder="Enter the title of the movie..."
                className="search-panel__input"
            />
            <button 
                onClick={setSend}
                disabled={value.length === 0 ? 'disabled' : ''}
                className="search-panel__btn">
                    search
            </button>
            
        </div>
    );
};

export default SearchPanel;