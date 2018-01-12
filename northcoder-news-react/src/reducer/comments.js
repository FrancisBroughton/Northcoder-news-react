import * as types from '../types';

export const initialState = {
    loading: false,
    commentsError: null,
    commentsPayload: [],

  };

  export default (prevState = initialState, action) => {
    switch (action.type) {

    case types.ADD_COMMENTS_SUCCESS:
    return Object.assign({}, prevState, {
        loading: !prevState.loading,
        commentsError: null,
        commentsPayload: action.comments
    });

    case types.ADD_COMMENTS_FAILURE:
    return Object.assign({}, prevState, {
        loading: false,
        commentsError: action.commentsError,
        commentsPayload: []
    });

    case types.DELETE_COMMENTS_SUCCESS:
    return Object.assign({}, prevState, {
        loading: !prevState.loading,
        commentsError: null,
        commentsPayload: action.comments
    });

    case types.DELETE_COMMENTS_FAILURE:
    return Object.assign({}, prevState, {
        loading: false,
        commentsError: action.commentsError,
        commentsPayload: []
    });

    default:
    return prevState;
    
    }
}