import {
  UPDATE_USERNAME
 } from '../actions';

export default (username = '', action) => {
	switch (action.type) {
    case UPDATE_USERNAME:
    	return action.username;

    default:
      return username;
  }
};