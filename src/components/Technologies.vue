<template>
    <div class="px-2 pt-1 flex items-stretch">
        <TechnologyIconBase v-for="tech in techs" :key="tech" :techName="tech">
            <Component :is="tech" class="fill-current text-green-700"></Component>
        </TechnologyIconBase>
    </div>
</template>

<script>
import TechnologyIconBase from './TechnologyIconBase.vue'
import HTML5 from './icons/icon-html5.svg'
import Bootstrap from './icons/icon-bootstrap.svg'
import CSS3 from './icons/icon-css3.svg'
import Javascript from './icons/icon-javascript.svg'
import npm from './icons/icon-npm.svg'
import Vue from './icons/icon-vue.svg'
import PHP from './icons/icon-php.svg'
import Git from './icons/icon-git.svg'
import Github from './icons/icon-github.svg'
import Composer from './icons/icon-composer.svg'
import MySQL from './icons/icon-mysql.svg'
import Laravel from './icons/icon-laravel.svg'
import TailwindCSS from './icons/icon-tailwindcss.svg'

export default {
    name: 'Technologies',
    props: {
        techs: Array,
    },
    components: {
        TechnologyIconBase,
        HTML5,
        Bootstrap,
        CSS3,
        Javascript,
        npm,
        Vue,
        PHP,
        Git,
        Composer,
        MySQL,
        Laravel,
        TailwindCSS,
        Github,
    },
}
</script>

<style>
</style>