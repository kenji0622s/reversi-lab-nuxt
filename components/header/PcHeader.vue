<script setup lang="ts">
const route = useRoute();
const path = route.path;
console.log(path);
const isActive = (path: string) => {
    return path === route.path;
}
</script>

<template>
    <div class="bg-gray-100 py-4">
        <div class="w-4/5 mx-auto flex justify-between items-center">
            <NuxtLink to="/" class="flex items-center gap-4">
                <img src="~assets/images/icon.png" alt="logo" class="w-10 h-10">
                <h1 class="text-2xl font-bold">Brain Lab</h1>
            </NuxtLink>
            <nav class="flex gap-12">
                <PcHeaderLink href="/play" text="Play" :isActive="isActive('/play')" />
                <PcHeaderLink href="/challenge" text="Challenge" :isActive="isActive('/challenge')" />
                <PcHeaderLink href="/simulation" text="Simulation" :isActive="isActive('/simulation')" />
            </nav>
        </div>
    </div>
</template>