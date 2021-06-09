<template>
   <div> 
      <input
        v-model="colorCode"
        placeholder="Enter Color Code"
        type="text"
        >
    </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newV) {
       this.$store.dispatch(`setColorCode`, newV)
      }
    }
  },
}
</script>

<style>

</style>