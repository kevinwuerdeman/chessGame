import React, { Component } from 'react';
const Chess = require('chess.js');
const chess = Chess();
import { startGame } from '../reducers/board';
import ChessBoard from './ChessBoard';
import { connect } from 'react-redux';

class Root extends Component {

  componentDidMount () {
    this.props.newGame();
  }
  render () {
    return (
      <div>
        <ChessBoard />
      </div>
    );
  }
}

const mapState = ({board}) => ({board});

const mapDispatch = dispatch => ({
  newGame: () => {
    dispatch(startGame(chess.ascii()));
  }
});

export default connect(mapState, mapDispatch)(Root);
