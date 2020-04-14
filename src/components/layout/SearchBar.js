import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  //This way of doing it makes it so as we filter as we type (on any change this function is instantiated)
  const onChange = e => {
    //current refers to the element the ref is currently attached to
    searchLogs(text.current.value);
  };

  return (
    <div>
      <nav style={{ marginBottom: '30px' }} className='blue'>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input
                id='search'
                type='search'
                placeholder='Search Logs...'
                //The text takes the input of the component and chucks it into text.current.value
                ref={text}
                onChange={onChange}
              />
              <label className='label-icon' htmlFor='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};
export default connect(null, { searchLogs })(SearchBar);
