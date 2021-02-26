import React from 'react';
import './style.scss';

const Header = (props) => {
    return (
        <div className="header">
            <h1 
                className="header__text"
                onClick={() => location.reload()}>
                    hooked
            </h1>
        </div>
    );
};

export default Header;