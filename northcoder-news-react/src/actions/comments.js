import axios from 'axios';
import * as types from '../types';
import {fetchCommentsByArticlesId} from './articles.js'

export function editVoteCountByCommentIdSuccess() {
    return {
        type: types.EDIT_VOTE_COUNT_BY_COMMENT_ID_SUCCESS
    };   
}

export function editVoteCountByCommentIdFailure(error) {
    return {
        type: types.EDIT_VOTE_COUNT_BY_COMMENT_ID_FAILURE,
        voteCountError: error
    };   
}

export function editVoteCountByCommentId (art_id, id, voteCount) {
    return function(dispatch){
        axios.put(`https://jredfern-northcoders-news-api.herokuapp.com/api/comments/${id}?votes=${voteCount}`,{
        })
        .then(res => {
            dispatch(editVoteCountByCommentIdSuccess());
        })
        .then(res => {
            dispatch(fetchCommentsByArticlesId(art_id))
        })
        .catch (err => {
            dispatch(editVoteCountByCommentIdFailure(err))
        })
    }
}