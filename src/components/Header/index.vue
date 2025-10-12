<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';

    const route = useRoute();
    const pageName = route.name; 

    const isMenu = ref(false)
    
    const handleMenuClick = () => {
        isMenu.value = !isMenu.value;
    }

</script>

<style scoped>
    @import './header.css';
</style>

<template>
    <div class="headerContainer">
        <div class="logoContainer">
            <img class="logoImg" src="../../assets/images/logoWebsiteLearnToeic.png" alt="logo" />
            <span class="logoName">LeVant</span>
        </div>
        <div class="menuContainer">
                <RouterLink class="menuItem" :class="{activeItem: pageName === 'HomePage'}" to="/">Home</RouterLink>
                <RouterLink class="menuItem" :class="{activeItem: pageName === 'LearnPage'}" to="/learn/23/0">Learn</RouterLink>
                <RouterLink class="menuItem" :class="{activeItem: pageName === 'ListPage'}" to="/vocabulary-list">Vocabularies List</RouterLink>
                <RouterLink class="menuItem" :class="{activeItem: pageName === 'ForgottenVocabularyPage'}" to="/forgotten-vocabulary">Forgotten Vocabulary</RouterLink>
        </div>

        <div class="phoneMenu">
            <img class="menuImg" src="../../assets/bars-solid-full.svg" alt="menu-img" @click="handleMenuClick"/>
            <div class="phoneMenuShow" v-if="isMenu">
                <RouterLink class="phoneMenuItem" :class="{activeItem: pageName === 'HomePage'}" to="/">Home</RouterLink>
                <RouterLink class="phoneMenuItem" :class="{activeItem: pageName === 'LearnPage'}" to="/learn/23/0">Learn</RouterLink>
                <RouterLink class="phoneMenuItem" :class="{activeItem: pageName === 'ListPage'}" to="/vocabulary-list">Vocabularies List</RouterLink>
                <RouterLink class="phoneMenuItem" :class="{activeItem: pageName === 'ForgottenVocabularyPage'}" to="/forgotten-vocabulary">Forgotten Vocabulary</RouterLink>
            </div>
        </div>
    </div>
</template>