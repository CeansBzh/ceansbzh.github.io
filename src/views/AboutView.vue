<script setup>
import AppLink from '../components/AppLink.vue';
import EducationItem from '../components/EducationItem.vue';
</script>

<template>
  <main class="mx-auto max-w-xl px-5 pb-40 2xl:max-w-2xl">
    <section class="py-20 lg:py-24 xl:py-28 2xl:py-52">
      <h1 class="mb-10 font-black uppercase text-neutral-400">Sommaire</h1>
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

    <section id="whoami" class="py-20 lg:py-24 xl:py-28 2xl:py-44">
      <h1 class="mb-10 font-black uppercase text-neutral-400">Qui suis-je</h1>
      <div
        class="flex flex-col space-y-3 text-base leading-loose tracking-wide text-neutral-300 sm:text-justify"
      >
        <p class="mb-3 text-lg text-neutral-200">
          Je suis Elouan Briantais, développeur web chez
          <AppLink
            to="https://www.voyelle.fr/"
            class="underline decoration-2 underline-offset-2"
            aria-label="Voir le projet"
            >Voyelle</AppLink
          >
          et étudiant en informatique à
          <AppLink
            to="https://istic.univ-rennes.fr/"
            class="underline decoration-2 underline-offset-2"
            aria-label="Voir le projet"
            >l'ISTIC</AppLink
          >.
        </p>
        <p>
          Ma spécialité est le développement back-end, mais j'aime aussi créer
          des interfaces web modernes et visuellement intéressantes.
        </p>
        <p>
          Mes
          <AppLink to="/#projects" class="underline underline-offset-2"
            >projets</AppLink
          >
          personnels sont ma force. C'est grâce à eux que j'ai choisi ma voie et
          qu'aujourd'hui je me professionnalise dans le développement web.
        </p>
      </div>
    </section>

    <section id="education" class="py-20 lg:py-24 xl:py-28 2xl:py-44">
      <h1 class="mb-10 font-black uppercase text-neutral-400">Formation</h1>
      <ol class="ml-1">
        <li class="border-l border-neutral-600 pb-10">
          <EducationItem>
            <template #time>2023 - 2025</template>
            <template #place>ISTIC, Université de Rennes</template>
            <template #title
              >Master informatique - parcours Ingénierie Logicielle</template
            >
            <template #body>
              <ul class="ml-3 mt-2 list-inside list-disc">
                <li>Programmation réseau</li>
                <li>Conception orientée utilisateur</li>
                <li>Architecture des logiciels</li>
                <li>...</li>
              </ul>
            </template>
          </EducationItem>
        </li>
        <li class="border-l border-neutral-600 pb-10">
          <EducationItem>
            <template #time>2022 - 2023</template>
            <template #place>ISTIC, Université de Rennes</template>
            <template #title>Licence informatique</template>
            <template #body>
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
              <ul class="ml-3 mt-2 list-inside list-disc">
                <li>Théorie des langages</li>
                <li>Bases de données</li>
                <li>Maths discrètes</li>
                <li>...</li>
              </ul>
            </template>
          </EducationItem>
        </li>
      </ol>
    </section>

    <section id="experience" class="py-20 lg:py-24 xl:py-28 2xl:py-44">
      <div class="mb-10">
        <h1 class="mb-8 font-black uppercase text-neutral-400">
          Expérience professionnelle
        </h1>
      </div>

      <ol>
        <li class="mb-14">
          <AppLink
            to="https://www.voyelle.fr/"
            class="mb-1 block text-lg underline underline-offset-2"
            aria-label="Voir le projet"
          >
            Voyelle
          </AppLink>
          <p class="mb-2 text-base text-neutral-300">
            Alternant développeur Web
          </p>
          <time class="text-neutral-400">Mai 2023 (en cours)</time>
        </li>
        <li class="mb-14">
          <AppLink
            to="https://www.neovote.com/"
            class="mb-1 block text-lg underline underline-offset-2"
            aria-label="Voir le projet"
          >
            Neovote
          </AppLink>
          <p class="mb-2 text-base text-neutral-300">
            Alternant développeur PHP
          </p>
          <time class="text-neutral-400">Sept 2021 - Août 2022</time>
        </li>
      </ol>
    </section>
  </main>
</template>
