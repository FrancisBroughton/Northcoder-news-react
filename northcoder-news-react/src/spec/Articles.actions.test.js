
import {expect} from 'chai';
import * as articlesActions from '../actions/articles';
import * as types from '../types';

describe('Action creators', () => {
        it('should return the correct action for fetchArticlesRequest', () => {
            expect(articlesActions.fetchArticlesRequest()).to.eql({
                type: types.FETCH_ARTICLES_REQUEST
            });
        });
        it('should return the correct action for fetchArticlesSuccess', () => {
            const data = [1,2,3,4];
            expect(articlesActions.fetchArticlesSuccess(data)).to.eql({
                type: types.FETCH_ARTICLES_SUCCESS,
                payload: data
            });
        });
        it('should return the correct action for fetchArticlesFailure', () => {
            const error = 'error';
            expect(articlesActions.fetchArticlesFailure(error)).to.eql({
                type: types.FETCH_ARTICLES_FAILURE,
                payload: error
            });
        });
});