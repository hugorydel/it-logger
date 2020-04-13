import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      //Unobtrusive error messages from materialize basically a popup that goes away itself
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      //Upload to database
      console.log(firstName, lastName);

      //Clear Fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div
      /*the id of our href should match the following modal's id*/ id='add-tech-modal'
      className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              //The value is the output you receive
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label
              //specifies which form element a label is bound to.
              //You should do this so as https://stackoverflow.com/questions/12894169/what-is-the-html-for-attribute-in-label
              htmlFor='firstName'
              className='active'>
              {' '}
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              //The value is the output you receive
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label
              //specifies which form element a label is bound to.
              //You should do this so as https://stackoverflow.com/questions/12894169/what-is-the-html-for-attribute-in-label
              htmlFor='lastName'
              className='active'>
              {' '}
              Last Name
            </label>
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

export default AddTechModal;
