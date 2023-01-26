<script setup>
import { ref } from "vue";
import TheProjects from "../components/TheProjects.vue";

let isticHover = ref(false);
</script>

<template>
  <main>
    <div
      class="relative mx-auto mt-12 mb-24 max-w-xl p-5 sm:my-24 md:p-0 lg:my-40 xl:my-48 2xl:my-56 2xl:max-w-2xl"
    >
      <p class="mb-3 text-2xl text-gray-400">Bonjour 👋</p>
      <p class="text-2xl text-gray-400">Je m'appelle</p>
      <h1 class="mb-3 text-4xl text-gray-100 xs:text-5xl">Elouan Briantais</h1>
      <p class="text-2xl text-gray-400">et je suis</p>
      <p class="text-2xl text-gray-100 xs:text-3xl">
        Étudiant en informatique à
        <span
          v-on:mouseover="isticHover = true"
          v-on:mouseleave="isticHover = false"
          >l'ISTIC</span
        >
      </p>

      <div
        class="absolute inset-0 -z-10 translate-x-1/2 -translate-y-1/3 skew-y-6 bg-red-200/50 transition duration-500 ease-out"
        :class="[isticHover ? 'opacity-1' : 'opacity-0']"
      ></div>
    </div>

    <TheProjects />
  </main>
</template>

<script></script>
