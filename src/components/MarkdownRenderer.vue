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
