<script setup lang="ts">
const { blackCells, whiteCells, blackAvailableCells, whiteAvailableCells, turn, selectCell } = useChallengeBoardValues();
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <span>
            turn: {{ turn }}
        </span>
        <span>
            黒: {{ blackCells.length }} | 白: {{ whiteCells.length }}
        </span>
    </div>

    <Board :blackCells="blackCells" :whiteCells="whiteCells" :blackAvailableCells="blackAvailableCells"
        :whiteAvailableCells="whiteAvailableCells" :turn="turn" :selectCell="selectCell" />

</template>
