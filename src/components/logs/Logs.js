import React, { useEffect } from 'react';
//Connects redux to the logs component
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
//Emmet for below - impt
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  //Gets Logs once
  //Once you add, edit, or delete a log the website gets the updated data by way of useEffect
  useEffect(() => {
    getLogs();
    //esling-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //state.log is the prop (it's a custom name but it has to equal that of the reducers/index.js prop)
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
