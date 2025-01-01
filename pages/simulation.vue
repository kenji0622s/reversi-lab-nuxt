<script setup lang="ts">
const { blackCells, whiteCells, blackAvailableCells, whiteAvailableCells, turn, selectCell, startSimulation, gameCount, firstBrainWinCount, secondBrainWinCount, drawCount, firstBrain, secondBrain, selectFirstBrain, selectSecondBrain, isReady } =
    useSimulationBoardValues();

const brains = ["brain1", "brain2", "brain3", "brain4", "brain5", "brain6"];
</script>

<template>
    <div class="relative">

        <div class="flex flex-col items-center justify-center">
            <span>
                ゲーム数: {{ gameCount }}
            </span>
            <span>
                {{ firstBrain }}: {{ firstBrainWinCount }} | {{ secondBrain }}: {{ secondBrainWinCount }} | 引き分け: {{ drawCount }}
            </span>
        </div>
        <Board :blackCells="blackCells" :whiteCells="whiteCells" :blackAvailableCells="blackAvailableCells"
            :whiteAvailableCells="whiteAvailableCells" :turn="turn" :selectCell="selectCell" />
        <!-- <table>
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
        </table> -->
        <div v-if="!isReady" class="absolute top-0 left-0 bg-black/50 w-full h-full flex justify-center items-center">
            <div class="w-96 bg-white flex flex-col items-center justify-center gap-8 py-8">
                <select name="" id="" @change="selectFirstBrain($event)">
                    <option v-for="brain in brains" :value="brain" :key="brain">{{ brain }}</option>
                </select>
                <select name="" id="" @change="selectSecondBrain($event)">
                    <option v-for="brain in brains" :value="brain" :key="brain">{{ brain }}</option>
                </select>
                <button @click="startSimulation" class="bg-blue-500 text-white px-4 py-2 rounded-md">
                    startSimulation
                </button>
            </div>
        </div>
    </div>
</template>
