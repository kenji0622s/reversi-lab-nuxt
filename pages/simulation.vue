<script setup lang="ts">
const { blackCells, whiteCells, blackAvailableCells, whiteAvailableCells, turn, selectCell, startSimulation, gameCount, firstBrainWinCount, secondBrainWinCount, drawCount } =
    useSimulationBoardValues();
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <button @click="startSimulation" class="bg-blue-500 text-white px-4 py-2 rounded-md">
            startSimulation
        </button>
        <span>
            黒: {{ blackCells.length }} | 白: {{ whiteCells.length }}
        </span>
        <span>
            ゲーム数: {{ gameCount }}
        </span>
        <span>
            黒勝利: {{ firstBrainWinCount }} | 白勝利: {{ secondBrainWinCount }} | 引き分け: {{ drawCount }}
        </span>
    </div>
    <Board :blackCells="blackCells" :whiteCells="whiteCells" :blackAvailableCells="blackAvailableCells"
        :whiteAvailableCells="whiteAvailableCells" :turn="turn" :selectCell="selectCell" />

    <table>
        <tbody>
            <tr>
                <th>blackCells({{ blackCells.length }})</th>
                <td>{{ blackCells }}</td>
            </tr>
            <tr>
                <th>whiteCells({{ whiteCells.length }})</th>
                <td>{{ whiteCells }}</td>
            </tr>
            <tr>
                <th>blackAvailableCells({{ blackAvailableCells.length }})</th>
                <td>{{ blackAvailableCells }}</td>
            </tr>
            <tr>
                <th>whiteAvailableCells({{ whiteAvailableCells.length }})</th>
                <td>{{ whiteAvailableCells }}</td>
            </tr>
        </tbody>
    </table>
</template>
