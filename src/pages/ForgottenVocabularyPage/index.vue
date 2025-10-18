<script setup>
    import HomeLayout from "@/components/layouts/HomeLayout/index.vue";
    import Header from "@/components/Header/index.vue";
    import { readAllVocabularyFromSession } from "@/vocabularyData";
    import { onMounted, ref } from "vue";
    import { useRouter } from "vue-router";

    let allVocabularyFromSession = readAllVocabularyFromSession();
    let listId = ref([]);
    const router = useRouter();

    onMounted(() => {
        for(let item in allVocabularyFromSession) {
            listId.value.push(item);
        } 
    })

    const handleItemClick = (id) => {
        const allForgottenVocabulary = JSON.parse(allVocabularyFromSession[id]);

        router.push({
            path: `/learn/${id}/0`, 
            query: { list: allForgottenVocabulary.join(",")}
        });
    }

</script>

<style scoped>
    @import "forgottenVocabularyPage.css";
</style>

<template>
   <HomeLayout>
        <template #header>
            <Header />
        </template>

        <template #content>
            <div class="title">
                <p>Forgotten Vocabulary</p>
            </div>
            <div class="pageContainer">
                <div class="listItem" v-for="id in listId" @click="handleItemClick(id)">
                    <span>List Name: {{ id }}</span>
                    <span>forgotten Vocabulary: {{ JSON.parse(allVocabularyFromSession[id]).length}}</span>
                    
                </div>
            </div>
        </template>
    </HomeLayout>
</template>