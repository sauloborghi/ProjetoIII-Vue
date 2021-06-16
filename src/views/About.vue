<template>
  <div id="app">
    <div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
    <Rodape/>
  </div>
</template>

<script>
import Rodape from '../components/Rodape.vue'

export default {
  name: 'About',
  components: {
    Rodape
  }
}
</script>