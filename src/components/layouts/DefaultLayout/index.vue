<style scoped>
    @import "./defaultLayout.css";
</style>

<script>

</script>


<template>
    <div class="container">
        <div class="header">
            <slot name="header"></slot>
        </div>

        <div class="content">
            <slot name="vocabularyBox"></slot>
        </div>
    </div>
</template>