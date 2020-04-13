import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

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

// Sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
