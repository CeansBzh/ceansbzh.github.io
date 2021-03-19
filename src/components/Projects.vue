<template>
    <h1 class="text-center text-gray-900 dark:text-gray-200">Test projets</h1>
</template>

<script>
export default {
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