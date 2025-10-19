<script setup>
  import VocabularyBox from '@/components/VocabularyBox/index.vue';
  import DefaultLayout from '@/components/layouts/DefaultLayout';
  import Header from '@/components/Header';
  import { getVocabularyList, getVocabularyListByList } from '@/vocabularyData';
  import { onMounted, ref } from 'vue';
  import {  } from '@/routes';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const vocabularyList = ref({})
  let listId = route.params.listId;

  const list = route.query.list?.split(',').map(Number) // [53, 50, 48, 0] 

  onMounted(async () => {
    if(list !== undefined) {
      vocabularyList.value = await getVocabularyListByList(listId, list);

    } else {
      vocabularyList.value = await getVocabularyList(listId);

    }  
  })


</script>

<template>
  <DefaultLayout>

    <template #header>
      <Header />
    </template>

    <template #vocabularyBox>
      <VocabularyBox :vocabularyList="vocabularyList" />
    </template>
  </DefaultLayout>
</template>