<script setup>
import ProjectItem from "./ProjectItem.vue";
</script>

<template>
  <section class="mb-52">
    <div class="p-5">
      <div class="mx-auto max-w-2xl">
        <h1 class="mb-8 font-bold uppercase text-neutral-300">Projets</h1>
      </div>

      <ul class="mx-auto max-w-6xl">
        <li>
          <ProjectItem route="https://akipaj.fr" color="after:bg-[#0ea5e9]">
            <template #name>Akipaj</template>
            <template #image>
              <img
                alt="Image du projet Akipaj"
                src="@/assets/projects/akipaj.jpg"
                width="560"
                height="498"
                class="w-full max-w-xs select-none rounded-2xl sm:w-56 md:w-auto md:max-w-xs lg:max-w-sm xl:max-w-md"
              />
            </template>
          </ProjectItem>
        </li>
      </ul>
    </div>
  </section>
</template>
