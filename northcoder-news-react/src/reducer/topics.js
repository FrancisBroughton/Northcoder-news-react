import * as types from '../types'

export const initialState = {
  loading: false,
  error: null,
  payload: []

};

export default (prevState = initialState, action) => {
  switch (action.type) {

    case types.FETCH_TOPICS_REQUEST:
      return Object.assign({}, prevState, {
        loading: !prevState.loading,
        error: null,
        payload: []
      });

    case types.FETCH_TOPICS_SUCCESS:
    return Object.assign({}, prevState, {
    loading: !prevState.loading,
    error: null,
    payload: action.payload
    });  

    case types.FETCH_TOPICS_FAILURE:
    return Object.assign({}, prevState, {
    loading: false,
    error: action.error,
    payload: []
    }); 

    default:
    return prevState;
    }
};     
  