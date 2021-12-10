<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tejidos, elasticidad, elongación y método de trazo de patrones

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema2/img01.png') 
      .col-lg-6.d-flex.align-items-center
        p.mb-4 Para producir prendas de la línea de ropa interior y deportiva es muy importante tener presente el tipo de material o tejido a utilizar, porque el comportamiento de cada textil es diferente y puede presentar variaciones tanto en su composición como en el tipo de tejido, siendo esto determinante para garantizar <i>confort</i> y funcionalidad de las prendas.

    p.mb-5 Conozca las generalidades y aspectos más importantes de los tejidos y telas, visualizando con atención el recurso que se muestra a continuación:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-8
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Ahora, profundice en el método manual para trazo de patrones, observando el video MetodoSENAParaTrazarPatrones. Este método se aplica de manera sistemática a cada uno de los pasos en la elaboración de patrones femenino, masculino e infantil.
    Separador


</template>

<script>
export default {
  name: 'Tema2',
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
