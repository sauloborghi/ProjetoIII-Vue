<template>
  <div id="app">
    <Carousel/>
    <Card/>
    <Form/>
    <Rodape/>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'
import Form from '../components/Form.vue'
import Rodape from '../components/Rodape.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Card,
    Form,
    Rodape
  }
}
</script>