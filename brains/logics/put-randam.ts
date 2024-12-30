// ランダムに置く

function putRandam(inputCells: [number, number][]) {
    const randomIndex = Math.floor(Math.random() * inputCells.length);
    return inputCells[randomIndex];
}

export default putRandam;