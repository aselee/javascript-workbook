import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Notes
// Stopped video at 27:24; to be continued...

class App extends Component {
	state = {
		stacks: {
			a: [4, 3, 2, 1],
			b: [],
			c: []
		},
		startStack: null
	};

	renderRings(letter) {
		const stack = this.state.stacks[letter];
		return stack.map((ringStack, index) => {
			return <p key={index}>{ringStack}</p>;
		});
	}
	handleUserClick = stack => {
		console.log('Heree', stack);
		if (this.state.startStack) {
			this.setState({ startStack: stack });
		} else {
			const endStack = stack;
		}
	};
	render() {
		const stackStyle = { margin: 40 };
		return (
			<div className="App" style={{ display: 'flex' }}>
				<h2>Towers of tired-of-this-game</h2>
				<div style={stackStyle} onClick={() => this.handleUserClick('a')}>
					Stack 1
					{this.renderRings('a')}
				</div>
				<div style={stackStyle} onClick={() => this.handleUserClick('b')}>
					Stack 2
					{this.renderRings('b')}
				</div>
				<div style={stackStyle} onClick={() => this.handleUserClick('c')}>
					Stack 3
					{this.renderRings('c')}
				</div>
			</div>
		);
	}
}

export default App;
