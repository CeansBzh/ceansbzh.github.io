<template>
    <!-- Pinned to top right corner-->
    <div class="text-3xl fixed top-0 right-0 h-12 w-18 p-4">
        <button class="p-1 js-change-theme rounded ring-offset-2 ring-offset-green-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent" @click="toggleDarkMode()">
            {{ logo }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            darkModeEnabled: true,
            logo: this.logo,
        }
    },
    mounted() {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            this.logo = '🌙'
        } else {
            this.logo = '☀️'
        }
    },
    methods: {
        toggleDarkMode() {
            if (this.darkModeEnabled) {
                document.documentElement.classList.remove('dark')
                this.darkModeEnabled = !this.darkModeEnabled
                this.logo = '☀️'
            } else {
                document.documentElement.classList.add('dark')
                this.darkModeEnabled = !this.darkModeEnabled
                this.logo = '🌙'
            }
        },
    },
}
</script>

<style>
</style>