import React, { useState } from 'react';
import { connect } from 'react-redux';
//Because redux actions are prop types it is common to include the prop types module too
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      //Unobtrusive error messages from materialize basically a popup that goes away itself
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const newLog = {
        message,
        tech,
        attention,
        date: new Date(),
      };
      addLog(newLog);

      M.toast({ html: `Log added by ${tech}` });
      //Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div
      /*the id of our href should match the following modal's id*/ id='add-log-modal'
      className='modal'
      style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              {' '}
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}>
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='waves-effect waves-light blue btn'>
          Enter
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

//Here we don't have to map out the state (its null) because, unlike the Logs.js code which GETs the state (has to interact with it in some way), AddLogModal.js pushes logs (POSTs) to the state so we don't care about the state's contents at all.
export default connect(null, { addLog })(AddLogModal);
