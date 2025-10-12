import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import LearnPage from '@/pages/LearnPage.vue';
import HomePage from '@/pages/HomePage.vue';
import ListPage from '@/pages/ListPage.vue';

const routes = [
    { path: '/', component: HomePage, name: "HomePage" },
    // { path: '/english/listId=:listId/:stt', component: EnglishPage },
    { path: '/learn/:listId/:stt', component: LearnPage, name: "LearnPage" },
    { path: '/vocabulary-list', component: ListPage, name: "ListPage" },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});