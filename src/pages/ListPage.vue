<script setup>
    import {getAllVocabulary} from "@/vocabularyData";
    import HomeLayout from "@/components/layouts/HomeLayout/index.vue";
    import Header from "@/components/Header/index.vue";
    import { onMounted } from "vue";
    import { ref } from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter();

    const allVocabularyList = ref({});
    onMounted(async () => {
        allVocabularyList.value = await getAllVocabulary();
    })

    const handleItemClick = (id) => {
        router.push(`/learn/${id}/0`);
    }

</script>

<style scoped>
    .pageContainer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: self-start;
        flex-wrap: wrap;
        color: rgb(0, 0, 0);
        font-size: 20px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.301);
        
        overflow-x: auto;
    }

    .listItem {
        width: 23%;
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 8px;
        background-color: rgba(255, 255, 255, 0.904);
        cursor: pointer;
    }

    .listItem:hover {
        background: white;
        font-size: 21px;
    }

    @media(max-width:380px){

    .pageContainer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        /* justify-content: flex-start;
        align-items: self-start; */
        flex-wrap: wrap;
        color: rgb(0, 0, 0);
        font-size: 11px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.301);
        
        overflow-x: auto;
    }

    .listItem {
        width: 45%;
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px;
        background-color: rgba(255, 255, 255, 0.904);
        cursor: pointer;
    }

    .listItem:hover {
        background: white;
        font-size: 12px;
    }
    }
</style>

<template>
    <HomeLayout>
        <template #header>
            <Header />
        </template>

        <template #content>
            <div class="pageContainer">
                <div class="listItem" v-for="listItem in allVocabularyList" :key="listItem.id" @click="handleItemClick(listItem.id)">
                    <span>List Name: {{ listItem.id }}</span>
                    <span>Vocabulary Total: {{ listItem.vocabularies.length }}</span>
                    <span>forgotten Vocabulary: 0</span>
                </div>
            </div>
        </template>
    </HomeLayout>
</template>