<template>
  <v-progress-circular
  class="loading"
  :size="90"
  :width="7"
  color="blue"
  indeterminate
  />
</template>

<script>
export default {
}
</script>

<style>
  .loading {
    position: fixed;
    top: 40vh;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
