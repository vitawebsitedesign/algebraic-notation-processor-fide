const strat = (state, mvData) => {
    const dir = mvData.col === 'w' ? -1 : 1;
    const squares = [
        {
            file: mvData.file,
            rank: mvData.rank + (1 * dir)
        },
        {
            file: mvData.file,
            rank: mvData.rank + (2 * dir)
        }
    ];

    for (let square of squares) {
        const id = state[square.file][square.rank];
        if (id)
            return {
                pieceId: id,
                file: square.file,
                rank: square.rank
            };
    }

    return null;
};

export default strat;
