import BoardValuesModel from '@/models/board-values-model';

import putRandam from '@/brains/logics/put-randam';
import putAccordingToCellLevel from '@/brains/logics/put-according-to-cell-level';

function askBrain6(boardValuesState: BoardValuesModel): [number, number] {
    const { blackAvailableCells, whiteAvailableCells, turn } = boardValuesState;
    console.log(turn + ": Brain6");
    if (turn === "black") {
        return _strategy(blackAvailableCells) as [number, number];
    } else {
        return _strategy(whiteAvailableCells) as [number, number];
    }
}

function _strategy(colorAvailableCells: [number, number][]) {

    const cell = putAccordingToCellLevel(colorAvailableCells);
    if (cell) {
        return cell;
    }

    return putRandam(colorAvailableCells);
}

export default askBrain6;
