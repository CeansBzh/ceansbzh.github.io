<template>
  <main>
    <article>
      <header
        class="relative flex h-1 min-h-[40vh] flex-col justify-center overflow-hidden bg-neutral-800/50 bg-contain bg-right bg-no-repeat text-neutral-200"
      >
        <div
          class="mx-auto -mt-6 flex size-full max-w-5xl items-center px-6 sm:-mt-12 md:-mt-24 lg:px-10 xl:px-0 2xl:max-w-screen-xl"
        >
          <div class="w-full py-24 sm:w-3/4 lg:w-1/2">
            <h3
              class="relative z-40 mb-1 font-sans font-medium opacity-75 sm:mb-2 sm:text-xl"
            >
              Kairos
            </h3>
            <h1
              class="relative z-20 grow text-xl font-light leading-tight xs:text-2xl sm:text-3xl lg:text-4xl"
            >
              Saisie des tâches et des congés pour la gestion de la rentabilité
            </h1>
          </div>
          <div
            class="absolute bottom-0 right-0 h-1/2 w-full p-3 opacity-50 sm:bottom-10 md:bottom-16 md:w-2/3 md:opacity-75 lg:opacity-90 xl:w-1/2"
          >
            <img
              src="@/assets/projects/kairos/homepage.jpg"
              alt="Capture d'écran du projet Kairos"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

      <div class="px-4 sm:px-6 xl:px-0">
        <aside
          class="relative z-10 mx-auto flex w-full max-w-6xl flex-row flex-nowrap justify-around overflow-x-auto bg-neutral-100 py-8 text-neutral-700 xs:text-lg 2xl:max-w-screen-xl"
        >
          <div class="flex-none px-6">
            <h3 class="mb-1 font-sans font-medium">Plateforme</h3>
            <h4 class="font-sans opacity-75">Web</h4>
          </div>
          <div class="flex-none px-6">
            <h3 class="mb-1 font-sans font-medium">Rôle</h3>
            <h4 class="font-sans opacity-75">Développeur Fullstack</h4>
          </div>
          <div class="flex-none px-6">
            <h3 class="mb-1 font-sans font-medium">Année</h3>
            <h4 class="font-sans opacity-75">2024</h4>
          </div>
        </aside>
      </div>

      <section
        class="mx-4 my-14 flex max-w-5xl flex-col sm:mx-auto sm:flex-row"
      >
        <div
          class="grow px-3 py-5 text-justify text-base text-neutral-300 sm:px-10"
        >
          <p class="mb-3">
            Kairos est un outil de gestion de la rentabilité d'une entreprise.
            Il offre une interface de saisie des tâches effectuées par les
            employés et les congés pris. Il permet ensuite d'observer la
            rentabilité de l'entreprise à plusieurs échelles: par employé, par
            prestation, par métier, par projet et par client.
          </p>
          <p class="mb-3">
            Le site est développé en PHP avec le framework Laravel. Le frontent
            est en VueJS 3.0. La librairie Inertia fait le lien entre le front
            et le back. Le design est réalisé avec Tailwind CSS et les
            composants Vue de Primevue.
          </p>
        </div>
        <div class="border-t border-neutral-400 p-5 sm:border-l sm:border-t-0">
          <div class="flex min-w-60 flex-col space-y-3">
            <h3 class="text-base">Stack technique</h3>

            <div class="border-b border-neutral-400 p-3">
              <h4 class="mb-1">Backend</h4>
              <ul>
                <li>PHP 8.2</li>
                <li>Laravel 11</li>
                <li>Inertia</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div class="border-b border-neutral-400 p-3">
              <h4 class="mb-1">Frontend</h4>
              <ul>
                <li>Vue3</li>
                <li>Tailwind CSS</li>
                <li>Primevue</li>
              </ul>
            </div>

            <div class="p-3">
              <h4 class="mb-1">Autres</h4>
              <ul>
                <li>Authentification AzureAD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>
