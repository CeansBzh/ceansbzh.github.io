<template>
    <transition name="fade">
        <div
            class="z-20 fixed w-full h-full top-0 left-0 flex items-center justify-center dark:text-gray-100"
            :class="[show ? '' : 'pointer-events-none']"
            v-if="show"
            @keydown.esc="closeModal"
            tabindex="0"
        >
            <div class="absolute w-full h-full bg-gray-300 dark:bg-gray-800 opacity-95"></div>

            <div class="fixed w-full h-full z-50 overflow-y-auto">
                <div
                    class="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black dark:text-gray-100 text-sm z-50"
                    @click="closeModal"
                >
                    <svg
                        class="fill-current text-black dark:text-gray-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                    >
                        <path
                            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        ></path>
                    </svg>
                    <p class="hidden md:block">(Esc)</p>
                </div>

                <div class="flex justify-between items-center py-5 px-10">
                    <p class="text-2xl font-bold">{{ project.title }}</p>
                </div>

                <!-- Add margin if you want to see grey behind the modal-->
                <div class="container mx-auto h-auto text-left p-4 bg-gray-200 dark:bg-gray-700 rounded">
                    <img class="mx-auto mb-3 xl:max-w-6xl" :src="project.mainImageUrl" :alt="project.mainImageAlt" />

                    <div class="lg:px-10">
                        <div v-if="project.desc">
                            <h3 class="text-lg border-b border-gray-500 dark:border-white mt-4 mb-2">
                                Description du projet
                            </h3>
                            <div class="text-sm lg:text-base text-justify px-3">
                                <p class="mt-1" v-for="desc in project.desc.split('\n')" :key="desc">
                                    {{ desc }}
                                </p>
                            </div>
                        </div>
                        <div v-if="project.skills">
                            <h3 class="text-lg border-b border-gray-500 dark:border-white mt-4 mb-2">
                                Technologies utilisées
                            </h3>
                            <Technologies :techs="project.skills"></Technologies>
                        </div>
                    </div>

                    <!--Footer-->
                    <div class="flex justify-end space-x-2.5 pt-2">
                        <a
                            class="mt-2 md:mt-5 p-3 px-5 rounded border-4 border-green-800 dark:border-green-700 bg-green-700 dark:bg-transparent text-white font-bold text-sm hover:bg-green-900 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                            v-if="project.gitLink"
                            :href="project.gitLink"
                            target="_blank"
                            v-tippy="{ content: project.gitName }"
                            >Voir sur Github</a
                        >
                        <button
                            class="mt-2 md:mt-5 p-3 px-5 rounded bg-green-700 text-white font-bold text-sm hover:bg-green-900 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                            @click="closeModal"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Technologies from './Technologies.vue'

export default {
    name: 'Modal',
    components: {
        Technologies,
    },
    props: {
        project: {
            type: Object,
        },
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        closeModal() {
            this.show = false
            document.querySelector('body').classList.remove('overflow-hidden')
        },
        openModal() {
            this.show = true
            document.querySelector('body').classList.add('overflow-hidden')
            this.$nextTick(() => {
                this.$el.focus()
            })
        },
    },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>