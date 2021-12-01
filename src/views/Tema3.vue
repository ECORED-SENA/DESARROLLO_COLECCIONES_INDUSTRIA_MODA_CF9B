<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ropa interior femenina: base del panty y tipos de panty

    .row.justify-content-evenly.mb-4      
      .col-lg-5.d-flex.align-items-center
        div.mb-4
          h4.mb-4 En los procesos de confección de ropa íntima y deportiva los panties se han convertido con el paso de los años en prendas de uso fundamental para las personas.
          p.mb-0 Su funcionalidad, comodidad, practicidad de uso y facilidad de lavado y guardado, los han convertido en elemento clave del armario y de los escenarios de prácticas deportivas.
      .col-lg-4.col-8.px-5
        figure.mb-4
          img(src='@/assets/curso/tema3/img01.png') 

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.py-4
          .row.justify-content-center
            .col-lg-2.col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema3/img02.svg') 
            .col-lg-9.d-flex.align-items-center.px-4
              p.mb-0 La confección de panties requiere operaciones elementales como el corte, el cosido, pulido básico de sus piezas, etc. En ello, se deben considerar en detalle las características, materiales, dimensiones, modos de uso y especificaciones técnicas de calidad. 

    .row.justify-content-center
      .col-lg-6
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Conozca y comprenda los pasos y mecanismos de confección de los diferentes tipos de panties, estudiando en profundidad las tablas de información del anexo.
    Separador


</template>

<script>
export default {
  name: 'Tema3',
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
