
import { expect } from 'chai';
import * as articlesActions from '../actions/articles';
import * as topicsActions from '../actions/topics';
import * as types from '../types';

describe('Actions for Articles', () => {
    it('should return the correct action for fetchArticlesRequest', () => {
        expect(articlesActions.fetchArticlesRequest()).to.eql({
            type: types.FETCH_ARTICLES_REQUEST
        });
    });
    it('should return the correct action for fetchArticlesSuccess', () => {
        const data = [1, 2, 3, 4];
        expect(articlesActions.fetchArticlesSuccess(data)).to.eql({
            type: types.FETCH_ARTICLES_SUCCESS,
            payload: data
        });
    });
    it('should return the correct action for fetchArticlesFailure', () => {
        const error = 'error';
        expect(articlesActions.fetchArticlesFailure(error)).to.eql({
            type: types.FETCH_ARTICLES_FAILURE,
            error: error
        });
    });
    it('should return the correct action for fetchArticlesByArtIdSuccess', () => {
        const data = [1, 2, 3, 4];
        expect(articlesActions.fetchArticlesByArtIdSuccess(data)).to.eql({
            type: types.FETCH_ARTICLES_BY_ART_ID_SUCCESS,
            articlePayload: data
        });
    });
    it('should return the correct action for fetchArticlesByArtIdFailure', () => {
        const error = 'error';
        expect(articlesActions.fetchArticlesByArtIdFailure(error)).to.eql({
            type: types.FETCH_ARTICLES_BY_ART_ID_FAILURE,
            articleError: error
        });
    });    
    it('should return the correct action for fetchCommentsByArtIdSuccess', () => {
        const data = [1, 2, 3, 4];
        expect(articlesActions.fetchCommentsByArtIdSuccess(data)).to.eql({
            type: types.FETCH_COMMENTS_BY_ART_ID_SUCCESS,
            comments: data
        });
    });
    it('should return the correct action for fetchCommentsByArtIdFailure', () => {
        const error = 'error';
        expect(articlesActions.fetchCommentsByArtIdFailure(error)).to.eql({
            type: types.FETCH_COMMENTS_BY_ART_ID_FAILURE,
            commentsError: error
        });
    });
});   

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