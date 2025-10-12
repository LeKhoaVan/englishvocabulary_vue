<style scoped>
    @import './button.css';
</style>

<script setup>
    import { computed } from 'vue'

    // khai báo props
    const props = defineProps({
        btnType: {
            type: String,
            required: true
        },
        btnName: {
            type:String,
            required: true
        }
    })

    // Tính class động cho button
    const btnClass = computed(() => {
        if(props.btnType === 'showAnswer') {
            return 'showAnswerBtn';
        } else if (props.btnType === 'forget'){
            return 'forgetBtn';
        } else if (props.btnType === 'backward') {
            return 'backwardBtn';
        } else {
            return 'forwardBtn';
        }
        
    })

    // @click="handleClick"
    const handleClick = ()=> {
        console.log("test");
    }

</script>

<template>
  <div class="btn" :class="btnClass" >
    <span>{{ btnName }}</span>
  </div>
</template>
