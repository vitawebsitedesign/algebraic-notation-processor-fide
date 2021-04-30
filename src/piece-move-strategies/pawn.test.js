import Board from '../classes/board';
import pawn from './pawn';
import {getMoveData} from '../util/move.js';

test('should find pawn if a white pawn moves 1 square forward', () => {
    const board = new Board();
    const mvData = getMoveData('e3', 'w');
    const piece = pawn(board.getSquares(), mvData);

    expect(piece.pieceId).toBe('wpe');
    expect(piece.file).toBe('e');
    expect(piece.rank).toBe(2);
});
test('should find pawn if a white pawn moves 2 square forward', () => {
    const board = new Board();
    const mvData = getMoveData('e3', 'w');
    const piece = pawn(board.getSquares(), mvData);

    expect(piece.pieceId).toBe('wpe');
    expect(piece.file).toBe('e');
    expect(piece.rank).toBe(2);
});
test('should find pawn if a white pawn takes a black pawn towards queenside', () => {
    const board = new Board();
    board.processMove('b4', 'w');
    board.processMove('a5', 'b');

    const mvData = getMoveData('bxa5', 'w');
    const piece = pawn(board.getSquares(), mvData);

    expect(piece.pieceId).toBe('wpe');
    expect(piece.file).toBe('b');
    expect(piece.rank).toBe(4);
});

test('should find pawn if a black pawn moves 1 square forward', () => {
    const board = new Board();
    const mvData = getMoveData('e6', 'b');
    const piece = pawn(board.getSquares(), mvData);

    expect(piece.pieceId).toBe('bpe');
    expect(piece.file).toBe('e');
    expect(piece.rank).toBe(7);
});
test('should find pawn if a black pawn moves 2 square forward', () => {
    const board = new Board();
    const mvData = getMoveData('e5', 'b');
    const piece = pawn(board.getSquares(), mvData);

    expect(piece.pieceId).toBe('bpe');
    expect(piece.file).toBe('e');
    expect(piece.rank).toBe(7);
});