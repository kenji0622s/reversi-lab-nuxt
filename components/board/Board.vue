<script setup lang="ts">
const props = defineProps<{
    blackCells: [number, number][];
    whiteCells: [number, number][];
    blackAvailableCells: [number, number][];
    whiteAvailableCells: [number, number][];
    turn: string;
    selectCell: (cell: [number, number]) => void;
}>();

function getCellStatus(rowIndex: number, colIndex: number): string {
    if (
        props.blackCells
            .map((cell) => cell[0] === rowIndex && cell[1] === colIndex)
            .includes(true)
    ) {
        return "bg-black h-[80%] w-[80%] rounded-full";
    }
    if (
        props.whiteCells
            .map((cell) => cell[0] === rowIndex && cell[1] === colIndex)
            .includes(true)
    ) {
        return "bg-white h-[80%] w-[80%] rounded-full";
    }
    if (props.turn === "black") {
        if (
            props.blackAvailableCells
                .map((cell) => cell[0] === rowIndex && cell[1] === colIndex)
                .includes(true)
        ) {
            return "bg-yellow-300/50 h-[80%] w-[80%] rounded-sm";
        }
    }
    if (props.turn === "white") {
        if (
            props.whiteAvailableCells
                .map((cell) => cell[0] === rowIndex && cell[1] === colIndex)
                .includes(true)
        ) {
            return "bg-yellow-300/50 h-[80%] w-[80%] rounded-sm";
        }
    }
    return "";
}
</script>

<template>
    <div class="flex items-center justify-center">
        <table>
            <tbody>
                <tr v-for="row in 8" :key="row">
                    <td v-for="col in 8" :key="col" class="border-2 border-neutral-500 bg-[#0BA875] w-20 h-20  ">
                        <div class="flex justify-center items-center w-full h-full" @click="selectCell([row, col])">
                            <span :class="getCellStatus(row, col)" class="text-xs text-yellow-500">
                                {{ row }} - {{ col }}
                            </span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>