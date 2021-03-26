<template>
    <transition name="fade">
        <div
            class="z-10 fixed w-full h-full top-0 left-0 flex items-center justify-center dark:text-gray-100"
            :class="[show ? '' : 'pointer-events-none']"
            v-if="show"
            @keydown.esc="closeModal"
            tabindex="0"
        >
            <div class="absolute w-full h-full bg-white dark:bg-gray-800 opacity-95"></div>

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
                    (Esc)
                </div>

                <div class="flex justify-between items-center py-5 px-10">
                    <p class="text-2xl font-bold">{{ project.title }}</p>
                </div>

                <!-- Add margin if you want to see grey behind the modal-->
                <div class="container mx-auto h-auto text-left p-4 bg-gray-700 rounded">
                    <p>test</p>

                    <!--Footer-->
                    <div class="flex justify-end pt-2">
                        <button
                            class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                        >
                            Action
                        </button>
                        <button
                            class="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
                            @click="closeModal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'Modal',
    components: { VueperSlides, VueperSlide },
    props: {
        project: {
            type: Object,
        },
    },
    data() {
        return {
            show: false,
            pauseOnHover: true,
            autoPlaying: true,
            internalAutoPlaying: true,
            slides: [
                {
                    id: 'slide-1',
                    title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
                    content:
                        'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
                },
                // Other slides...
            ],
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