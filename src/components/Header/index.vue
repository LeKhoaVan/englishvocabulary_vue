<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router';

    const route = useRoute();
    const pageName = route.name;    
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
                <RouterLink class="menuItem" :class="{activeItem: pageName === ''}" to="/">Forgotten Vocabulary</RouterLink>
        </div>
    </div>
</template>