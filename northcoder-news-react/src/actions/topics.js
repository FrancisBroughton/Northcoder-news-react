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

export function fetchArticlesBySlugSuccess(data){
    return {
        type : types.FETCH_ARTICLES_BY_SLUG_SUCCESS,
        topicPayload: data 
    }
}

export function fetchArticlesBySlugFailure(error) {
    return {
        type: types.FETCH_ARTICLES_BY_SLUG_FAILURE,
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

export function fetchArticlesBySlug (slug) {
    return function(dispatch){
        axios.get(`https://jredfern-northcoders-news-api.herokuapp.com/api/topics/${slug}/articles`)
        .then(res => {
            console.log(res.data)
            dispatch(fetchArticlesBySlugSuccess(res.data))
        })
        .catch(err=> {
            dispatch(fetchArticlesBySlugFailure(err))
        })
    }
}