<script setup>
import { marked } from 'marked';
import { ref, watch } from 'vue';

const props = defineProps({
  markdown: {
    type: String,
    required: true
  }
});

const content = ref('');

watch(
  () => props.markdown,
  async () => {
    content.value.innerHTML = marked.parse(props.markdown);
  }
);
</script>

<template>
  <div id="markdown" ref="content"></div>
</template>

<style scoped>
h1 {
  @apply text-4xl font-bold mb-4;
}

p {
  @apply text-base mb-4;
}

h2 {
  @apply text-3xl font-semibold mb-3;
}

code {
  @apply bg-gray-800 text-white p-2 rounded-md;
}

table {
  @apply table-auto w-full border-collapse mb-4;
}

th {
  @apply border px-4 py-2 text-left bg-gray-200;
}

td {
  @apply border px-4 py-2;
}

em {
  @apply italic;
}
</style>
