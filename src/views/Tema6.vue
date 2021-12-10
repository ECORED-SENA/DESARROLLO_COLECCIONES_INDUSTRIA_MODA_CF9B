<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Escalado del corpiño para <i>brasier</i>

  
    .row.justify-content-evenly.mb-4      
      .col-lg-5.d-flex.align-items-center
        div.mb-4          
          p.mb-4 Para iniciar el escalado del corpiño es necesario recordar que este es el proceso técnico que permite desarrollar una serie de moldes denominados por tallas, partiendo de un molde básico, al cual se le aplican unos incrementos que se obtienen del cuadro de tallas normalizado; medidas que generalmente corresponden a la diferencia entre talla y talla y, se aplica normalmente en los diferentes ángulos que tiene el molde, teniendo  en cuenta que la medida se reparte equilibradamente en los moldes que componen la pieza. 
          h4.mb-0 El corpiño para <i>brasier</i> está compuesto por dos piezas, la ½ del frente y la ½ de la espalda, moldes a los que se aplican incrementos del cuadro tallas. 
      .col-lg-5.col-8.px-5
        figure.mb-4
          img(src='@/assets/curso/tema6/img01.png') 


    .row.justify-content-center
      .col-lg-5
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/Anexo3_Escalado_Corpiño.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Refuerce los elementos vistos en el video y estudie este documento que contiene en detalle y con ilustraciones, el método SENA para escalado aplicado al molde de corpiño.
      .col-lg-5
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Observe con mucha atención el video que aquí se sugiere “Método SENA para escalado aplicado al molde de corpiño”; en este conocerá el paso a paso del proceso de escalado de corpiño.


    Separador


</template>

<script>
export default {
  name: 'Tema6',
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
