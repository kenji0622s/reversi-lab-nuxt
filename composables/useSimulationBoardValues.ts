import BoardLogic from "~/logics/board/board-logic";
import askBrains from "~/brains/exportAskBrains";

export function useSimulationBoardValues() {
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

  const gameCount = ref<number>(0);
  const firstBrainWinCount = ref<number>(0);
  const secondBrainWinCount = ref<number>(0);
  const drawCount = ref<number>(0);

  function selectCell(cell: [number, number]): void {
    console.log(cell);
  }

  function brainSelectCell(): void {
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

    if (
      newBoardValues.turn === "black" &&
      newBoardValues.blackAvailableCells.length > 0
    ) {
      nextBrainSelectCell();
    }
    if (
      newBoardValues.turn === "white" &&
      newBoardValues.whiteAvailableCells.length > 0
    ) {
      nextBrainSelectCell();
    }

    if (
      newBoardValues.blackAvailableCells.length === 0 &&
      newBoardValues.whiteAvailableCells.length === 0
    ) {
      gameCount.value++;
      if (newBoardValues.blackCells.length > newBoardValues.whiteCells.length) {
        firstBrainWinCount.value++;
      } else if (
        newBoardValues.blackCells.length < newBoardValues.whiteCells.length
      ) {
        secondBrainWinCount.value++;
      } else {
        drawCount.value++;
      }
      if (gameCount.value < 5) {
        resetBoardValues();
      }
    }
  }

  function nextBrainSelectCell(): void {
    setTimeout(() => {
      brainSelectCell();
    }, 50);
  }

  function startSimulation(): void {
    for (let i = 0; i < 5; i++) {
      brainSelectCell();
      resetBoardValues();
    }
  }

  function resetBoardValues(): void {
    blackCells.value = [
      [4, 4],
      [5, 5],
    ];
    whiteCells.value = [
      [4, 5],
      [5, 4],
    ];
    blackAvailableCells.value = [
      [3, 5],
      [4, 6],
      [5, 3],
      [6, 4],
    ];
    whiteAvailableCells.value = [
      [3, 4],
      [4, 3],
      [5, 6],
      [6, 5],
    ];
    turn.value = "black";
    console.log("resetBoardValues");
  }

  return {
    blackCells,
    whiteCells,
    blackAvailableCells,
    whiteAvailableCells,
    turn,
    selectCell,
    startSimulation,
    gameCount,
    firstBrainWinCount,
    secondBrainWinCount,
    drawCount,
  };
}
