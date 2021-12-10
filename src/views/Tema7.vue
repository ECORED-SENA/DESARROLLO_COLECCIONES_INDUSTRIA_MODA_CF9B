<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Desarrollo de modelos de <i>brasier</i>, modelo de <i>brasier</i> básico

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema7/img01.png') 
      .col-lg-6.d-flex.align-items-center
        p.mb-4 Adicional a la protección de los senos, el <i>brasier</i> es una prenda que se ha convertido en elemento fundamental del vestuario desde el punto de vista estético, de moda, comercial, entre otros. El desarrollo de modelos de <i>brasier</i> también ha ido evolucionando con el paso de los años, pero sin importar cuál sea el diseño final, existe un modelo básico de <i>brasier</i>, del cual se parte para confeccionarlos.

    p.mb-5 Conozca, a continuación, los pasos para el desarrollo del modelo de <i>brasier</i> básico. Procure llevar registro de los aspectos más importantes en su libreta personal de apuntes.
    
    .row.justify-content-center
      .col-lg-9
        figure.mb-4
          img(src='@/assets/curso/tema7/img02.svg') 

    Separador

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
