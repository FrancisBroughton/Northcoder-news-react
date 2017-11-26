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

export function fetchCommentsByArtIdSuccess(data) {
    return {
        type: types.FETCH_COMMENTS_BY_ART_ID_SUCCESS,
        comments: data
    };
}

export function fetchCommentsByArtIdFailure(error) {
    return {
        type: types.FETCH_COMMENTS_BY_ART_ID_FAILURE,
        commentsError: error
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

export function fetchArticlesByArticlesId(id){
    return function (dispatch){
        axios.get(`https://northcoders-news-api.herokuapp.com/api/articles/${id}`)
        .then(res => {
            dispatch(fetchArticlesSuccess(res.data))
        })
        .catch (err => {
            dispatch(fetchArticlesFailure(err))
        })
    }
}

export function fetchCommentsByArticlesId(id){
    console.log("in fetchCommentsByArticlesId")
    return function (dispatch){
        axios.get(`https://northcoders-news-api.herokuapp.com/api/articles/${id}/comments`)
        .then(res => {
            console.log(res.data)
            dispatch(fetchCommentsByArtIdSuccess(res.data.comments))
        })
        .catch (err => {
            dispatch(fetchCommentsByArtIdFailure(err))
        })
    }
}
