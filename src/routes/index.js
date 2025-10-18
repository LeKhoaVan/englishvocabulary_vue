import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import LearnPage from '@/pages/LearnPage/index.vue';
import HomePage from '@/pages/HomePage/index.vue';
import ListPage from '@/pages/ListPage/index.vue';
import ForgottenVocabulary from '@/pages/ForgottenVocabularyPage/index.vue';

const routes = [
    { path: '/', component: HomePage, name: "HomePage" },
    // { path: '/english/listId=:listId/:stt', component: EnglishPage },
    { path: '/learn/:listId/:stt', component: LearnPage, name: "LearnPage" },
    { path: '/vocabulary-list', component: ListPage, name: "ListPage" },
    { path: '/forgotten-vocabulary', component: ForgottenVocabulary, name: "ForgottenVocabularyPage" }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});