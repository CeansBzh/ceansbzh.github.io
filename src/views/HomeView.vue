<script setup>
import TheProjects from '../components/TheProjects.vue';
import TheSocials from '../components/TheSocials.vue';
</script>

<template>
  <main>
    <div
      class="mx-auto mb-24 mt-12 max-w-xl p-5 sm:my-24 md:p-0 lg:my-40 xl:my-48 2xl:my-56 2xl:max-w-2xl"
    >
      <p class="mb-3 text-2xl text-gray-400">Bonjour 👋</p>
      <p class="text-2xl text-gray-400">Je m'appelle</p>
      <h1 class="mb-3 font-sans text-4xl text-gray-100 xs:text-5xl">
        Elouan Briantais
      </h1>
      <p class="text-2xl text-gray-400">et je suis</p>
      <p class="mb-8 text-2xl text-gray-100 xs:text-3xl">
        Développeur web back-end
      </p>

      <div>
        <TheSocials />
      </div>
    </div>

    <TheProjects />
  </main>
</template>
