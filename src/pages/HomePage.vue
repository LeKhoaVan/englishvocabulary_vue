<script setup>
    import HomeLayout from "@/components/layouts/HomeLayout/index.vue";
    import Header from "@/components/Header/index.vue";
</script>

<style scoped>
    .title {
        width: 100%;
        height: 70vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        font-weight: bold;
}
</style>

<template>
    <HomeLayout>
        <template #header>
            <Header/>
        </template>

        <template #content>
            <div class="title">
                Welcome here to learn English vocabulary!!!<br/>
                Have a great experience!
            </div>       
        </template>
    </HomeLayout>
</template>