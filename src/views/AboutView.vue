<script setup>
import EducationItem from "../components/EducationItem.vue";
</script>

<template>
  <main class="pb-40">
    <section
      class="mx-auto max-w-xl px-5 sm:px-0 sm:py-20 lg:py-24 xl:py-28 2xl:max-w-2xl 2xl:py-52"
    >
      <div class="mx-auto mb-10 max-w-2xl">
        <h1 class="mb-8 font-bold uppercase text-neutral-400">Sommaire</h1>
      </div>

      <nav class="text-lg">
        <ul class="flex flex-col space-y-5 text-neutral-300">
          <li>
            <a
              href="#whoami"
              class="transition-colors duration-300 hover:text-white"
            >
              Qui suis-je
            </a>
          </li>
          <li>
            <a
              href="#education"
              class="transition-colors duration-300 hover:text-white"
            >
              Formation
            </a>
          </li>
          <li>
            <a
              href="#experience"
              class="transition-colors duration-300 hover:text-white"
            >
              Expérience pro
            </a>
          </li>
        </ul>
      </nav>
    </section>

    <section
      id="whoami"
      class="mx-auto max-w-xl px-5 sm:px-0 sm:py-20 lg:py-24 xl:py-28 2xl:max-w-2xl 2xl:py-44"
    >
      <div class="mb-10">
        <h1 class="mb-8 font-bold uppercase text-neutral-400">Qui suis-je</h1>
      </div>

      <div
        class="flex flex-col space-y-3 text-justify text-base leading-loose tracking-wide text-neutral-300"
      >
        <p class="mb-3 text-lg text-neutral-200">
          Je suis Elouan Briantais, étudiant à l'ISTIC à Rennes, et développeur
          web sur mon temps libre.
        </p>
        <p>
          Ma spécialité est le développement back-end, mais comme vous pouvez le
          voir je suis aussi capable de développer des interfaces web.
        </p>
        <p>
          Mes
          <router-link to="/#projects" class="underline">projets</router-link>
          personnels sont ma force. C'est grâce à eux que j'ai choisi ma voie et
          qu'aujourd'hui je me professionnalise dans le développement web.
        </p>
      </div>
    </section>

    <section
      id="education"
      class="mx-auto max-w-xl px-5 sm:px-0 sm:py-20 lg:py-24 xl:py-28 2xl:max-w-2xl 2xl:py-44"
    >
      <div class="mb-10">
        <h1 class="mb-8 font-bold uppercase text-neutral-400">Formation</h1>
      </div>

      <ol>
        <li class="border-l border-neutral-600 pb-10">
          <EducationItem>
            <template #time>2022 - 2023</template>
            <template #place>ISTIC, Université de Rennes</template>
            <template #title>Licence informatique</template>
            <template #body>
              3ème année de licence pour compléter mes 2 années de DUT.
              <ul class="ml-3 mt-2 list-inside list-disc">
                <li>Programmation de confiance</li>
                <li>Algorithmie</li>
                <li>Réseau</li>
                <li>...</li>
              </ul>
            </template>
          </EducationItem>
        </li>
        <li class="border-l border-neutral-600 pb-3">
          <EducationItem>
            <template #time>2020 - 2022</template>
            <template #place>
              IUT de Vannes, Université de Bretagne Sud
            </template>
            <template #title>DUT informatique</template>
            <template #body>
              Début des études supérieures en informatique.
              <ul class="ml-3 mt-2 list-inside list-disc">
                <li>Théorie des langages</li>
                <li>Bases de donnée</li>
                <li>Maths discrètes</li>
                <li>...</li>
              </ul>
            </template>
          </EducationItem>
        </li>
      </ol>
    </section>

    <section
      id="experience"
      class="mx-auto max-w-xl px-5 sm:px-0 sm:py-20 lg:py-24 xl:py-28 2xl:max-w-2xl 2xl:py-44"
    >
      <div class="mb-10">
        <h1 class="mb-8 font-bold uppercase text-neutral-400">
          Expérience professionnelle
        </h1>
      </div>

      <ol>
        <li class="mb-14">
          <p class="mb-1 text-lg">Neovote</p>
          <p class="mb-2 text-base text-neutral-300">
            Alternant développeur PHP
          </p>
          <time class="text-neutral-400">Sept 2021 - Août 2022</time>
        </li>
      </ol>
    </section>
  </main>
</template>
