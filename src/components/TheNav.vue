<script setup>
import NavLink from './NavLink.vue';
</script>

<template>
  <div class="flex items-center justify-end px-2 py-8 sm:px-20 sm:py-8">
    <nav class="w-full sm:w-fit">
      <ul class="flex justify-evenly text-neutral-300 sm:space-x-10">
        <NavLink to="home" label="Accueil" />
        <NavLink to="about" label="À propos de moi" color="#e89a69" />
        <NavLink to="notes" label="Notes" color="#3a6a2c" />
      </ul>
    </nav>
  </div>
</template>
