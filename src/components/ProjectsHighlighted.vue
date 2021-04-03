<template>
    <section class="container mx-auto p-10 md:py-20 px-2 md:p-10 md:px-0">
        <section
            class="relative md:p-0 transform duration-500 hover:shadow-2xl dark:hover:shadow-none cursor-pointer hover:-translate-y-1"
        >
            <img class="xl:max-w-6xl" :src="project.mainImageUrl" :alt="project.mainImageAlt" />
            <div
                class="content bg-white dark:bg-opacity-95 shadow-xl dark:shadow-none p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5"
            >
                <div class="flex justify-between font-bold text-sm">
                    <p>Mis en avant</p>
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
                <h2 class="text-3xl font-semibold mt-4 md:mt-10">{{ project.title }}</h2>
                <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">
                    {{ project.shortDesc }}
                </p>
                <button
                    class="mt-2 md:mt-5 p-3 px-5 rounded bg-green-700 text-white font-bold text-sm hover:bg-green-900"
                    @click="this.$parent.openModal(project)"
                >
                    Voir les détails
                </button>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
        },
    },
}
</script>

<style>
</style>