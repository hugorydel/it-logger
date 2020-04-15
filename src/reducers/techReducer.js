import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null,
  specialNeed: null,
};
//state = initial state means that the state, as a default, is equal to the initialState. However, if the state is
export default (state = initialState, action) => {
  switch (action.type) {
    //Because GET_TECHS is called on app initialization the techs array is already there (i.e. all objects in the database are already in the state) and so when we do additional actions we are merely adding on or subtracting the techs from the techs array
    //console.log(state); - has a full techs array in there
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false,
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
