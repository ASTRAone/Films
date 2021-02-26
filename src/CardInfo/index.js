import React, { useState, useEffect } from 'react';
import './style.scss';

import imgDef from '../logo.svg';
import { arrImages } from '../utils/constants';

const CardInfo = (props) => {
    // Получение рандомного изображения 
    const setRandomImages = () => {
        let img = arrImages[Math.floor(Math.random() * arrImages.length)];
        
        if (img) {
            return img;
        }

        return imgDef;
    };

    return (
        <div className="card-info">
            <div className="card-info__closed">
                <i 
                    className="fas fa-times"
                    onClick={props.onClose ? props.onClose : null} >
                </i>
            </div>
            <div className="card-info-content">
                <img src={setRandomImages()} className="card-info-content__img" alt="Кино"/>
                <div className="card-info-content__our">
                    <div className="card-info-content__hint">
                        <p className="card-info-content__title">Номер:</p>
                        <p className="card-info-content__text">{props.data.id ? props.data.id : ''}</p>
                    </div>
                    <div className="card-info-content__hint">
                        <p className="card-info-content__title">Заголовок</p>
                        <p className="card-info-content__text card-info-content__text_title">{props.data.title ? props.data.title : ''}</p>
                    </div>
                    <div className="card-info-content__hint">
                        <p className="card-info-content__title">Описание</p>
                        <p className="card-info-content__text">{props.data.body ? props.data.body : ''}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
