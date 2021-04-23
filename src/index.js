import pawnMoveStrategy from './piece-move-strategies/pawn.js';

const state = {
};

const initEmptyBoard = () => {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = [...Array(8).keys()].map(r => r + 1);

    for (let file of files) {
        state[file] = {};

        for (let rank of ranks) {
            state[file][rank] = null;    
        }
    }
};

const initBoardPieces = col => {
    let rankCapital = col === 'w' ? 1 : 8;
    state['a'][rankCapital] = `${col}rq`;
    state['b'][rankCapital] = `${col}hq`;
    state['c'][rankCapital] = `${col}bq`;
    state['d'][rankCapital] = `${col}q`;
    state['e'][rankCapital] = `${col}k`;
    state['f'][rankCapital] = `${col}bk`;
    state['g'][rankCapital] = `${col}hk`;
    state['h'][rankCapital] = `${col}rk`;

    let rankPawns = col === 'w' ? 2 : 7;
    state['a'][rankPawns] = `${col}pa`;
    state['b'][rankPawns] = `${col}pb`;
    state['c'][rankPawns] = `${col}pc`;
    state['d'][rankPawns] = `${col}pd`;
    state['e'][rankPawns] = `${col}pe`;
    state['f'][rankPawns] = `${col}pd`;
    state['g'][rankPawns] = `${col}pg`;
    state['h'][rankPawns] = `${col}ph`;
};

const getMoveData = (mv, col) => {
    const mvPadded = mv.length < 3 ? `p${mv}` : mv;
    return {
        pieceType: mvPadded[0],
        file: mvPadded[1],
        rank: parseInt(mvPadded[2]),
        col: col
    };
};

const tryGetPieceData = mvData => {
    if (mvData.pieceType == 'p') {
        return pawnMoveStrategy(state, mvData);
    }
    return null;
};

const processMove = (mv, col) => {

    // split the 2 moves (in the turn)
    // for ea mv
        // color = mv is 1st ? w : b
        // { pieceType, rank, file } = getMoveData(mv);

        const mvData = getMoveData(mv, col);

        /* const pieceId = getPieceId(mv);
        if (!pieceId)
            throw new Error('Piece ID not found');
        */
        const pieceData = tryGetPieceData(mvData);
        if (!pieceData)
            throw new Error(`Piece not found for move data: ${JSON.stringify(mvData)}`);

        // Update id for square in state
        state[mvData.file][mvData.rank] = pieceData.pieceId;

        // Clear id for square in state
        state[pieceData.file][pieceData.rank] = null;
};

const cvtNotationToArray = notation => {
    return notation
        .replace(/\d\.\s/g, '')
        .split(' ');
};

initEmptyBoard();
initBoardPieces('w');
initBoardPieces('b');



const moves = cvtNotationToArray('1. e4 e5');

console.log(moves);

for (let t = 1; t < moves.length + 1; t++) {
    const col = t % 2 === 1 ? 'w' : 'b';

    console.log(col);

    processMove(moves[t - 1], col);
}

console.log(state);
