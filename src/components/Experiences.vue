<template>
    <WorkInProgress></WorkInProgress>
</template>

<script>
import WorkInProgress from './WorkInProgress.vue'

export default {
    components: {
        WorkInProgress,
    },
    mounted: function () {
        const id = 'section-nav'
        const yOffset = -20
        const element = document.getElementById(id)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

        window.scrollTo({ top: y, behavior: 'smooth' })
    },
}
</script>

<style>
</style>