import BoardValuesModel from '@/models/board-values-model';

import putRandam from '@/brains/logics/put-randam';
import putCorner from '@/brains/logics/put-corner';

function askBrain2(boardValuesState: BoardValuesModel): [number, number] {
    const { blackAvailableCells, whiteAvailableCells, turn } = boardValuesState;
    console.log(turn + ": Brain2");
    if (turn === "black") {
        return _strategy(blackAvailableCells) as [number, number];
    } else {
        return _strategy(whiteAvailableCells) as [number, number];
    }
}

function _strategy(colorAvailableCells: [number, number][]) {

    const corner = putCorner(colorAvailableCells);
    if (corner) {
        return corner;
    }

    return putRandam(colorAvailableCells);
}

export default askBrain2;