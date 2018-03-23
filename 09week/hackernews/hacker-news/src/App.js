import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StoryCard from './StoryCard';

class App extends Component {
	state = {
		stories: []
	};

	componentDidMount = () => {
		fetch(
			'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
		).then(res => {
			res.json().then(storyIds => {
				storyIds.slice(0, 50).forEach(storyId => {
					fetch(
						`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
					).then(res => {
						res.json().then(story => {
							const newStor = this.state.stories;
							newStor.push(story);
							this.setState({
								stories: newStor
							});
						});
					});
				});
			});
		});
	};

	renderStoryCard() {
		return this.state.stories.map((item, key) => {
			return <StoryCard title={item.title} by={item.by} key={key} />;
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				{this.renderStoryCard()}
			</div>
		);
	}
}

export default App;
