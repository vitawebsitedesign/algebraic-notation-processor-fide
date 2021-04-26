import pawnMoveStrategy from '../piece-move-strategies/pawn.js';

export const getMoveData = (mv, col) => {
    const mvPadded = mv.length < 3 ? `p${mv}` : mv;
    return {
        pieceType: mvPadded[0],
        file: mvPadded[1],
        rank: parseInt(mvPadded[2]),
        col: col
    };
};

export const tryGetPieceData = (board, mvData) => {
    if (mvData.pieceType == 'p') {
        return pawnMoveStrategy(board, mvData);
    }
    return null;
};
