<!-- components/CustomAlert.vue -->
 <style scoped>
    @import "./alert.css";
</style>


<template>
  <div  :class="['custom-alert', type]">
    <div class="alert-content">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
    <button @click="closeAlert" class="close-button">X</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Alert'
    },
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info', // e.g., 'info', 'success', 'warning', 'error'
      validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
    }
  }
};
</script>
