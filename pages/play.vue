<script setup lang="ts">
const { blackCells, whiteCells, blackAvailableCells, whiteAvailableCells, turn, selectCell } = useBoardValues();
</script>

<template>
    <div>
        PlayPage: {{ blackCells }}
    </div>
    <div>
        <PlayBoard :blackCells="blackCells" :whiteCells="whiteCells" :blackAvailableCells="blackAvailableCells"
            :whiteAvailableCells="whiteAvailableCells" :turn="turn" :selectCell="selectCell" />
    </div>
</template>
