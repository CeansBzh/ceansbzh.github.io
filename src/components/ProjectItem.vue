<script setup>
import AppLink from './AppLink.vue';

defineProps({
  route: {
    type: String,
    default: '#'
  },
  color: {
    type: String,
    default: 'text-neutral-300'
  }
});
</script>

<template>
  <article
    class="group mx-auto flex w-fit flex-col items-center justify-center rounded-2xl sm:grayscale sm:transition sm:duration-500 sm:hover:grayscale-0"
  >
    <h2
      class="-mb-4 mr-auto transition duration-500 after:absolute after:-bottom-2 after:left-0 after:-z-10 after:h-2 after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-out after:content-[''] group-hover:-translate-y-7 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 sm:after:-bottom-4 sm:after:h-3 sm:group-hover:translate-y-0"
      :class="color"
    >
      <AppLink
        :to="route"
        class="text-right text-[5rem] font-bold text-[#808080] transition duration-500 group-hover:text-neutral-100 sm:text-[6rem] xl:text-[10rem]"
        aria-label="Voir le projet"
      >
        <slot name="name"></slot>
      </AppLink>
    </h2>
    <AppLink :to="route" aria-label="Voir le projet">
      <slot name="image"></slot>
    </AppLink>
  </article>
</template>
