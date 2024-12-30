// 角の周りの隣における場合は、角の周りの隣に置く

function putAroundCornerNext(inputCells: [number, number][]) {
    const aroundCornerNextCells = [
        [1, 3],
        [1, 6],
        [2, 3],
        [2, 6],
        [3, 1],
        [3, 2],
        [3, 3],
        [3, 6],
        [3, 7],
        [3, 8],
        [6, 1],
        [6, 2],
        [6, 3],
        [6, 6],
        [6, 7],
        [6, 8],
        [7, 3],
        [7, 6],
        [8, 3],
        [8, 6],
    ];

    for (let i = 0; i < inputCells.length; i++) {
        const cell = inputCells[i];
        const isAroundCornerNext = aroundCornerNextCells.some(
            (aroundCornerNextCell) =>
                aroundCornerNextCell[0] === cell[0] && aroundCornerNextCell[1] === cell[1]
        );
        if (isAroundCornerNext) {
            return cell;
        }
    }
    return null;
}

export default putAroundCornerNext;
