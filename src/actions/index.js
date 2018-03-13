import axios from 'axios';

export const SET_POST_DATA = 'SET_POST_DATA';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const ADD_POST = 'ADD_POST';
export const ADD_LIKES = 'ADD_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';

export const getPostData = () => {
	const postDataEndpoint = 'https://fast-harbor-30014.herokuapp.com/posts';
	const postData = axios.get(postDataEndpoint);
	return {
		type: SET_POST_DATA,
		payload: postData,
	};
}

export const setSearchText = (text) => {
	return {
		type: SET_SEARCH_TEXT,
	    text
	};
};

export const addPost = (instaPost) => {
	const addPostEndpoint = 'https://fast-harbor-30014.herokuapp.com/newpost';
	const addPostResponse = axios.post(addPostEndpoint, instaPost);
	return {
		type: ADD_POST,
		payload: addPostResponse
	};
};

export const addLikes = (postid) => {
	const addLikeEndpoint = 'https://fast-harbor-30014.herokuapp.com/likes';
	const addLikesResponse = axios.post(addLikeEndpoint, {"id": postid});
	return {
		type: ADD_LIKES,
		payload: addLikesResponse
	};
}

export const addComment = (postid, commentObj) => {
	const addCommentEndpoint = 'https://fast-harbor-30014.herokuapp.com/comment';
	const addCommentResponse = axios.post(addCommentEndpoint, {"id": postid, "username": commentObj.username, "text": commentObj.text});
	return {
		type: ADD_COMMENT,
		payload: addCommentResponse
	};
}

export const updateUsername = (username) => {
	return {
		type: UPDATE_USERNAME,
		username,
	};
}