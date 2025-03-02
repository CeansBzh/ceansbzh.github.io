<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#0ea5e9'
  }
});
</script>

<template>
  <li class="active:text-neutral-200">
    <router-link
      :to="{ name: to }"
      class="transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:-z-10 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-out after:content-[''] hover:text-white hover:after:origin-bottom-left hover:after:scale-x-100 sm:hover:translate-y-0"
      :class="`after:bg-[${color}]`"
    >
      {{ label }}
    </router-link>
  </li>
</template>
