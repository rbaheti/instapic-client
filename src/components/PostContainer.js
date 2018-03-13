import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLikes } from '../actions';
import './PostContainer.css';
import CommentSection from './CommentSection';

class PostContainer extends Component {
	handleAddLikes = (postid) => {
		if (this.props.username === "") {
			return;
		}
    	this.props.dispatch(addLikes(postid));
	}

	render() {
		// caller for PostContainer is ImageFeed
		const post = this.props.post;
		return (
			<div className="Post">
				<div className="Post-header">
					<img alt="" src={post.thumbnailUrl} />
					<h3 className="Post-username">
						<Link className="Post-username-link" 
							to={`/userpost/${post.username}`}> {post.username}
						</Link>
					</h3>
				</div>

				<div className="Post-image">
					<img alt="" src={post.imageUrl} />
				</div>

				<div className="Post-body">
					<div className="Post-indications">
						<button onClick={() => {this.handleAddLikes(post._id)}}>Like</button>
						<h3 className="Post-likes"> {post.likes} likes</h3>
					</div>
					<CommentSection comments={post.comments} postid={post._id} timestamp={post.timestamp} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    allPosts: state.allPosts,
    username: state.username,
  };
};

export default connect(mapStateToProps)(PostContainer);