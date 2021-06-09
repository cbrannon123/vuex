<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <Counter/>
   <CounterSquared/>
   <Buttons/>
   <ColorCode/>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import CounterSquared from '../components/CounterSquared.vue'
import Buttons from '../components/Buttons.vue'
import ColorCode from '../components/ColorCode.vue'
// @ is an alias to /src


export default {
  name: 'Home',
 
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode

  }
 
}
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}

.buttons>button{
  font-size: 20px;
  height: 40px;
  margin: 0 10px;
  width: 100px;
  background-color: blue;
  color: aliceblue;
}
</style>