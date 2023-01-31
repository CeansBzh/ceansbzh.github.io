<!-- Contenu à afficher
Intro (inspi: https://mckvr.com/case-studies/sweepr-customer-care)
- Rôle (dev fullstack, dev backend...)
- Plateforme (web, mobile...)
- Année
- Stack technique (front, back, bdd, api, etc)

Corps
- Intro pour expliquer le produit vite fait
- Découpage du corps en sections par fonctionnalité, avec des screens pour chaque section (inspi : https://radity.com/en/case-studies/zimmerstund/) -->

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
let slug = route.params.slug;
</script>

<template>
  <div class="project-view">
    <h1>{{ slug }}</h1>
  </div>
</template>
