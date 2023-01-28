<template>
  <div class="px-5">
    <div class="absolute -left-1.5 h-3 w-3 rounded-full bg-neutral-600"></div>
    <div
      class="mb-1 flex flex-col space-y-1 text-sm font-normal leading-none text-gray-500 md:flex-row md:space-y-0 md:space-x-2"
    >
      <time>
        <slot name="time"></slot>
      </time>
      <span class="hidden md:inline">-</span>
      <span>
        <slot name="place"></slot>
      </span>
    </div>
    <h3 class="font-sans text-lg text-white">
      <slot name="title"></slot>
    </h3>
    <p class="text-sm font-normal text-gray-400">
      <slot name="body"></slot>
    </p>
  </div>
</template>
