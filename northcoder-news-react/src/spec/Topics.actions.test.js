import { expect } from 'chai';
import * as topicsActions from '../actions/topics';
import * as types from '../types';

describe('Actions for topics', () => { 
    it('should return the correct action for fetchtopicsRequest', () => {
        expect(topicsActions.fetchTopicsRequest()).to.eql({
            type: types.FETCH_TOPICS_REQUEST
        });
    });
    it('should return the correct action for fetchTopicsSuccess', () => {
        const data = [1, 2, 3, 4];
        expect(topicsActions.fetchTopicsSuccess(data)).to.eql({
            type: types.FETCH_TOPICS_SUCCESS,
            payload : data
        });
    });
    it('should return the correct action for fetchTopicsFailure', () => {
        const error = 'error';
        expect(topicsActions.fetchTopicsFailure(error)).to.eql({
            type: types.FETCH_TOPICS_FAILURE,
            error: error
        });    
    });
});