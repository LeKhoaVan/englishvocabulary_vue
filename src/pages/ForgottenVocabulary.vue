<script setup>
    import HomeLayout from "@/components/layouts/HomeLayout/index.vue";
    import Header from "@/components/Header/index.vue";
</script>

<style scoped>
    .title {
        text-align: center;
        font-size: 25px;
        font-weight: bold;
    }
</style>

<template>
   <HomeLayout>
        <template #header>
            <Header />
        </template>

        <template #content>
            <div class="title">
                    Chức năng chưa phát triển <br/>
                    Hẹn gặp lại     
                </div>
        </template>
    </HomeLayout>
</template>