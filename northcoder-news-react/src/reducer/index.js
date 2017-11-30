import {combineReducers} from 'redux';
import articles from './articles';
import topics from './topics';

const reducer = combineReducers({
  articles: articles,
  topics: topics
  
});

export default reducer;