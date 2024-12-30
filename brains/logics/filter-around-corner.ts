// 角の周りと角の周り以外に分ける
function filterAroundCorner(inputCells: [number, number][]) {
    const availableAroundCornerCells = [];
    const availableNotAroundCornerCells = [];

    const aroundCornerCells = [
        [1, 2],
        [1, 7],
        [2, 1],
        [2, 2],
        [2, 7],
        [2, 8],
        [7, 1],
        [7, 2],
        [7, 7],
        [7, 8],
        [8, 2],
        [8, 7],
    ];

    for (let i = 0; i < inputCells.length; i++) {
        const cell = inputCells[i];
        const isAroundCorner = aroundCornerCells.some(
            (aroundCornerCell) =>
                aroundCornerCell[0] === cell[0] && aroundCornerCell[1] === cell[1]
        );
        if (isAroundCorner) {
            availableAroundCornerCells.push(cell);
        } else {
            availableNotAroundCornerCells.push(cell);
        }
    }

    return {
        availableAroundCornerCells,
        availableNotAroundCornerCells,
    };
}

export default filterAroundCorner;