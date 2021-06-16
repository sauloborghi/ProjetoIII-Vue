<template>
  <div>
    <br>
    <h3 class="center">Hospitais</h3>
    <h1 class="center">MAIS PRÓXIMOS</h1>
    <hr class="hr">
  <b-card-group deck>
    <b-card title="Santa Casa de Taquaritinga" img-src="https://lh3.googleusercontent.com/proxy/mYGGl_G6ra9gZgdp3xJNoE7etyOhVJS-fu3qCbBap3TkakIryNYfnnUksQ7NtOhWHlaepTA6AvmlhgalMbk-rftw_HvHz76Rbzu9ssroZpKpWeFMVxKDfoaCQvXYw-8" img-alt="Image" img-top>
      <b-card-text>
        Endereço: Rua X, 29 - Taquaritinga/Sp
        <br>
        Telefone: xxxx-xxxx
      </b-card-text>
      <template #footer>
        <small class="text-muted">Publicado a 3 minutos atrás</small>
      </template>
    </b-card>

    <b-card title="Santa Casa de Monte Alto" img-src="http://baleiarossi.com.br/img/noticias/large/SANTAZCASAZmenor.jpg" img-alt="Image" img-top>
      <b-card-text>
        Endereço: Rua X, 1587 - Monte Alto/Sp
        <br>
        Telefone: xxxx-xxxx
      </b-card-text>
      <template #footer>
        <small class="text-muted">Publicado a 16 horas atrás</small>
      </template>
    </b-card>

    <b-card title="Hospital Carlos Malzoni" img-src="https://faceres.com.br/wp-content/uploads/2018/10/Hospital-Carlos-Malzoni.jpg" img-alt="Image" img-top>
      <b-card-text>
        Endereço: Rua X, 1429 - Matão/Sp
        <br>
        Telefone: xxxx-xxxx
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
  name: 'Cardh',
}
</script>