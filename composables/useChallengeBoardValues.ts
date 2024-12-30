import BoardLogic from "~/logics/board/board-logic";
import askBrains from "~/brains/exportAskBrains";

export function useChallengeBoardValues() {
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

  function selectCell(cell: [number, number]): void {
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

      if (turn.value === "white") {
        setTimeout(async () => {
          while (turn.value === "white") {
            await brainSelectCell();
          }
        }, 500);
      }
    }
  }

  async function brainSelectCell(): Promise<void> {
    const brainSelectCell = askBrains["brain1"]({
      blackCells: blackCells.value,
      whiteCells: whiteCells.value,
      blackAvailableCells: blackAvailableCells.value,
      whiteAvailableCells: whiteAvailableCells.value,
      turn: turn.value,
    });
    const newBoardValues = BoardLogic.updateBoardValues(
      brainSelectCell[0],
      brainSelectCell[1],
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

  return {
    blackCells,
    whiteCells,
    blackAvailableCells,
    whiteAvailableCells,
    turn,
    selectCell,
  };
}
