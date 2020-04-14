import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    //Sets loading to true
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const addTech = tech => async dispatch => {
  try {
    //Sets loading to true
    setLoading();

    //Gets database to update
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(res);
    const data = await res.json();

    //Gets UI to update
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};
// Sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
