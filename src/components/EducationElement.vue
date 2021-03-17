<template>
    <div class="flex md:contents" :class="{ 'flex-row-reverse': side }">
        <div v-if="!side" class="transform -rotate-90 mb:rotate-0 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto flex items-end">
            <h4 class="text-lg text-gray-900 dark:text-gray-200">{{ year }}</h4>
        </div>
        <div v-else class="bg-green-700 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 class="font-bold text-xl mb-1">{{ title }}</h3>
            <p class="leading-tight text-justify mb-4">
                {{ description }}
            </p>
            <a class="leading-none font-semibold" :href="website" target="_blank" rel="noopener noreferrer">{{
                establishment
            }}</a>
            <p class="leading-none">
                {{ adress }}
            </p>
        </div>
        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-green-700 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow"></div>
        </div>
        <div v-if="!side" class="bg-green-700 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 class="font-bold text-xl mb-1">{{ title }}</h3>
            <p class="leading-tight text-justify mb-4">
                {{ description }}
            </p>
            <a class="leading-none font-semibold" :href="website" target="_blank" rel="noopener noreferrer">{{
                establishment
            }}</a>
            <p class="leading-none">
                {{ adress }}
            </p>
        </div>
        <div v-else class="hidden md:flex col-start-6 col-end-10 p-4 rounded-xl -ml-10 items-center">
            <h4 class="text-lg text-gray-900 dark:text-gray-200">{{ year }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        year: String,
        establishment: String,
        website: String,
        adress: String,
        side: Boolean,
    },
}
</script>

<style>
</style>