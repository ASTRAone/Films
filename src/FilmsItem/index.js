import React from 'react';
import './style.scss'
import '.media.scss';

import { arrImages } from '../utils/constants';
import imgDef from '../logo.svg';

const FilmsItem = (props) => {
    // Отображение случайных изображений
    const setRandomImages = () => {
        let img = arrImages[Math.floor(Math.random() * arrImages.length)];
        
        if (img) {
            return img;
        }
        return imgDef;
    };

    return (
        <div className="films-item">
            <div className="films-item__our">
                <figure 
                    className="films-item__content">
                    <img    
                        src={setRandomImages()}
                        className="films-item__img"
                        onClick={props.openCard}
                        alt="Кино" />

                        <figcaption className="films-item__figcap">
                            {props.title}
                        </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default FilmsItem;
