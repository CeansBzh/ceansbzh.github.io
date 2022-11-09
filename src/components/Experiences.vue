<template>
    <div
        class="p-1 flex flex-wrap mt-5 justify-center divide-y divide-green-700 dark:divide-gray-400 mx-auto max-w-6xl">
        <div v-for="experience in experiences" :key="experience.title"
            class="py-4 px-4 grid grid-cols-1 sm:grid-cols-5 gap-4">
            <div class="col-span-2 sm:col-span-1">
                <img class="h-24 rounded mx-auto" v-if="experience.mainImageUrl" :src="experience.mainImageUrl"
                    :alt="experience.mainImageAlt" />
            </div>
            <div class="col-span-2 sm:col-span-4 dark:text-gray-100">
                <h2 class="font-bold">
                    {{ experience.title }}
                </h2>
                <a class="hover:underline" :href="experience.companyUrl" target="_blank" rel="noopener noreferrer">{{
                        experience.company
                }}</a>
                <p class="font-light">{{ experience.start }} - {{ experience.end }}</p>
                <p class="mt-2 text-justify">
                    {{ experience.desc }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import WorkInProgress from './WorkInProgress.vue'

export default {
    components: {
        WorkInProgress,
    },

    data() {
        return {
            experiences: [
                {
                    title: 'Alternant développeur web Full-Stack',
                    company: 'Neovote',
                    companyUrl: 'https://www.neovote.com/',
                    start: 'Septembre 2021',
                    end: 'Août 2022',
                    desc:
                        "J'ai réalisé ma deuxième année d'IUT en alternance au sein de l'entreprise Neovote, entreprise spécialisée dans le vote électronique. J'ai pu participer à la conception et au développement de modules applicatifs notamment dédiés à la gestion de l'entreprise.",
                    mainImageUrl: '/neovote.jpg',
                    mainImageAlt: 'Logo entreprise de vote électronique Neovote',
                },
                {
                    title: 'Chef de projet - Projet Citoyen IUT de Vannes',
                    company: 'APF France Handicap',
                    companyUrl: 'https://apf-francehandicap-56.org/',
                    start: 'Février 2021',
                    end: 'Avril 2021',
                    desc:
                        "Dans le cadre de mes études à l'IUT de Vannes j'ai mené une action pour l'association APF France Handicap. Cette action consistait à établir un état des lieux des besoins et envies des membres concernant des formations informatiques.",
                    mainImageUrl: '/logo_bloc_apf_france_handicap_bichromie.jpg',
                    mainImageAlt: 'Logo association APF France Handicap',
                },
                {
                    title: 'Chef de projet - Création site internet du GEPEN',
                    company: 'GEPEN',
                    companyUrl: 'https://www.larmorbaden.com/tourisme-2/culture-sport-loisir/associations-culturelles',
                    start: 'Septembre 2020',
                    end: 'Décembre 2020',
                    desc:
                        "Projet de développement web de l'IUT de Vannes. Mon groupe a réalisé le site internet de cette association avec l'outil Wordpress.",
                    mainImageUrl: '/Gepen.jpg',
                    mainImageAlt: 'Logo association GEPEN',
                },
                {
                    title: 'Traducteur volontaire pour le jeu Terratech',
                    company: 'Terratech',
                    companyUrl: 'https://www.terratechgame.com/',
                    start: 'Octobre 2017',
                    end: "Aujourd'hui",
                    desc: "J'aide à traduire le jeu de sa version Anglaise vers une version Française.",
                    mainImageUrl: '/TerraTech_Logo_1920x816_ColourOnTransparent.jpg',
                    mainImageAlt: 'Logo jeu Terratech',
                },
            ],
        }
    },
}
</script>

<style>

</style>