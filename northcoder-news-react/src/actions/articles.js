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
        error: error
    };
}

export function fetchArticlesByArtIdSuccess(data) {
    return {
        type: types.FETCH_ARTICLES_BY_ART_ID_SUCCESS,
        articlePayload: data
    };
}
export function fetchArticlesByArtIdFailure(error) {
    return {
        type: types.FETCH_ARTICLES_BY_ART_ID_FAILURE,
        articleError: error
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

export function addCommentsSuccess(data) {
    return {
        type: types.ADD_COMMENTS_SUCCESS,
        comments: data
    };
}

export function addCommentsFailure(error) {
    return {
        type: types.ADD_COMMENTS_FAILURE,
        commentsError: error
    };
}

export function fetchAllArticles(data){
    return function (dispatch){
        axios.get('https://jredfern-northcoders-news-api.herokuapp.com/api/articles')
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
        axios.get(`https://jredfern-northcoders-news-api.herokuapp.com/api/articles/${id}`)
        .then(res => {
            dispatch(fetchArticlesByArtIdSuccess(res.data))
        })
        .catch (err => {
            dispatch(fetchArticlesByArtIdFailure(err))
        })
    }
}

export function fetchCommentsByArticlesId(id){
    return function (dispatch){
        axios.get(`https://jredfern-northcoders-news-api.herokuapp.com/api/articles/${id}/comments`)
        .then(res => {
            dispatch(fetchCommentsByArtIdSuccess(res.data.comments))
        })
        .catch (err => {
            dispatch(fetchCommentsByArtIdFailure(err))
        })
    }
}

export function addComments(comment){
    return function (dispatch) {
        console.log(comment.comment, " HERE!");
        axios.post(`https://jredfern-northcoders-news-api.herokuapp.com/api/articles/${comment.id}/comments`,{
            comment: comment.comment,
            username: comment.username
        })
        .then (res => {
            dispatch(addCommentsSuccess(res.data.comment));
        })
        .then(res => {
            dispatch(fetchCommentsByArticlesId(comment.id));
        })
        .catch (err => {
            dispatch(addCommentsFailure(err))
        })    
    }   
}

export function deleteComments(id){
    return function (dispatch) {
        axios.post(`https://jredfern-northcoders-news-api.herokuapp.com/api/articles/${id}/comments`,{
            //comment: comment.comment
        })
        .then (res => {
            dispatch(addCommentsSuccess(res.data.comment));
        })
        .then(res => {
            dispatch(fetchCommentsByArticlesId(id));
        })
        .catch (err => {
            dispatch(addCommentsFailure(err))
        })    
    }   
}
