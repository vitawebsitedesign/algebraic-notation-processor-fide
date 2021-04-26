export default (squares, mvData) => {
    const dir = mvData.col === 'w' ? -1 : 1;
    const peekSquares = [
        {
            file: mvData.file,
            rank: mvData.rank + (1 * dir)
        },
        {
            file: mvData.file,
            rank: mvData.rank + (2 * dir)
        }
    ];

    for (let peekSquare of peekSquares) {
        const id = squares[peekSquare.file][peekSquare.rank];
        if (id)
            return {
                pieceId: id,
                file: peekSquare.file,
                rank: peekSquare.rank
            };
    }

    return null;
};
