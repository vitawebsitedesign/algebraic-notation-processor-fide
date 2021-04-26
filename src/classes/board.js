import {getMoveData, tryGetPieceData} from '../util/move.js';

export default class Board {
    squares = {};

    getSquares = () => this.squares;
    
    constructor() {
        this.initEmptyBoard();
        this.initBoardPieces('w');
        this.initBoardPieces('b');
    }

    initEmptyBoard = () => {
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const ranks = [...Array(8).keys()].map(r => r + 1);
    
        for (let file of files) {
            this.squares[file] = {};
    
            for (let rank of ranks) {
                this.squares[file][rank] = null;    
            }
        }
    };

    initBoardPieces = (col) => {
        let rankCapital = col === 'w' ? 1 : 8;
        this.squares['a'][rankCapital] = `${col}rq`;
        this.squares['b'][rankCapital] = `${col}hq`;
        this.squares['c'][rankCapital] = `${col}bq`;
        this.squares['d'][rankCapital] = `${col}q`;
        this.squares['e'][rankCapital] = `${col}k`;
        this.squares['f'][rankCapital] = `${col}bk`;
        this.squares['g'][rankCapital] = `${col}hk`;
        this.squares['h'][rankCapital] = `${col}rk`;
        
        let rankPawns = col === 'w' ? 2 : 7;
        this.squares['a'][rankPawns] = `${col}pa`;
        this.squares['b'][rankPawns] = `${col}pb`;
        this.squares['c'][rankPawns] = `${col}pc`;
        this.squares['d'][rankPawns] = `${col}pd`;
        this.squares['e'][rankPawns] = `${col}pe`;
        this.squares['f'][rankPawns] = `${col}pf`;
        this.squares['g'][rankPawns] = `${col}pg`;
        this.squares['h'][rankPawns] = `${col}ph`;
    };

    processMove = (mv, col) => {
        const mvData = getMoveData(mv, col);
        const pieceData = tryGetPieceData(this.squares, mvData);
        if (!pieceData)
            throw new Error(`Piece not found for move data: ${JSON.stringify(mvData)}`);

        this.squares[mvData.file][mvData.rank] = pieceData.pieceId;
        this.squares[pieceData.file][pieceData.rank] = null;
    };
};
