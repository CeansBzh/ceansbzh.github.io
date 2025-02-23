<script setup>
import { onMounted, ref } from 'vue';

import MarkdownRenderer from '../components/MarkdownRenderer.vue';

const props = defineProps({
  note: {
    type: String,
    required: true
  }
});

const markdown = ref('');

onMounted(async () => {
  markdown.value = (await import(`../assets/notes/${props.note}?raw`)).default;
});
</script>

<template>
  <main class="pb-40">
    <section
      class="mx-auto max-w-2xl px-5 sm:px-0 sm:py-20 lg:py-24 xl:py-28 2xl:max-w-2xl 2xl:py-44"
    >
      <div>
        <div class="mx-auto mb-4 max-w-2xl">
          <router-link
            :to="{ name: 'notes' }"
            class="flex items-center text-neutral-300 hover:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2 size-6"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
            Retour
          </router-link>
        </div>
      </div>

      <div class="mx-auto mb-8 max-w-2xl">
        <h1 class="mb-8 font-black uppercase text-neutral-400">
          {{ note }}
        </h1>
      </div>

      <MarkdownRenderer :markdown="markdown" />
    </section>
  </main>
</template>
