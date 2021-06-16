<template>
  <div id="app">
    <Card/>
    <Rodape/>
  </div>
</template>

<script>
import Rodape from '../components/Rodape.vue'
import Card from '../components/Card.vue'

export default {
  name: 'About',
  components: {
    Rodape,
    Card
  }
}
</script>