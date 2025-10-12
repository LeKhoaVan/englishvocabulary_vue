
<style scoped>
    @import './homeLayout.css';
</style>


<template>
    <div class="container">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>