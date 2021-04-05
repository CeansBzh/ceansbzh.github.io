<template>
    <ProjectsModal ref="projectsModal" v-bind:project="currentProject" />
    <div class="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        <div
            v-for="(project, index) in projects"
            :key="project.title"
            :class="[index === 0 ? 'col-span-full' : 'justify-self-center']"
        >
            <ProjectsHighlighted v-if="index === 0" v-bind:project="project" />
            <div class="max-w-xs rounded overflow-hidden shadow-xl dark:shadow-none dark:bg-gray-100" v-else>
                <img
                    class="w-full border-b-2"
                    v-if="project.mainImageUrl"
                    :src="project.mainImageUrl"
                    :alt="project.mainImageAlt"
                />
                <div class="px-6 py-4">
                    <div class="flex justify-between font-bold text-xl mb-2">
                        <div>
                            <p class="inline-block">{{ project.title }}</p>
                            <p class="inline-block ml-1 text-sm font-extralight" v-if="project.completion">
                                - {{ project.completion }}%
                            </p>
                        </div>
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
                    <p class="text-justify text-base">
                        {{ project.shortDesc }}
                    </p>
                    <button
                        class="mt-2 md:mt-5 p-3 px-5 rounded bg-green-700 text-white font-bold text-sm hover:bg-green-900"
                        @click="openModal(project)"
                    >
                        Voir les détails
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectsHighlighted from './ProjectsHighlighted.vue'
import ProjectsModal from './ProjectsModal.vue'

export default {
    components: {
        ProjectsHighlighted,
        ProjectsModal,
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
    methods: {
        openModal(project) {
            this.currentProject = project
            this.$refs.projectsModal.openModal()
        },
    },
    data() {
        return {
            currentProject: null,
            projects: [
                {
                    title: 'Rhiven',
                    shortDesc:
                        "Site internet d'une communauté de jeu vidéo. Destiné à servir de multiples fonctions directement en lien avec le jeu.",
                    desc:
                        "Rhiven est le site d'un serveur de jeu. Le but est de proposer des fonctionnalités en lien direct avec le jeu. Il dispose de services basiques comme un blog, un forum, un système de gestion de compte. Il compte aussi certaines fonctionnalités plus poussées:\n- Une banque, avec gestions de plusieurs comptes bancaires (y compris comptes de groupes), possibilité de virements entre compte et changement de banque pour des avantages commes des taux plus faibles.\n- Un site immobilier avec une carte interactive des biens à vendre.",
                    completion: 90,
                    skills: ['HTML5', 'CSS3', 'Laravel', 'Bootstrap', 'Javascript', 'Github'],
                    mainImageUrl: '/rhiven-main.jpg',
                    mainImageAlt: "Capture d'écran de l'accueil du site Rhiven.fr",
                },
                {
                    title: 'Mon Portfolio',
                    shortDesc:
                        'Le site sur lequel vous vous trouvez actuellement. Sert à compléter mon CV avec des informations supplémentaires.',
                    desc:
                        "Projet réalisé dans le cadre de ma recherche d'alternance. L'objectif est de proposer des informations complémentaires à celles de mon CV tout en démontrant mes compétences.\nCréé en utilisant l'outil de frontend Vite (en association avec le framework Vue). Concernant le style j'ai utilisé le framework TailwindCSS, un framework 'dans le vent' :).",
                    completion: 60,
                    skills: ['HTML5', 'CSS3', 'Vue', 'TailwindCSS', 'npm', 'Github'],
                    gitLink: 'https://github.com/CeansBzh/CeansBzh.github.io',
                    gitName: 'CeansBzh.github.io',
                    mainImageUrl: '/portfolio-main.jpg',
                    mainImageAlt: "Capture d'écran de l'accueil du portfolio de Elouan Briantais",
                },
                {
                    title: 'Estimateur de note du bac',
                    shortDesc:
                        "Mon projet d'ISN pour le bac. L'objectif est de pouvoir calculer sa note approximative du bac avec le contrôle continu.",
                    desc:
                        "Ce petit site comporte un formulaire dans lequel l'utilisateur rentre les informations de sa scolarité au bac, comme sa filière et sa spécialité. Puis il rentre les notes de ses bulletins trimestriel/semestriels, et quand toutes les informations sont renseignées la note approximative est affichées.",
                    completion: 100,
                    skills: ['HTML5', 'CSS3', 'Vue', 'Bootstrap'],
                    mainImageUrl: '/note-bac-main.jpg',
                    mainImageAlt: "Capture d'écran d'une application de calcul de note du bac",
                },
                {
                    title: 'Carte de mes voyages',
                    shortDesc: "Un projet réalisé à l'étranger, lors de mon road-trip au Canada.",
                    desc:
                        "L'un de mes premiers projets web. Le but est d'avoir un souvenir de chacun de mes voyages et une vision globale sur les endroits que j'ai visité. \n J'ai donc créé cette carte du monde basique avec Leaflet, en Javascript donc, qui me permet de mettre des points sur les zones souhaitées.",
                    completion: 100,
                    skills: ['HTML5', 'CSS3', 'Javascript', 'Leaflet'],
                    mainImageUrl: '/carte-lieux-main.jpg',
                    mainImageAlt: "Capture d'écran d'une carte interactive du monde",
                },
            ],
        }
    },
}
</script>

<style>
</style>