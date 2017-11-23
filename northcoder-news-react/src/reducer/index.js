import {combineReducers} from 'redux';
import articles from './articles';

const reducer = combineReducers({
  articles: articles
});

export default reducer;