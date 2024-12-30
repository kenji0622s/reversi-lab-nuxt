import BoardLogic from "~/logics/board/board-logic";

export function usePlayBoardValues() {
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

  const selectCell = (cell: [number, number]) => {
    const isAvailable: boolean = BoardLogic.checkAvailable(
      cell[0],
      cell[1],
      blackAvailableCells.value,
      whiteAvailableCells.value,
      turn.value
    );
    if (isAvailable) {
      const newBoardValues = BoardLogic.updateBoardValues(
        cell[0],
        cell[1],
        blackCells.value,
        whiteCells.value,
        turn.value
      );
      blackCells.value = newBoardValues.blackCells;
      whiteCells.value = newBoardValues.whiteCells;
      blackAvailableCells.value = newBoardValues.blackAvailableCells;
      whiteAvailableCells.value = newBoardValues.whiteAvailableCells;
      turn.value = newBoardValues.turn;
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
