import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOGS } from './types';

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

export const getLogs = () => async (dispatch) => {
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
export const addLog = (log) => async (dispatch) => {
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
      type: ADD_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};