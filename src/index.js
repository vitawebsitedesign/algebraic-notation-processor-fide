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

const processMove = (mv) => {

    // split the 2 moves (in the turn)
    // for ea mv
        // color = mv is 1st ? w : b
        // { type, rank, file } = getMoveData(mv);

        const pieceId = getPieceId(mv);
        if (!pieceId)
            throw new Error('Piece ID not found');

        // Update id for square in state
        // Clear id for square in state
};

initEmptyBoard();
initBoardPieces('w');
initBoardPieces('b');

const notation = 'e4';