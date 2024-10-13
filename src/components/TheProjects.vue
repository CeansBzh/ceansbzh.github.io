<script setup>
import ProjectItem from './ProjectItem.vue';
</script>

<template>
  <section class="mb-52">
    <div class="p-5">
      <div class="mx-auto mb-16 max-w-2xl">
        <h1 id="projects" class="mb-8 font-bold uppercase text-neutral-300">
          Projets
        </h1>
      </div>

      <ul
        class="mx-auto max-w-6xl [&>li:not(:last-child)]:mb-20 [&>li:nth-child(even)_article:hover>h2]:sm:translate-x-0 [&>li:nth-child(even)_article>h2]:sm:-translate-x-20 [&>li:nth-child(even)_article]:sm:flex-row-reverse [&>li:nth-child(even)_article]:sm:space-x-reverse [&>li:nth-child(odd)_article:hover>h2]:sm:translate-x-0 [&>li:nth-child(odd)_article>h2]:sm:translate-x-20 [&>li:nth-child(odd)_article]:sm:flex-row [&>li_article]:sm:space-x-5"
      >
        <li>
          <ProjectItem route="/projets/kairos" color="after:bg-[#0ea5e9]">
            <template #name>Kairos</template>
            <template #image>
              <img
                alt="Capture d'écran du site Kairos"
                src="@/assets/projects/kairos/project-item.jpg"
                width="448"
                height="398"
                class="w-full max-w-xs select-none rounded-2xl sm:w-56 md:w-auto md:max-w-xs lg:max-w-sm xl:max-w-md"
              />
            </template>
          </ProjectItem>
        </li>
        <li>
          <ProjectItem route="/projets/akipaj" color="after:bg-[#0ea5e9]">
            <template #name>Akipaj</template>
            <template #image>
              <img
                alt="Capture d'écran du site Akipaj"
                src="@/assets/projects/akipaj/project-item.jpg"
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
                alt="Capture d'écran du site Rhiven"
                src="@/assets/projects/rhiven/project-item.jpg"
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
