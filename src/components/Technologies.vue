<template>
    <div class="max-w-xs">
        <TechnologyIconBase><HTML5 /></TechnologyIconBase>
    </div>
</template>

<script>
import TechnologyIconBase from './TechnologyIconBase.vue'
import HTML5 from './icons/icon-html5.svg'

export default {
    name: 'Technologies',
    components: {
        TechnologyIconBase,
        HTML5,
    },
    projects: [
        {
            title: 'HTML5',
        },
        {
            title: 'CSS3',
        },
        {
            title: 'Javascript',
        },
        {
            title: 'npm',
        },
        {
            title: 'Vue.js',
        },
        {
            title: 'Vite',
        },
        {
            title: 'PHP',
        },
        {
            title: 'Git',
        },
        {
            title: 'Composer',
        },
        {
            title: 'MySQL',
        },
        {
            title: 'Laravel',
        },
        {
            title: 'Tailwind CSS',
        },
        {
            title: 'Bootstrap',
        },
    ],
}
</script>

<style>
</style>