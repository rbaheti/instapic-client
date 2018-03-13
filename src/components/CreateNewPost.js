import React, { Component } from 'react';
import { addPost } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import "./CreateNewPost.css";

let dateFormat = require('dateformat');

class CreateNewPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {
				username: this.props.username,
				thumbnailUrl: 'http://www.gardensdecor.com/cdn/img/flower-and-butterfly-images-free-stock-photos-download-11381-intended-for-flower-with-butterfly.jpg',
	      		imageUrl: '',
	      	},
	      	redirectToHomePage: false,
	      	isError: false,
    	};
	}

    handleSetImageUrl = (event) => {
    	let newPost = {...this.state.post};
		newPost.imageUrl = event.target.value;
		this.setState({post:newPost});
    }

    submitNewPostForm = (event) => {
    	event.preventDefault();
    	if (this.state.post.imageUrl === "") {
    		this.setState({isError: true});
    		return;
    	}
    	this.setState({isError: false});

    	let newPost = {...this.state.post};
		let now = new Date();
		newPost.timestamp = dateFormat(now, "isoDateTime");
		this.props.dispatch(addPost(newPost));
    	this.setState({
			post: {
    			username: this.props.username, 
    			thumbnailUrl: 'http://www.gardensdecor.com/cdn/img/flower-and-butterfly-images-free-stock-photos-download-11381-intended-for-flower-with-butterfly.jpg',
    			imageUrl: '',
    		},
    		redirectToHomePage: true,
    	});
    }

	render() {
		if (this.state.redirectToHomePage) {
     		return (<Redirect to="/"/>);
   		}
		return (
			<form className="newpost-form">
		        <ul className="newpost-form-style">
		          <li>
		            <label>Image Url <span className="redcolor">*</span></label>
		            <input type="text" className="field-long" onChange={this.handleSetImageUrl} value={this.state.post.imageUrl} />
		          </li>
		          {
            		this.state.isError === true ?
            		(<li><label className="redcolor">Invalid input. Please try again.</label></li>) : null
          		  }
		          <li>
		          	<div className="buttonDiv">
		          		<input type="submit" onClick={this.submitNewPostForm} value="Add New Post" />
		          	</div>
		          </li>
		        </ul>
	      </form>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps)(CreateNewPost);