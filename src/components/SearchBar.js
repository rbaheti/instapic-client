import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchText } from '../actions';

class SearchBar extends Component {

	render() {
		return (
			<div className="SearchBar">
				<input className="SearchBar-field" type="text" 
					onChange={() => this.props.setSearchText(this.input.value)}
					ref={inputElem => this.input = inputElem} placeholder="Search Username">
				</input>
			</div>
		);
	}
};

export default connect(null, {setSearchText})(SearchBar);