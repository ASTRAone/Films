import React, { useState } from 'react';
import './style.scss';
import './media.scss';

import FilmsItem from '../FilmsItem/index';
import FailedLoading from '../FailedLoading/index';
import ModalShell from '../ModalShell/index';
import CardInfo from '../CardInfo/index';

const Films = (props) => {      
    // Видимость карточки 
    const [visibleCard, setVisibleCard] = useState(false);
    // Данные с маленькой карточки
    const [data, setData] = useState('');

    // Открыть карточку
    const setOpenCardInfo = (data) => {
        setVisibleCard(true)
        setData(data);
    };

    const filmsList = 
        props.dataFilms ?
            props.dataFilms.map((item, index) => {
                return (
                    <div key={index}>
                        <FilmsItem 
                            {...item}
                            openCard={() => setOpenCardInfo(item)} />
                    </div>
                )
            }) : <FailedLoading 
                title="Ошибка загрузки фильмов"
                text="Приносим свои извинения, в скором времени все вновь заработает"
        />

    console.log(props.dataFilms)
    return (
        <React.Fragment>
            <div className="films-container">
                {filmsList}
            </div>
            <ModalShell
                open={visibleCard}>
                    <CardInfo 
                        data={data}
                        onClose={() => setVisibleCard(false)}
                    />
            </ModalShell>
        </React.Fragment>
    );
};

export default Films;