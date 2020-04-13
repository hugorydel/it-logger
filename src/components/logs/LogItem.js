import React from 'react';
//Creates a customizable time component
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

function LogItem({ log, deleteLog }) {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted' });
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${log.attention ? 'red-text' : ''}`}>
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          {/*The below moment's format determines the exact order and placement of the times. Mind that if Moment component is left without log.date the current date will be the date given */}
          <Moment format='MMMM Do YYYY, hh:mm:ss a'>{log.date}</Moment>
          {/*When I put onDelete(), instead of passing a function, I was calling the handler function while creating the component, thus the function was immediately called for all of the objects (as all of them were initialized). */}
          <a href='#!' onClick={onDelete} className='secondary-content'>
            <i className='material-icons grey-text'>delete</i>
          </a>
        </span>
      </div>
    </li>
  );
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog })(LogItem);
