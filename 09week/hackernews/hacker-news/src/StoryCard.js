import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class StoryCard extends Component {
	render() {
		return (
			<div className="hackerStory">
				<h3>Title: {this.props.title}</h3>
				<p>Author: {this.props.by}</p>
			</div>
		);
	}
}

export default StoryCard;
