import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';

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
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <EditLogModal />
        <AddLogModal />
        <AddTechModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
