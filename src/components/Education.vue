<template>
    <div class="w-100">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            <!-- fade in of the timeline bar -->
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-10 w-1 bg-gradient-to-b from-transparent to-green-700 pointer-events-none"></div>
                </div>
            </div>
            <!-- left -->
            <EducationElement
                title="DUT Informatique"
                description="Formation en cours à l'IUT de Vannes."
                establishment="IUT de Vannes"
                website="https://www.iutvannes.fr/"
                adress="8 Rue Michel de Montaigne, 56000 Vannes"
                year="2020 - 2022 (en cours)"
                side
            ></EducationElement>
            <!-- right -->
            <EducationElement
                title="Bac Scientifique"
                description="Option informatique et sciences du numérique. Obtenu mention bien."
                establishment="Lycée René Descartes"
                website="https://www.lycee-descartes.fr/"
                adress="14 Chemin de Ronde CS 20705, 35207 Rennes"
                year="2020"
            ></EducationElement>
            <!-- fade out of the timeline bar -->
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-10 w-1 bg-gradient-to-b from-green-700 to-transarent pointer-events-none"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EducationElement from './EducationElement.vue'
export default {
    components: {
        EducationElement,
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