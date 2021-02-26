import React, { useState, useEffect } from 'react'
import './App.scss';

import Header from "./Header/index";
import SearchPanel from "./SearchPanel/index";
import Films from './Films/index';

import { connect } from 'react-redux';
import { getDataList } from './stor/defaultData/action';
import { postDataList } from './stor/searchData/action';

function App(props) {

  const [dataFilms, setDataFilms] = useState('');

  useEffect(() => {
    props.getDataList();
  }, []);

  // Подгрузка дефолтных данных
  useEffect(() => {
      props.defaultListData ? setDataFilms(props.defaultListData) : setDataFilms([]);
  }, [props.defaultListData]);

  // Подгрузка данных поиска
  useEffect(() => {
    props.searchListData ? setDataFilms([props.searchListData]) : setDataFilms([]);
}, [props.searchListData]);

  // Поиск фильмов
  const setSearchFilms = (value) => {
    props.postDataList(value);
    setDataFilms([props.searchListData]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-search">
        <SearchPanel 
          setSearchFilms={setSearchFilms}
        />
      </div>
      <div className="App-content">
        <Films 
          dataFilms={dataFilms}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    defaultListData: state.defDataList.defData,
    searchListData: state.searchDataList.searchData
  }
};

const mapDispatchToProps = (dispatch => {
  return {
    getDataList,
    postDataList
  }
});

export default connect(mapStateToProps, mapDispatchToProps())(App);
