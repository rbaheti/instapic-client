import {
  SET_POST_DATA,
  ADD_POST,
  ADD_LIKES,
  ADD_COMMENT
 } from '../actions';

export default (allPosts = [], action) => {
	switch (action.type) {
    case SET_POST_DATA: {
      let newPosts = action.payload.data;
      newPosts.sort(function(post1, post2) {
        return new Date(post2.timestamp) - new Date(post1.timestamp);
      });
	    return newPosts;
    }

    case ADD_POST:
      let newPosts = allPosts.slice();
      newPosts.push(action.payload.data);
      newPosts.sort(function(post1, post2){
        return new Date(post2.timestamp) - new Date(post1.timestamp);
      });
		  return newPosts;

    case ADD_LIKES: {
      const tempAllPostArray = [];
      for(let i = 0; i < allPosts.length; ++i) {
        let currPost = allPosts[i];
        if(currPost._id === action.payload.data._id) {
          tempAllPostArray.push(action.payload.data);
        } else {
          tempAllPostArray.push(currPost);
        }
      }
      return tempAllPostArray;
    }

    case ADD_COMMENT: {
      const tempAllPostArray = [];
      for(let i = 0; i < allPosts.length; ++i) {
        let currPost = allPosts[i];
        if(currPost._id === action.payload.data._id) {
          tempAllPostArray.push(action.payload.data);
        } else {
          tempAllPostArray.push(currPost);
        }
      }
      return tempAllPostArray;
    }

    default:
      return allPosts;
  }
};