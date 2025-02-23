<script setup>
const notes = import.meta.glob('../assets/notes/*.md');
const noteNames = Object.keys(notes).map(path => path.slice(16, -3));
</script>

<template>
  <main class="pb-40">
    <section
      class="mx-auto max-w-xl px-5 sm:px-0 sm:py-20 lg:py-24 xl:py-28 2xl:max-w-2xl 2xl:py-52"
    >
      <div class="mx-auto mb-16 max-w-2xl">
        <h1 id="notes" class="mb-8 font-black uppercase text-neutral-400">
          Mes notes
        </h1>
      </div>
      <div v-for="note in noteNames" :key="note" class="mb-8">
        <router-link :to="{ name: 'note', params: { note: note } }">
          <p>{{ note }}</p>
        </router-link>
      </div>
    </section>
  </main>
</template>
