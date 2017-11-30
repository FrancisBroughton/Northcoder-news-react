import * as types from '../types'

export const initialState = {
  loading: false,
  error: null,
  payload: [],
  articlePayload: [],
  articleError: null,
  comments: [],
  commentsError: null
};

export default (prevState = initialState, action) => {
  switch (action.type) {

    case types.FETCH_ARTICLES_REQUEST:
      return Object.assign({}, prevState, {
        loading: !prevState.loading,
        error: null,
        payload: []
      });

    case types.FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, prevState, {
        loading: !prevState.loading,
        error: null,
        payload: action.payload
      });

    case types.FETCH_ARTICLES_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error,
        payload: []
      });

      case types.FETCH_ARTICLES_BY_ART_ID_SUCCESS:
      return Object.assign({}, prevState, {
        loading: !prevState.loading,
        articleError: null,
        articlePayload: action.articlePayload
      });

      case types.FETCH_ARTICLES_BY_ART_ID_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        articleError: action.articleError,
        articlePayload: []
      });

      case types.FETCH_COMMENTS_BY_ART_ID_SUCCESS:
      return Object.assign({}, prevState, {
        loading: !prevState.loading,
        commentsError: null,
        comments: action.comments
      });

    case types.FETCH_COMMENTS_BY_ART_ID_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        commentsError: action.commentsError,
        comments: []
      });

    default:
      return prevState;
  }
};     