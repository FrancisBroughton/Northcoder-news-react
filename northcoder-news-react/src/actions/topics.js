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

export function fetchAllTopics (data) {
    return function(dispatch){
        axios.get('https://northcoders-news-api.herokuapp.com/api/topics')
        .then (res => {
            dispatch(fetchTopicsSuccess(res.data.topics))
        })
        .catch (err => {
            dispatch(fetchTopicsFailure(err))
        })
    }
}