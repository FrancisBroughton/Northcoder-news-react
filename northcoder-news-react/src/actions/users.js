import axios from 'axios';
import * as types from '../types';

export function fetchUsersSuccess(data) {
    return {
        type: types.FETCH_USERS_SUCCESS,
        usersPayload: data
    };
}

export function fetchUsersFailure(error) {
    return {
        type: types.FETCH_USERS_FAILURE,
        usersError: error
    };
}

export function fetchUserDataSuccess(data) {
    return {
        type: types.FETCH_USER_DATA_SUCCESS,
        userPayload: data
    };
}

export function fetchUserDataFailure(error) {
    return {
        type: types.FETCH_USER_DATA_FAILURE,
        userError: error
    };
}

export function fetchAllUsers(data) {
    return function(dispatch) {
        axios.get('https://jredfern-northcoders-news-api.herokuapp.com/api/users')
            .then(res => {
                dispatch(fetchUsersSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchUsersSuccess(err))
            })
    }
};

export function fetchUserData(username) {
    return function(dispatch) {
        axios.get(`https://jredfern-northcoders-news-api.herokuapp.com/api/users/${username}`)
            .then (res => {
                dispatch(fetchUserDataSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchUserDataFailure(err))
            })
    }
}