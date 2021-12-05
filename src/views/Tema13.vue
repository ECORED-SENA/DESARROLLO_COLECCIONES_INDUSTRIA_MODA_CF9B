<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Tipos de interior masculino

    .row.justify-content-evenly.mb-4      
      .col-lg-6.d-flex.align-items-center
        div.mb-4          
          p.mb-0 Entre las prendas de uso interior masculino, tanto en la línea adultos como infantil, la variedad en diseño y estilos es cada vez más amplia; sin embargo, hay unos modelos que, además de ser base para las nuevas creaciones, seguirán usándose por la funcionalidad que ofrecen a quienes los usan.
      .col-lg-6.col-8.px-5
        figure.mb-4
          img(src='@/assets/curso/tema13/img01.png') 

    .tarjeta.color-acento-contenido.p-4.p-md-5(style="background-color: #E8F0F8")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema13/img02.svg') 

        .col-md.col-lg-6
          .titulo-segundo.color-acento-contenido
            h2 Tipos de interior masculino
          p.mb-4 Para afianzar sus conocimientos y explorar detalles relevantes sobre los tipos de prendas de uso interior masculino, visualice con atención el recurso audiovisual que se muestra a continuación.
          
          a.boton.color-acento-contenido(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download


    Separador


</template>

<script>
export default {
  name: 'Tema12',
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
