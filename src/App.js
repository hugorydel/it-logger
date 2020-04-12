import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';

//This brings in the main css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    //Initializing Materialize JavaScript
    //Now we can use modals and all that
    M.AutoInit();
  }, []);
  return (
    <>
      <SearchBar />
    </>
  );
};

export default App;
