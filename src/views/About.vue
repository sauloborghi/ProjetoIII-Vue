<template>
  <div id="app">
    <br>
    <h3 class="center">Ultimas Noticias</h3>
    <h1 class="center">Hora de ficar atualizado</h1>
    <hr class="hr">
  <b-card-group deck>
    <b-card title="Taquaritinga já tem mais de 10% da população vacinada contra COVID-19" img-src="https://www.cornellsci.com/images/about-001.jpeg" img-alt="Image" img-top>
      <b-card-text>
        Mesmo com a grande dificuldade na obtenção de vacinas contra a COVID-19 neste momento que estamos vivendo, com o início da vacinação de idosos com 70 anos ou mais nesta terça-feira (23), Taquaritinga alcançou a marca de 10,17% de pessoas vacinadas.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Publicado a 3 minutos atrás</small>
      </template>
    </b-card>
  </b-card-group>
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