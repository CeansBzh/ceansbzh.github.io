<template>
    <div class="rounded-lg bg-white bg-opacity-75 shadow-lg dark:bg-gray-200 m-5 p-1 flex justify-center">
        <router-link
            class="flex flex-1 items-center justify-center p-2 text-green-700 hover:text-green-600 font-semibold"
            :to="{ name: 'formation' }"
        >
            <div class="text-center">
                <svg
                    class="mx-auto h-10 w-10 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path fill="none" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        fill="none"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>
                <span class="block text-xs leading-none">Formation</span>
            </div>
        </router-link>
        <router-link
            class="flex flex-1 items-center justify-center p-2 text-green-700 hover:text-green-600 font-semibold"
            :to="{ name: 'projets' }"
        >
            <div class="text-center">
                <svg
                    class="mx-auto h-10 w-10 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
                <span class="block text-xs leading-none">Projets</span>
            </div>
        </router-link>
        <router-link
            class="flex flex-1 items-center justify-center p-2 text-green-700 hover:text-green-600 font-semibold"
            :to="{ name: 'projets' }"
        >
            <div class="text-center">
                <svg
                    class="mx-auto h-10 w-10 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
                <span class="block text-xs leading-none">Expériences pro</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {}
</script>

<style>
</style>