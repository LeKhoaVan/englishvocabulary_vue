<script setup>
  import VocabularyBox from './components/VocabularyBox/index.vue';
  import DefaultLayout from '@/components/layouts/DefaultLayout';
  import Header from '@/components/Header';
</script>

<template>
  <DefaultLayout>

    <template #header>
      <Header />
    </template>

    <template #vocabularyBox>
      <VocabularyBox />
    </template>
  </DefaultLayout>
</template>


