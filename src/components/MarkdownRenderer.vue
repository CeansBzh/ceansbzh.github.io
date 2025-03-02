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

// Define a custom renderer for links
const renderer = new marked.Renderer();
renderer.link = tokens => {
  return `<a href="${tokens.href}" title="${tokens.title || ''}" target="_blank" rel="noopener">${tokens.text}</a>`;
};

watch(
  () => props.markdown,
  async () => {
    content.value.innerHTML = marked.parse(props.markdown, { renderer });
  }
);
</script>

<template>
  <div id="markdown" ref="content"></div>
</template>
