<script setup>
const counter = useCounterStore()
</script>

<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">+</button>
  </div>
</template>

<style lang="scss" scoped>
div{
    button{
        background-color: red;
    }
}
</style>