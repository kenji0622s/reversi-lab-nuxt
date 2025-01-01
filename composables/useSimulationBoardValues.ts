import BoardLogic from "~/logics/board/board-logic";
import askBrains from "~/brains/exportAskBrains";
export function useSimulationBoardValues() {
  const maxGameCount = 30;
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

  const firstBrain = ref<string>("brain1");
  const secondBrain = ref<string>("brain1");

  let firstBrainTurn = "black";

  const isReady = ref<boolean>(false);

  function selectFirstBrain(event: Event): void {
    const target = event.target as HTMLSelectElement;
    firstBrain.value = target.value;
  }

  function selectSecondBrain(event: Event): void {
    const target = event.target as HTMLSelectElement;
    secondBrain.value = target.value;
  }

  function selectCell(cell: [number, number]): void {
  }

  async function brainSelectCell(brain: string): Promise<void> {
    const brainSelectCell = askBrains[brain]({
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
      newBoardValues.blackAvailableCells.length > 0 ||
      newBoardValues.whiteAvailableCells.length > 0
    ) {
      if (firstBrainTurn === "black") {
        if (newBoardValues.turn === "black") {
          await nextBrainSelectCell(firstBrain.value);
        } else {
          await nextBrainSelectCell(secondBrain.value);
        }
      }
      if (firstBrainTurn === "white") {
        if (newBoardValues.turn === "white") {
          await nextBrainSelectCell(firstBrain.value);
        } else {
          await nextBrainSelectCell(secondBrain.value);
        }
      }
    }

    if (
      newBoardValues.blackAvailableCells.length === 0 &&
      newBoardValues.whiteAvailableCells.length === 0
    ) {
      if (firstBrainTurn === "black") {
        if (
          newBoardValues.blackCells.length > newBoardValues.whiteCells.length
        ) {
          firstBrainWinCount.value++;
        } else if (
          newBoardValues.blackCells.length < newBoardValues.whiteCells.length
        ) {
          secondBrainWinCount.value++;
        } else {
          drawCount.value++;
        }
      }
      if (firstBrainTurn === "white") {
        if (
          newBoardValues.blackCells.length < newBoardValues.whiteCells.length
        ) {
          firstBrainWinCount.value++;
        } else if (
          newBoardValues.blackCells.length > newBoardValues.whiteCells.length
        ) {
          secondBrainWinCount.value++;
        } else {
          drawCount.value++;
        }
      }
    }
  }

  async function nextBrainSelectCell(brain: string): Promise<void> {
    await sleep(10);
    await brainSelectCell(brain);
  }

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function startSimulation(): Promise<void> {
    isReady.value = true;
    for (let i = 0; i < maxGameCount; i++) {
      if (firstBrainTurn === "black") {
        await brainSelectCell(firstBrain.value);
      } else {
        await brainSelectCell(secondBrain.value);
      }
      if (firstBrainTurn === "black") {
        firstBrainTurn = "white";
      } else {
        firstBrainTurn = "black";
      }
      gameCount.value++;
      await sleep(50);
      if (gameCount.value < maxGameCount) {
        resetBoardValues();
      }
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
    firstBrain,
    secondBrain,
    selectFirstBrain,
    selectSecondBrain,
    isReady,
  };
}
