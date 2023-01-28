<template>
  <div class="flex items-center justify-end p-3 sm:px-20 sm:py-8">
    <nav class="w-full sm:w-fit">
      <ul class="flex justify-evenly text-neutral-300 sm:space-x-10">
        <li class="active:text-neutral-200">
          <router-link
            :to="{ name: 'home' }"
            class="after:absolute after:-bottom-1 after:left-0 after:-z-10 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#0ea5e9] after:transition-transform after:duration-500 after:ease-out after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100 sm:hover:translate-y-0"
            >Accueil</router-link
          >
        </li>
        <li class="active:text-neutral-200">
          <router-link
            :to="{ name: 'about' }"
            class="after:absolute after:-bottom-1 after:left-0 after:-z-10 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#e89a69] after:transition-transform after:duration-500 after:ease-out after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100 sm:hover:translate-y-0"
            >À propos de moi</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
