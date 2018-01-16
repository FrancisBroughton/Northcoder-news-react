import * as types from '../types'

export const initialState = {
  loading: false,
  usersPayload: [],
  usersError: null,
  userPayload: [],
  userError: null
};

export default (prevState = initialState, action) => {
    switch (action.type) {

    case types.FETCH_USERS_SUCCESS:
    return Object.assign({}, prevState, {
        loading: !prevState.loading,
        usersError: null,
        usersPayload: action.usersPayload
    });

    case types.FETCH_USERS_FAILURE:
    return Object.assign({}, prevState, {
        loading: false,
        usersError: action.usersError,
        usersPayload: []
    });

    case types.FETCH_USER_DATA_SUCCESS:
    return Object.assign({}, prevState, {
        loading: !prevState.loading,
        userError: null,
        userPayload: action.userPayload
    });

    case types.FETCH_USER_DATA_FAILURE:
    return Object.assign({}, prevState, {
        loading: false,
        userError: action.userError,
        userPayload: []
    });
    
    default:
    return prevState;
    }
    
};    