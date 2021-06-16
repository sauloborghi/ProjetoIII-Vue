<template>
  <div>
    <br>
    <h3 class="center">Ultimas Noticias</h3>
    <h1 class="center">Hora de ficar atualizado</h1>
    <hr class="hr">
  <b-card-group deck>
    <b-card title="Taquaritinga já tem mais de 10% da população vacinada contra COVID-19" img-src="https://www.socialismocriativo.com.br/wp-content/uploads/2021/01/coronavac-1.jpg" img-alt="Image" img-top>
      <b-card-text>
        Mesmo com a grande dificuldade na obtenção de vacinas contra a COVID-19 neste momento que estamos vivendo, com o início da vacinação de idosos com 70 anos ou mais nesta terça-feira (23), Taquaritinga alcançou a marca de 10,17% de pessoas vacinadas.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Publicado a 3 minutos atrás</small>
      </template>
    </b-card>

    <b-card title="Vacinação do povo de Taquaritinga" img-src="https://www.socialismocriativo.com.br/wp-content/uploads/2021/01/coronavac-1.jpg" img-alt="Image" img-top>
      <b-card-text>
        A vacinação, decorrente da ordem cronológica estabelecida pelo Estado de São Paulo (SP) chegou hoje, no dia 3/25/2021. A idade requisitada para hoje era de 69 nove anos, descendo cada vez mais para chegar até a população mais jovem.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Publicado a 16 horas atrás</small>
      </template>
    </b-card>

    <b-card title="Centro Espírita Araraquara" img-src="https://www.socialismocriativo.com.br/wp-content/uploads/2021/01/coronavac-1.jpg" img-alt="Image" img-top>
      <b-card-text>
        Mesmo com a grande dificuldade na obtenção de vacinas contra a COVID-19 neste momento que estamos vivendo, com o início da vacinação de idosos com 50 anos ou mais nesta quarta-feira (16), Taquaritinga alcançou a marca de 25,17% de pessoas vacinadas.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Publicado a 23 horas atrás</small>
      </template>
    </b-card>
  </b-card-group>
</div>
</template>

<style scoped>
  .center{
    text-align: center;
  }
  .hr{
    margin-left: 15px;
    margin-right: 15px;
  }
  </style>

<style scoped>
.card-deck{
    padding: 0px;
    margin-top: 10px;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 10px;
}  
</style>

<script>
export default {
  name: 'Card',
}
</script>