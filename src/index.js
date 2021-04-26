import Board from './classes/board.js';

const cvtNotationToArray = notation => {
    return notation
        .replace(/\d\.\s/g, '')
        .split(' ');
};

const board = new Board();
const moves = cvtNotationToArray('1. e4 e5 2. f4 f6');
for (let t = 1; t < moves.length + 1; t++) {
    const col = t % 2 === 1 ? 'w' : 'b';
    board.processMove(moves[t - 1], col);
}

console.log(board.getSquares());
