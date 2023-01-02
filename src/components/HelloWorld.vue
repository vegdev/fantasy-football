<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <code>{{ msg }}</code>
  </div>
</template>

<style scoped>
.greetings code{
  font-size: 2em;
  text-align: center;
}
</style>
