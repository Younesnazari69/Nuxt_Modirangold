<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />
      <NuxtPage />
  </div>
</template>
<script setup>
import { useDataStore } from '~/stores/data'
import ApiService from './services/ApiService'
ApiService.init();

const store = useDataStore()
//store.FetchPage(608)
</script>
