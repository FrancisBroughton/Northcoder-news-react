import { expect } from 'chai';
import * as commentActions from '../actions/articles';
import * as types from '../types';

describe('Actions for comments', () => {
    it('should return the correct action for addCommentsSuccess', () => {
        const data = [1, 2, 3, 4];
        expect(commentActions.addCommentsSuccess(data)).to.eql({
            type: types.ADD_COMMENTS_SUCCESS,
            comments: data
        });
    });
    it('should return the correct action for addCommentsFailure', () => {
        const error = 'error';
        expect(commentActions.addCommentsFailure(error)).to.eql({
            type: types.ADD_COMMENTS_FAILURE,
            commentsError: error
        });
    });
    it('should return the correct action for deleteCommentsSuccess', () => {
        const data = [1, 2, 3, 4];
        expect(commentActions.deleteCommentsSuccess(data)).to.eql({
            type: types.DELETE_COMMENTS_SUCCESS
        });
    });
    it('should return the correct action for deleteCommentsFailure', () => {
        const error = 'error';
        expect(commentActions.deleteCommentsFailure(error)).to.eql({
            type: types.DELETE_COMMENTS_FAILURE,
            commentsError: error
        });
    });
});   