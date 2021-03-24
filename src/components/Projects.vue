<template>
    <div class="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
            v-for="(project, index) in projects"
            :key="project.title"
            :class="[index === 0 ? 'col-span-full' : 'justify-self-center']"
        >
            <MainProject v-if="index === 0" v-bind:project="project" />
            <div class="max-w-xs rounded overflow-hidden shadow-xl dark:shadow-none dark:bg-gray-100" v-else>
                <img
                    class="w-full border-b-2"
                    v-if="project.mainImageUrl"
                    :src="project.mainImageUrl"
                    :alt="project.mainImageAlt"
                />
                <div class="px-6 py-4">
                    <div class="flex justify-between font-bold text-xl mb-2">
                        <p>{{ project.title }}</p>
                        <a
                            v-if="project.gitLink"
                            :href="project.gitLink"
                            target="_blank"
                            v-tippy="{ content: project.gitName }"
                            ><svg
                                class="h-6 fill-current text-gray-600 hover:text-green-700"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>GitHub</title>
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                /></svg
                        ></a>
                    </div>
                    <p class="text-grey-darker text-base">
                        {{ project.shortDesc }}
                    </p>
                    <button
                        class="mt-2 md:mt-5 p-3 px-5 rounded bg-green-700 text-white font-bold text-sm hover:bg-green-900"
                    >
                        Voir les détails
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainProject from './MainProject.vue'

export default {
    components: {
        MainProject,
    },
    mounted: function () {
        this.$nextTick(function () {
            const id = 'section-nav'
            const yOffset = -20
            const element = document.getElementById(id)
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

            window.scrollTo({ top: y, behavior: 'smooth' })
        })
    },
    data() {
        return {
            projects: [
                {
                    title: 'Rhiven',
                    shortDesc:
                        "Site internet d'une communauté de jeu vidéo. Destiné à servir de multiples fonctions directement en lien avec le jeu.",
                    desc:
                        "Rhiven est un projet initié par un groupe d'amis qui hébergent un serveur de jeu (Unturned). Nous souhaitions proposer la meilleure qualité de jeu grâce à des fonctionnalités innovantes. C'est dans le cadre de ces fonctionnalités qu'est né le site internet de Rhiven.",
                    completion: 90,
                    skills: ['Laravel', 'Bootstrap'],
                    mainImageUrl: '/src/assets/rhiven-main.jpg',
                    mainImageAlt: "Capture d'écran de l'accueil du site Rhiven.fr",
                },
                {
                    title: 'Mon Portfolio',
                    shortDesc:
                        'Le site sur lequel vous vous trouvez actuellement. Sert à compléter mon CV avec des informations supplémentaires.',
                    desc:
                        "J'ai voulu créer un portfolio dans le cadre de ma recherche d'alternance. C'est à mon avis un bon moyen de montrer ses compétences, et également le fait que l'on soit motivé à faire ce travail. J'ai voulu réaliser ce portfolio avec Vue.js car c'est un framework qui me tiens à coeur. Je l'avais vaguement exploré lors de mon projet de bac d'ISN en terminale, et depuis je ne l'avais pas réutilisé.",
                    completion: 60,
                    skills: ['Vue.js', 'Tailwind'],
                    gitLink: 'https://github.com/CeansBzh/CeansBzh.github.io',
                    gitName: 'CeansBzh.github.io',
                    mainImageUrl: '/src/assets/portfolio-main.jpg',
                    mainImageAlt: "Capture d'écran de l'accueil du portfolio de Elouan Briantais",
                },
                {
                    title: 'Estimateur de note du bac',
                    mainImageUrl: '/src/assets/note-bac-main.jpg',
                    mainImageAlt: "Capture d'écran d'une application de calcul de note du bac",
                },
            ],
        }
    },
}
</script>

<style>
</style>