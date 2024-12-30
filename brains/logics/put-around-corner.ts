// 真ん中の周りに置ける場合は真ん中の周りに置く

function putAroundCenter(inputCells: [number, number][]) {
    const aroundCenterCells = [
        [3, 3],
        [3, 4],
        [3, 5],
        [3, 6],
        [4, 3],
        [4, 6],
        [5, 3],
        [5, 6],
        [6, 3],
        [6, 4],
        [6, 5],
        [6, 6],
    ];

    for (let i = 0; i < inputCells.length; i++) {
        const cell = inputCells[i];
        const isAroundCenter = aroundCenterCells.some(
            (aroundCenterCell) =>
                aroundCenterCell[0] === cell[0] && aroundCenterCell[1] === cell[1]
        );
        if (isAroundCenter) {
            return cell;
        }
    }
    return null;
}

export default putAroundCenter;
