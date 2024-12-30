import BoardValuesModel from "@/models/board-values-model";

import putRandam from "@/brains/logics/put-randam";

function askBrain1(boardValuesState: BoardValuesModel): [number, number] {
    const { blackAvailableCells, whiteAvailableCells, turn } = boardValuesState;
    console.log(turn + ": Brain1");
    if (turn === "black") {
        return putRandam(blackAvailableCells);
    } else {
        return putRandam(whiteAvailableCells);
    }
}

export default askBrain1;