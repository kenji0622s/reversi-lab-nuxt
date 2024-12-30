<script setup lang="ts">
defineProps<{
    href: string;
    text: string;
    isActive: boolean;
}>();
</script>

<template>
    <NuxtLink :to="href" :class="isActive ? 'text-neutral-900 border-b-2 border-emerald-500' : 'text-neutral-500 hover:text-neutral-700'" class="pb-1 px-2">{{ text }}</NuxtLink>
</template>