<template>
  <main>
    <article>
      <div class="overflow-hidden">
        <header
          class="relative flex h-1 min-h-[40vh] flex-col justify-center bg-contain bg-right bg-no-repeat text-neutral-200"
        >
          <div
            class="mx-auto -mt-6 flex h-full w-full max-w-5xl items-center px-6 sm:-mt-12 md:-mt-24 lg:px-10 xl:px-0 2xl:max-w-screen-xl"
          >
            <div class="w-full py-24 sm:w-3/4 lg:w-1/2">
              <h3
                class="relative z-40 mb-1 font-sans font-medium opacity-75 sm:mb-2 sm:text-xl"
              >
                Akipaj
              </h3>
              <h1
                class="relative z-20 grow text-xl font-light leading-tight xs:text-2xl sm:text-3xl lg:text-4xl"
              >
                Partage de photos entre les membres d'une association
              </h1>
            </div>
            <div
              class="absolute bottom-0 right-0 -z-10 h-1/2 w-full p-3 opacity-50 md:w-2/3 md:opacity-75 lg:opacity-90 xl:w-1/2"
            >
              <img
                src="@/assets/projects/akipaj/homepage.png"
                alt="Image du projet Akipaj"
              />
            </div>
          </div>
        </header>

        <div class="px-4 sm:px-6 xl:px-0">
          <aside
            class="flex-no-wrap scrolling-touch relative z-10 mx-auto flex max-w-6xl flex-row overflow-x-auto bg-neutral-100 py-6 text-neutral-700 xs:text-lg 2xl:max-w-screen-xl"
          >
            <div class="w-auto flex-none px-6 md:flex-auto">
              <h3 class="mb-1 font-sans font-medium">Plateforme</h3>
              <h4 class="font-sans opacity-75">Web</h4>
            </div>
            <div class="w-auto flex-none px-6 md:flex-auto">
              <h3 class="mb-1 font-sans font-medium">Rôle</h3>
              <h4 class="font-sans opacity-75">Développeur Fullstack</h4>
            </div>
            <div class="w-auto flex-none px-6 md:flex-auto">
              <h3 class="mb-1 font-sans font-medium">Année</h3>
              <h4 class="font-sans opacity-75">2022</h4>
            </div>
          </aside>
        </div>
      </div>

      <section
        class="mx-4 my-14 flex max-w-5xl flex-col sm:mx-auto sm:flex-row"
      >
        <div class="grow p-3 text-justify text-base text-neutral-300 sm:p-10">
          <p class="mb-3">
            Akipaj est une association de voile organisant régulièrement des
            sorties de plusieurs jours. Je suis chargé de développer une
            plateforme permettant aux membres de l'association de partager
            facilement leurs photos aux autres membres.
          </p>
          <p class="mb-3">
            Le site est développé en PHP avec le framework Laravel. Il utilise
            la librairie Livewire pour la partie dynamique du site. Le design
            est réalisé avec Tailwind CSS.
          </p>
        </div>
        <div class="border-t border-neutral-400 p-5 sm:border-t-0 sm:border-l">
          <div class="flex min-w-[15rem] flex-col space-y-3">
            <h3 class="text-base">Stack technique</h3>

            <div class="border-b border-neutral-400 p-3">
              <h4 class="mb-1">Backend</h4>
              <ul>
                <li>PHP 8.1</li>
                <li>Laravel 9.2</li>
                <li>Livewire</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div class="border-b border-neutral-400 p-3">
              <h4 class="mb-1">Frontend</h4>
              <ul>
                <li>Blade</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div class="p-3">
              <h4 class="mb-1">Autres</h4>
              <ul>
                <li>Stripe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>
