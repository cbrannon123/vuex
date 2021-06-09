<template>
  <div class="buttons">
      <button @click="$store.commit('decCounter')">-</button>
      <button @click="$store.dispatch('ranCounterDec')"><span>Ran -</span></button>
      <button @click="$store.dispatch('ranCounter')"><span>Ran +</span></button>
      <button @click="$store.commit('incCounter')">+</button>
    </div> 
</template>

<script>
export default {

}
</script>

<style>

</style>