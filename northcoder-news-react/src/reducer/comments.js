import * as types from '../types';

export const initialState = {
    loading: false,
    comments: [],
    commentsError: null
  };

  export default (prevState = initialState, action) => {
    switch (action.type) {

    case types.ADD_COMMENTS_SUCCESS:
    return Object.assign({}, prevState, {
        loading: !prevState.loading,
        commentsError: null,
        comments: action.comments
    });

    case types.ADD_COMMENTS_FAILURE:
    return Object.assign({}, prevState, {
        loading: false,
        commentsError: action.commentsError,
        comments: []
    });

    case types.DELETE_COMMENTS_SUCCESS:
    return Object.assign({}, prevState, {
        loading: !prevState.loading,
        commentsError: null,
        comments: action.comments
    });

    case types.DELETE_COMMENTS_FAILURE:
    return Object.assign({}, prevState, {
        loading: false,
        commentsError: action.commentsError,
        comments: []
    });

    default:
    return prevState;
    
    }
}