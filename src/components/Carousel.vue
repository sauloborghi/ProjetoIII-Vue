<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024px"
      img-height="48px"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Dia Mundial da Saúde 2021: Saúde para todos"
        text="O Dia Mundial da Saúde é comemorado no dia 7 de abril. A data foi criada em 1950 e é O objetivo da data é garantir o melhor nível de saúde para as pessoas em todo o mundo."
        img-src="https://sauloborghi.github.io/ProjetoIII/assets/dist/img/Banner/Banner1.jpeg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
      caption="Taquaritinga começa a vacinação do COVID-19"
      text="Taquaritinga começa a vacinação do COVID-19 nesse mês de março em 2021"
      img-src="https://sauloborghi.github.io/ProjetoIII/assets/dist/img/Banner/Banner2.jpeg">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
      caption="Butantan"
      text="Butantan entrega mais 2,2 milhões de doses de vacina CoronaVac"
      img-src="https://sauloborghi.github.io/ProjetoIII/assets/dist/img/Banner/Banner3.jpeg"></b-carousel-slide>
    
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
  }
</script>

<script>
export default {
  name: 'Carousel',
}
</script>