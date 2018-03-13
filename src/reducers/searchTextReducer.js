import {
  SET_SEARCH_TEXT
 } from '../actions';

export default (searchText = '', action) => {
	switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.text;
      
    default:
      return searchText;
  }
};