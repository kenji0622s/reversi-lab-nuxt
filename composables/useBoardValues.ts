import BoardLogic from "~/logics/board/board-logic";
import { BoardValuesModel } from "~/models/board-values-model";

export function useBoardValues() {
  const blackCells = ref<[number, number][]>([
    [4, 4],
    [5, 5],
  ]);
  const whiteCells = ref<[number, number][]>([
    [4, 5],
    [5, 4],
  ]);
  const blackAvailableCells = ref<[number, number][]>([
    [3, 5],
    [4, 6],
    [5, 3],
    [6, 4],
  ]);
  const whiteAvailableCells = ref<[number, number][]>([
    [3, 4],
    [4, 3],
    [5, 6],
    [6, 5],
  ]);
  const turn = ref<string>("black");

  function updateBoardValues(
    row: number,
    col: number,
  ): void {
    if (turn.value === "black") {
      blackCells.value.push([row, col]);
    } else {
      whiteCells.value.push([row, col]);
    }

    const allDirectionCells = BoardLogic.getAllDirectionCells(row, col);
    for (let i = 0; i < allDirectionCells.length; i++) {
      BoardLogic.singleDirectionReverse(
        allDirectionCells[i] as [number, number][],
        blackCells.value,
        whiteCells.value,
        turn.value
      );
    }
    const usedCells: [number, number][] = [...blackCells.value, ...whiteCells.value];
    const availableCells: [number, number][] =
      BoardLogic.updateAvailableCells(usedCells);
    blackAvailableCells.value =
      BoardLogic.updateBlackAvailableCells(
        availableCells,
        blackCells.value,
        whiteCells.value
      );
    whiteAvailableCells.value =
      BoardLogic.updateWhiteAvailableCells(
        availableCells,
        blackCells.value,
        whiteCells.value
      );
    if (turn.value === "black") {
        if (whiteAvailableCells.value.length > 0) {
        turn.value = "white";
      }
    } else {
      if (blackAvailableCells.value.length > 0) {
        turn.value = "black";
      }
    }
  }
  
  function checkAvailable(
      row: number,
      col: number,
    ): boolean {
        const isBlackAvailable = blackAvailableCells.value
        .map((cell) => cell[0] === row && cell[1] === col)
        .includes(true);
        const isWhiteAvailable = whiteAvailableCells.value
        .map((cell) => cell[0] === row && cell[1] === col)
        .includes(true);
        const isAvailable =
        (turn.value === "black" && isBlackAvailable) ||
        (turn.value === "white" && isWhiteAvailable);
        return isAvailable;
    }
    
    const selectCell = (cell: [number, number]) => {
      if (checkAvailable(cell[0], cell[1])) {
        updateBoardValues(cell[0], cell[1]);
      }
    };

  return {
    blackCells,
    whiteCells,
    blackAvailableCells,
    whiteAvailableCells,
    turn,
    selectCell,
  };
}
