<script setup>
    import HomeLayout from "@/components/layouts/HomeLayout/index.vue";
    import Header from "@/components/Header/index.vue";
    import { readAllVocabularyFromSession, deleteVocabularyFromSession } from "@/vocabularyData";
    import { onMounted, ref } from "vue";
    import { useRoute, useRouter } from "vue-router";

    let allVocabularyFromSession = readAllVocabularyFromSession();
    let listId = ref([]);
    const router = useRouter();
    const route = useRoute();

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

    const handleTrashClick = (id) => {
        const result = deleteVocabularyFromSession(id);
        if(result) {
            
            // router.push({
            //     path: route.path,
            //     query: { reload: Date.now() }
            // });
        }else {
            alert("Failure to erase vocabulary forgotten")
        }
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
                <div class="listItem" v-for="id in listId">
                    <img class="trashItem" src="../../assets/trash-solid-full.svg" alt="delete" @click="handleTrashClick(id)"/>
                    <div class="headerItem"  @click="handleItemClick(id)">
                        <span>List Name: {{ id }}</span>
                        <span>forgotten Vocabulary: {{ JSON.parse(allVocabularyFromSession[id]).length}}</span>
                    </div>                    
                </div>
            </div>
        </template>
    </HomeLayout>
</template>