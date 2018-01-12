import { expect } from 'chai';
import commentsReducer from '../reducer';
import {initialState} from '../reducer/comments';
import * as types from '../types'

import {
    addComments,
    addCommentsSuccess,
    addCommentsFailure,
    deleteComments,
    deleteCommentsSuccess,
    deleteCommentsFailure
} from '../actions/articles';

const prevState = initialState || prevState;

describe('comments reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed prevState if an unrecognised action is passed', () => {
            const action = {type:"whatever"};
            const newState = commentsReducer(prevState, action);
            expect(newState.comments).to.equal(prevState);
        });
        it('uses the initial state if no prevState is passed', () => {
            const action = {type: "addCommentRequest"};
            const newState = commentsReducer(undefined, action);
            expect(newState.comments).to.equal(initialState);
        });
        it('handles addCommentsSuccess', () => {
            const data = {
                comment: "added comment", 
                username: "j-redfern"
            }
            const action = addCommentsSuccess(data);
            const newState = commentsReducer(prevState, action);
            expect(newState.comments.commentsPayload).to.be.equal(data);
            expect(newState.comments.commentsError).to.be.equal(null);
            expect(newState.comments.loading).to.be.equal(true);
        });
        it('handles addCommentsFailure', () => {
            const error = 'error';
            const action = addCommentsFailure(error);
            const newState = commentsReducer(prevState, action);
            expect(newState.comments.commentsError).to.be.equal('error')
            expect(newState.comments.loading).to.be.equal(false)
            expect(newState.comments.commentsPayload).to.be.eql([])
        });
        it('handles deleteCommentsSuccess', () => {
            const data = {
                comment: "delete this comment", 
                username: "j-redfern"
            }
            const action = deleteCommentsSuccess();
            const newState = commentsReducer(prevState, action);
            expect(newState.comments.commentsPayload).to.be.equal(undefined);
            expect(newState.comments.commentsError).to.be.equal(null);
            expect(newState.comments.loading).to.be.equal(true);
        });
        it('handles deleteCommentsFailure', () => {
            const error = 'error';
            const action = deleteCommentsFailure(error);
            const newState = commentsReducer(prevState, action);
            expect(newState.comments.commentsError).to.be.equal('error')
            expect(newState.comments.loading).to.be.equal(false)
            expect(newState.comments.commentsPayload).to.be.eql([])
        });
    })
}); 