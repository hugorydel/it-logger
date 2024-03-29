import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
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
      payload: err.response.statusText,
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
      payload: err.response.statusText,
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
      payload: err.response.statusText,
    });
  }
};

//Update log on server

export const updateLog = log => async dispatch => {
  try {
    //Sets loading to true
    setLoading();

    //This updates it on the backend
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();

    //This does it on the frontend (well sets it up so as we can show it in our component)
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Search server's logs
export const searchLogs = text => async dispatch => {
  try {
    //Sets loading to true
    setLoading();

    //This return filtered logs object (they're not deleted just filtered)
    //THIS FILTER IS REALLY GOOD!!!
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
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
