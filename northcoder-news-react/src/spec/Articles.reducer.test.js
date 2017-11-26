import { expect } from 'chai';
import articlesReducer from '../reducer';
import {initialState} from '../reducer/articles';
import * as types from '../types'

import {
    fetchArticlesRequest,
    fetchArticlesSuccess,
    fetchArticlesFailure,
    fetchCommentsByArtIdSuccess,
    fetchCommentsByArtIdFailure,
} from '../actions/articles';

const prevState = initialState || prevState;

describe('articles reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed prevState if an unrecognised action is passed', () => {
            const action = {type:"whatever"};
            const newState = articlesReducer(prevState, action);
            expect(newState.articles).to.equal(prevState);
        });
        it('uses the initial state if no prevState is passed', () => {
            const action = {type: "fetchArticleRequest"};
            const newState = articlesReducer(undefined, action);
            expect(newState.articles).to.equal(initialState);
        });
        it('handles fetchArticlesRequest', () => {
            const action = fetchArticlesRequest();
            const newState = articlesReducer(prevState, action);
            expect(newState.articles.loading).to.eql(true);
            expect(newState.articles.error).to.eql(null);
            expect(newState.articles.payload).to.eql([]);
        });
        it('handles fetchArticlesSuccess', () => {
            const data = "hello";
            const action = fetchArticlesSuccess(data);
            const newState = articlesReducer(prevState, action);
            expect(newState.articles.payload).to.be.equal("hello");
            expect(newState.articles.error).to.be.equal(null);
            expect(newState.articles.loading).to.be.equal(true);
        });
        it('handles fetchArticlesFailure', () => {
            const error = 'error';
            const action = fetchArticlesFailure(error);
            const newState = articlesReducer(prevState, action);
            expect(newState.articles.error).to.be.equal('error')
            expect(newState.articles.loading).to.be.equal(false)
            expect(newState.articles.payload).to.be.eql([])
        });
        it('handles fetchCommentsByArtIdSuccess', () => {
            const data = "hello";
            const action = fetchCommentsByArtIdSuccess(data);
            const newState = articlesReducer(prevState, action);
            expect(newState.articles.comments).to.be.equal("hello");
            expect(newState.articles.error).to.be.equal(null);
            expect(newState.articles.loading).to.be.equal(true);
        });
        it('handles fetchCommentsByArtIdFailure', () => {
            const error = 'error';
            const action = fetchCommentsByArtIdFailure(error);
            const newState = articlesReducer(prevState, action);
            console.log(newState)
            expect(newState.articles.commentsError).to.be.equal('error')
            expect(newState.articles.loading).to.be.equal(false)
            expect(newState.articles.payload).to.be.eql([])
        });
    })
});    