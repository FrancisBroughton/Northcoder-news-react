import axios from 'axios';
import * as types from '../types';

export function fetchArticlesRequest() {
    return {
        type: types.FETCH_ARTICLES_REQUEST
    };
}

export function fetchArticlesSuccess(data) {
    return {
        type: types.FETCH_ARTICLES_SUCCESS,
        payload: data
    };
}

export function fetchArticlesFailure(error) {
    return {
        type: types.FETCH_ARTICLES_FAILURE,
        payload: error
    };
}

export function fetchAllArticles(data){
    return function (dispatch){
        axios.get('https://northcoders-news-api.herokuapp.com/api/articles')
        .then(res => {
            dispatch(fetchArticlesSuccess(res.data.articles))
        })
        .catch (err => {
            dispatch(fetchArticlesFailure(err))
        })
    }
}

