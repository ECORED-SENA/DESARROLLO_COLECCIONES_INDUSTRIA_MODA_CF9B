<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Escalado de patrones de ropa interior y deportiva

    .row.justify-content-evenly.mb-4      
      .col-lg-5.d-flex.align-items-center
        div.mb-4          
          p.mb-0 El escalado de tallas es la operación que permite adecuar el patronaje de una prenda prototipo a cada una de las tallas en que debe confeccionarse el modelo. Es la técnica de aumentar o disminuir un patrón base a otro, proporcionalmente y en concordancia con un cuadro de tallas establecido.
      .col-lg-6.col-8.px-5
        figure.mb-4
          img(src='@/assets/curso/tema4/img01.png') 

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.py-4
          .row.justify-content-center
            .col-lg-3.col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema4/img02.svg') 
            .col-lg-8.d-flex.align-items-center.px-4
              p.mb-0 Aprender la técnica y aplicarla en detalle permite replicar el molde básico y mantener la personalidad de la prenda, de acuerdo con el diseño original. El escalado es determinante cuando se produce ropa a nivel industrial, lo que permite que cuando un cliente compre prendas las identifique por su tallaje y vestibilidad, por ser apropiadas para su configuración física y, al usarlas, la experiencia lo convierta en un consumidor frecuente del producto. 

    .row.justify-content-center
      .col-lg-4
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/Anexo2_Tutorial_Planificacion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Estudie el anexo Tutorial Planificación Escalado y asimile los aspectos más importantes del escalado de patrones de ropa interior y deportiva.
      .col-lg-4      
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/o73XRIZZLMs" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Profundice en los aspectos estudiados sobre este punto, observando el video Método SENA para escalado de prendas de vestir. 

    Separador


</template>

<script>
export default {
  name: 'Tema4',
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
