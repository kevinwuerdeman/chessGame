import React, { Component } from 'react';
const Chess = require('chess.js');
const chess = Chess();
import { connect } from 'react-redux';
import { playerMove } from '../reducers/board';

class ChessBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{console.log(this.props.board)}</h1>
        <button onClick={this.props.handleClick}>Next Turn </button>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    board: state.board
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleClick(event) {
      const moves = chess.moves();
      chess.move(moves[Math.floor(Math.random() * moves.length)]);
      dispatch(playerMove(chess.ascii()));
      console.log(chess.board())
    },
    playerMove(board) {
      dispatch(playerMove(board));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChessBoard);
