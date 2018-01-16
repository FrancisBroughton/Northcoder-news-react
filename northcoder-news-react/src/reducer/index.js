import {combineReducers} from 'redux';
import articles from './articles';
import topics from './topics';
import comments from './comments';
import users from './users';

const reducer = combineReducers({
  articles: articles,
  topics: topics,
  comments: comments,
  users: users

});

export default reducer;