import React from 'react';
//Creates a customizable time component
import Moment from 'react-moment';
import PropTypes from 'prop-types';

function LogItem({ log }) {
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
          <a href='' className='secondary-content'>
            <i className='material-icons grey-text'>delete</i>
          </a>
        </span>
      </div>
    </li>
  );
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
