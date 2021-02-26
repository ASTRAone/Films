import React from 'react';
import './style.scss';

const FailedLoading = (props) => {
    return (
        <div className="failed-loading">
            <h2 className="failed-loading__title">
                {props.title ? props.title : ''}
            </h2>
            <p className="failed-loading__text">
                {props.text ? props.text : ''}
            </p>
        </div>
    );
};

export default FailedLoading;
