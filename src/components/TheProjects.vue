<script setup>
import ProjectItem from "./ProjectItem.vue";
</script>

<template>
  <section class="mb-52">
    <div class="p-5">
      <div class="mx-auto max-w-2xl">
        <h1 class="mb-8 font-bold uppercase text-neutral-300">Projets</h1>
      </div>

      <ul
        class="mx-auto max-w-6xl [&>li:not(:last-child)]:mb-16 [&>li:nth-child(even)_article]:sm:flex-row-reverse [&>li:nth-child(even)_article]:sm:space-x-reverse [&>li:nth-child(odd)_article]:sm:flex-row [&>li:nth-child(odd)_article>h2]:sm:translate-x-20 [&>li:nth-child(even)_article>h2]:sm:-translate-x-20 [&>li:nth-child(even)_article:hover>h2]:sm:translate-x-0 [&>li:nth-child(odd)_article:hover>h2]:sm:translate-x-0 [&>li_article]:sm:space-x-5"
      >
        <li>
          <ProjectItem route="https://akipaj.fr" color="after:bg-[#0ea5e9]">
            <template #name>Akipaj</template>
            <template #image>
              <img
                alt="Image du projet Akipaj"
                src="@/assets/projects/akipaj.jpg"
                width="448"
                height="398"
                class="w-full max-w-xs select-none rounded-2xl sm:w-56 md:w-auto md:max-w-xs lg:max-w-sm xl:max-w-md"
              />
            </template>
          </ProjectItem>
        </li>
        <li>
          <ProjectItem color="after:bg-[#e89a69]">
            <template #name>Rhiven</template>
            <template #image>
              <img
                alt="Image du projet Rhiven"
                src="@/assets/projects/rhiven.jpg"
                width="448"
                height="398"
                class="w-full max-w-xs select-none rounded-2xl sm:w-56 md:w-auto md:max-w-xs lg:max-w-sm xl:max-w-md"
              />
            </template>
          </ProjectItem>
        </li>
      </ul>
    </div>
  </section>
</template>
