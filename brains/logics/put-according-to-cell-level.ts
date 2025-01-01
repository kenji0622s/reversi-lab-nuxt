// セルのレベルに応じて置く

function putAccordingToCellLevel(inputCells: [number, number][]) {
    // point 30
    const level1 = [
        [1, 1],
        [1, 8],
        [8, 1],
        [8, 8],
    ];
    // point 2
    const level2 = [
        [1, 3],
        [1, 6],
        [3, 1],
        [3, 3],
        [3, 6],
        [3, 8],
        [6, 1],
        [6, 3],
        [6, 6],
        [6, 8],
        [8, 3],
        [8, 6],
    ];
    // point 1
    const level3 = [
        [1, 4],
        [1, 5],
        [4, 1],
        [4, 8],
        [5, 1],
        [5, 8],
        [8, 4],
        [8, 5],
    ];
    // point 0
    const level4 = [
        [3, 4],
        [3, 5],
        [4, 3],
        [4, 6],
        [5, 3],
        [5, 6],
        [6, 4],
        [6, 5],
    ];

    // point -3
    const level5 = [
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
        [3, 2],
        [3, 7],
        [4, 2],
        [4, 7],
        [5, 2],
        [5, 7],
        [6, 2],
        [6, 7],
        [7, 3],
        [7, 4],
        [7, 5],
        [7, 6],
    ];

    // point -10
    const level6 = [
        [1, 2],
        [1, 7],
        [2, 1],
        [2, 8],
        [7, 1],
        [7, 8],
        [8, 2],
        [8, 7],
    ];

    // point -20
    const level7 = [
        [2, 2],
        [2, 7],
        [7, 2],
        [7, 7],
    ];

    const levels = [level1, level2, level3, level4, level5, level6, level7];

    for (let i = 0; i < levels.length; i++) {
        const level = levels[i];
        for (let j = 0; j < level.length; j++) {
            const cell = level[j];
            const canCell = inputCells.some(
                (inputCell) =>
                    inputCell[0] === cell[0] && inputCell[1] === cell[1]
            );
            if (canCell) {
                // console.log("level" + (i + 1));
                return cell;
            }
        }
    }
    return null;
}

export default putAccordingToCellLevel;