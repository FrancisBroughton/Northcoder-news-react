import { expect } from 'chai';
import topicsReducer from '../reducer';
import {initialState} from '../reducer/topics';
import * as types from '../types'

import {
    fetchTopicsRequest,
    fetchTopicsSuccess,
    fetchTopicsFailure,
    fetchArticlesBySlugSuccess,
    fetchArticlesBySlugFailure,
} from '../actions/topics';

const prevState = initialState || prevState;

describe ('topics reducer',() => {
    describe ('default behaviour', ()=> {
        it('returns the passed prevState if an unrecognised action is passed', () => {
            const action = {type:"whatever"};
            const newState = topicsReducer(prevState, action);
            expect(newState.topics).to.equal(prevState);
        });
        it('uses the initial state if no prevState is passed', () => {
            const action = {type: "fetchTopicRequest"};
            const newState = topicsReducer(undefined, action);
            expect(newState.topics).to.equal(initialState);
        });
        it('handles fetchTopicsRequest', () => {
            const action = fetchTopicsRequest();
            const newState = topicsReducer(prevState, action);
            expect(newState.topics.loading).to.eql(true);
            expect(newState.topics.error).to.eql(null);
            expect(newState.topics.payload).to.eql([]);
        });
        it('handles fetchTopicsSuccess', () => {
            const data = "hello";
            const action = fetchTopicsSuccess(data);
            const newState = topicsReducer(prevState, action);
            expect(newState.topics.payload).to.be.equal("hello");
            expect(newState.topics.error).to.be.equal(null);
            expect(newState.topics.loading).to.be.equal(true);
        });
        it('handles fetchTopicsFailure', () => {
            const error = 'error';
            const action = fetchTopicsFailure(error);
            const newState = topicsReducer(prevState, action);
            expect(newState.topics.error).to.be.equal('error')
            expect(newState.topics.loading).to.be.equal(false)
            expect(newState.topics.payload).to.be.eql([])
        });
        it('handles fetchArticlesBySlugSuccess', () => {
            const data = "hello";
            const action = fetchArticlesBySlugSuccess(data);
            const newState = topicsReducer(prevState, action);
            expect(newState.topics.topicPayload).to.be.equal("hello");
            expect(newState.topics.topicError).to.be.equal(null);
            expect(newState.topics.loading).to.be.equal(true);
        });
        it('handles fetchArticlesBySlugFailure', () => {
            const error = 'error';
            const action = fetchArticlesBySlugFailure(error);
            const newState = topicsReducer(prevState, action);
            expect(newState.topics.topicError).to.be.equal('error')
            expect(newState.topics.loading).to.be.equal(false)
            expect(newState.topics.topicPayload).to.be.eql([])
        });
    })
})