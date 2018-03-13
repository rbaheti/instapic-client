import { combineReducers } from 'redux';
import allPostsReducer from './allPostsReducer';
import searchTextReducer from './searchTextReducer';
import usernameReducer from './usernameReducer';

const rootReducer = combineReducers({
  allPosts: allPostsReducer,
  searchText: searchTextReducer,
  username: usernameReducer,
});

export default rootReducer;