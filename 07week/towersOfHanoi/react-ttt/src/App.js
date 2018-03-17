import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Notes
// Back to 58:38
// Go back and review video and create notes and re-render code

class App extends Component {
	state = {
		stacks: {
			a: [4, 3, 2, 1],
			b: [],
			c: []
		},
		startStack: null,
		error: ''
	};

	renderRings = letter => {
		const stack = this.state.stacks[letter];
		return stack.map((ringStack, index) => {
			return <p key={index}>{ringStack}</p>;
		});
	};

	isValidMove = endStackLetter => {
		const endStack = this.state.stacks[endStackLetter];

		if (endStack.length) {
			const startStack = this.state.stacks[this.state.startStack];
			const startStackLastItem = startStack[startStack.length - 1];
			const endStackLastItem = endStack[endStack.length - 1];

			return startStackLastItem < endStackLastItem;
		}
		return !endStack.length;
	};

	handleUserClick = stack => {
		console.log('Heree', stack);
		if (!this.state.startStack) {
			this.setState({ startStack: stack, error: '' });
		} else {
			if (this.isValidMove(stack)) {
				const endStackLetter = stack;
				const newStartStack = [...this.state.stacks[this.state.startStack]];
				const poppedPiece = newStartStack.pop();

				const newEndStack = [...this.state.stacks[endStackLetter]];
				newEndStack.push(poppedPiece);

				const newStacks = this.state.stacks;
				newStacks[this.state.startStack] = newStartStack;
				newStacks[endStackLetter] = newEndStack;

				this.setState({ stacks: newStacks, error: '', startStack: null });
			} else {
				this.setState({ error: 'Illegal Move' });
			}
		}
	};

	render() {
		const stackStyle = { margin: 40 };
		return (
			<div className="App" style={{ display: 'flex' }}>
				<h2>Towers of tired-of-this-game</h2>
				<div style={stackStyle} onClick={() => this.handleUserClick('a')}>
					Stack A
					{this.renderRings('a')}
				</div>
				<div style={stackStyle} onClick={() => this.handleUserClick('b')}>
					Stack B
					{this.renderRings('b')}
				</div>
				<div style={stackStyle} onClick={() => this.handleUserClick('c')}>
					Stack C
					{this.renderRings('c')}
				</div>
				<div style={{ color: 'orange' }}>{this.state.error}</div>
			</div>
		);
	}
}

export default App;

// Notes
