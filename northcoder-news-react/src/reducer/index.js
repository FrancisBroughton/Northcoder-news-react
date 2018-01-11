import {combineReducers} from 'redux';
import articles from './articles';
import topics from './topics';
import comments from './comments';

const reducer = combineReducers({
  articles: articles,
  topics: topics,
  comments: comments

});

export default reducer;