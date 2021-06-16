<template>
  <div id="app">
    <Cardh/>
    <Rodape/>
  </div>
</template>

<script>
import Rodape from '../components/Rodape.vue'
import Cardh from '../components/Cardh.vue'

export default {
  name: 'About',
  components: {
    Rodape,
    Cardh
  }
}
</script>