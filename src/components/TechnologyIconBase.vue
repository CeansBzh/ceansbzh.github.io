<template>
    <div class="rounded bg-gray-800 bg-opacity-70 m-1 grid text-center p-2">
        <div class="size-icon mx-auto">
            <slot />
        </div>
        <p class="mt-1 self-end">{{ techName }}</p>
    </div>
</template>

<script>
export default {
    props: {
        techName: String,
    },
}
</script>

<style scoped>
.size-icon {
    width: 50px;
    height: 50px;
}
</style>