const PLAYER_MOVE = 'PLAYER_MOVE';
const INIT = 'INIT';


export const playerMove = (move) => ({ type: PLAYER_MOVE, move });
const init = board => ({ type: INIT, board });

const rootReducer = function (board = '', action) {
  switch (action.type) {
    case PLAYER_MOVE:
      return action.move;
    case INIT:
      return action.board;
    default: return board;
  }
};

export const startGame = (startingPoint) => dispatch => {
  dispatch(init(startingPoint));
};

export default rootReducer;
