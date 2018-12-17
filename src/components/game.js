import React from 'react';
import './../styles/game.css'
import { Button, Container } from "react-bulma-components/full";

function Square(props) {
	return(
		<button className={`square ${props.winner ? 'green-border': '' }`} onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			moveNumber: 0,
			movesOrder: []
		}
	}

  renderSquare(i) {
		let squares = this.state.squares.slice();
		let isWon = calculateWinner(squares);
		let winner;
		if (isWon && isWon !== 'draw') {
			winner = isWon.includes(i) ? true : false; 
		} else {
			winner = false;
		}
    return <Square value={this.state.squares[i]} winner={winner} onClick={() => this.handleClick(i)}/>;
	}
	
	handleClick(i) {
		let squares = this.state.squares.slice();
		if( calculateWinner(squares) || squares[i]) {
			return;
		}

		let moves = this.state.movesOrder;
		moves.push(i);

		squares[i] = this.state.moveNumber % 2 === 0 ? 'X': 'O';

		this.setState({
				squares: squares, 
				moveNumber: this.state.moveNumber + 1, 
				movesOrder: moves
			}
		);
	}

	undo() {
		if (this.state.movesOrder.length > 0) {
			let lastIndex = this.state.movesOrder[this.state.moveNumber - 1];
			let squares = this.state.squares.slice();
			let movesOrder = this.state.movesOrder.slice();

			squares[lastIndex] = null;
			movesOrder.pop();

			this.setState({
					squares: squares, 
					moveNumber: this.state.moveNumber - 1, 
					movesOrder: movesOrder
				}
			);
		}
	}

	resetGame() {
		console.log('Came here');
		this.setState({
			squares: Array(9).fill(null),
			moveNumber: 0,
			movesOrder: []
		});
		
	}

  render() {
		const winner = calculateWinner(this.state.squares);
		let status;
		if(winner) {
			if (winner === 'draw') {
				status = 'DRAWWWWWWWWWWWWWWWWWWWW';
			} else {
				status = 'Winner is ' + this.state.squares[winner[0]];
			}
		} else {
			status = 'Next player is ' + (this.state.moveNumber % 2 === 0 ? 'X': 'O')
		}

    return (
      <Container className="container">
        <div className="status">{status}</div>
				<Button className="button" color="success" onClick={() => this.undo()}>Undo last move</Button>
				<Button className="button" color="success" onClick={() => this.resetGame()}>Reset Game</Button>
       
				{[0,1,2,3,4,5,6,7,8].map(item => {
					return(
						item % 3 === 0 && 
						<div key={item.toString()} className="board-row">
							{this.renderSquare(item)}
							{this.renderSquare(item + 1)}
							{this.renderSquare(item + 2)}
						</div>
					) 
				})}

      </Container>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

//common functions 

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return lines[i];
      }
      }
      
      if (!squares.includes(null)) {
          return 'draw';
      }
    return null;
	}
	

// --------------------------------------------------------------------------

export default Game;
  
