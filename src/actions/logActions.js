import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';

//           Easily Seen Way
// export const getLogs = () => {
//   //Redux thunk (when installed) enables us to return a function that we can then dispatch
//   return async (dispatch) => {
//     setLoading();
//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

//Get logs from server

/*Redux thunk enables us to put in dispatch as a prop*/

export const getLogs = () => async dispatch => {
  try {
    //Sets loading to true
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Add new log
export const addLog = log => async dispatch => {
  try {
    //Sets loading to true
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      //what we're sending
      body: JSON.stringify(log),
      //Setting the type of content sent
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Delete log from server

export const deleteLog = id => async dispatch => {
  try {
    //Sets loading to true
    setLoading();

    await fetch(`/logs/${id}`, { method: 'DELETE' });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Update log from server

export const updateLog = log => async dispatch => {
  try {
    //Sets loading to true
    setLoading();

    //This updates it on the backend
    await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' },
    });

    //This does it on the frontend (well sets it up so as we can show it in our component)
    dispatch({
      type: UPDATE_LOG,
      payload: log,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set Current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clear current log

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
