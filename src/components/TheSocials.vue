<script setup>
import { ref } from 'vue';

const copyText = ref(null);
let timer = null;

const copyToClipboard = string => {
  navigator.clipboard.writeText(string).then(function () {
    copyText.value.innerText = 'Copiée !';

    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(
      () => (copyText.value.innerText = 'Cliquer pour copier'),
      5000
    );
  });
};
</script>

<template>
  <div class="mt-4 flex flex-col justify-start xs:mt-0 xs:flex-row">
    <div class="mb-5 flex xs:mb-0">
      <a
        target="_blank"
        rel="nofollow noopener noreferrer"
        href="https://github.com/CeansBzh"
        class="rounded-full bg-neutral-200 p-2 text-neutral-900 shadow-md shadow-black transition ease-out hover:bg-[#24292f] hover:text-neutral-200 hover:shadow-[0_5px_15px_3px] hover:shadow-neutral-200/60"
      >
        <span class="sr-only">Voir ma page Github (nouvel onglet)</span>
        <svg
          class="h-8"
          role="presentation"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Logo GitHub</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      </a>
      <a
        target="_blank"
        rel="nofollow noopener noreferrer"
        href="https://linkedin.com/in/ebriantais/"
        class="ml-5 rounded-full bg-neutral-200 p-2 text-neutral-900 shadow-md shadow-black transition ease-out hover:bg-[#0E76A8] hover:text-neutral-200 hover:shadow-[0_5px_15px_3px] hover:shadow-neutral-200/60"
      >
        <span class="sr-only">Voir ma page Linkedin (nouvel onglet)</span>
        <svg
          class="h-8"
          role="presentation"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Logo LinkedIn</title>
          <path
            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          />
        </svg>
      </a>
    </div>
    <div
      class="group flex w-60 flex-row items-center xs:ml-5"
      @click="copyToClipboard('ebriantais@orange.fr')"
    >
      <button
        type="button"
        aria-label="Copier mon adresse mail dans le presse-papier"
        class="rounded-full bg-neutral-200 p-2 text-neutral-900 shadow-md shadow-black transition ease-out hover:bg-[#ffc72c] hover:text-neutral-200 hover:shadow-[0_5px_15px_3px] hover:shadow-neutral-200/60"
      >
        <div class="relative size-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute h-8 transition-opacity ease-in-out group-hover:opacity-0"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute h-8 opacity-0 transition-opacity ease-in-out group-hover:opacity-100"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path
              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            ></path>
          </svg>
        </div>
      </button>
      <div class="ml-3 hidden text-gray-200 group-hover:block">
        <p class="text-lg font-medium">ebriantais@orange.fr</p>
        <p ref="copyText" class="text-xs">Cliquer pour copier</p>
      </div>
    </div>
  </div>
</template>
