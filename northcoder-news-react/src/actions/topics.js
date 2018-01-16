import axios from 'axios';
import * as types from '../types';

export function fetchTopicsRequest() {
    return {
        type: types.FETCH_TOPICS_REQUEST
    };
}

export function fetchTopicsSuccess(data) {
    return {
        type: types.FETCH_TOPICS_SUCCESS,
        payload: data
    };
}

export function fetchTopicsFailure(error) {
    return {
        type: types.FETCH_TOPICS_FAILURE,
        error: error
    };
}

export function fetchArticlesByIdSuccess(data){
    return {
        type : types.FETCH_ARTICLES_BY_ID_SUCCESS,
        topicPayload: data 
    }
}

export function fetchArticlesByIdFailure(error) {
    return {
        type: types.FETCH_ARTICLES_BY_ID_FAILURE,
        topicError: error
    };
}

export function fetchAllTopics (data) {
    return function(dispatch){
        axios.get('https://jredfern-northcoders-news-api.herokuapp.com/api/topics')
        .then (res => {
            dispatch(fetchTopicsSuccess(res.data.topics))
        })
        .catch (err => {
            dispatch(fetchTopicsFailure(err))
        })
    }
}

export function fetchArticlesById (id) {
    return function(dispatch){
        axios.get(`https://jredfern-northcoders-news-api.herokuapp.com/api/topics/${id}/articles`)
        .then(res => {
            dispatch(fetchArticlesByIdSuccess(res.data))
        })
        .catch(err=> {
            dispatch(fetchArticlesByIdFailure(err))
        })
    }
}