// 角に置く

function putCorner(inputCells: [number, number][]) {
    const corners = [
        [1, 1],
        [1, 8],
        [8, 1],
        [8, 8],
    ];

    for (let i = 0; i < corners.length; i++) {
        const corner = corners[i];
        const canCorner = inputCells.some(
            (cell) => cell[0] === corner[0] && cell[1] === corner[1]
        );
        if (canCorner) {
            return corner;
        }
    }
    return null;
}

export default putCorner;