<template>
  <div id="app">
    <Form/>
    <Rodape/>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import Rodape from '../components/Rodape.vue'

export default {
  name: 'Contato',
  components: {
    Form,
    Rodape
  }
}
</script>