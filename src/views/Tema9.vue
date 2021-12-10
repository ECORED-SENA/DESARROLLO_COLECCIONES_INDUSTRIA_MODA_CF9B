<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Variación a vestido de baño femenino alto

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema9/img01.png') 
      .col-lg-6.d-flex.align-items-center
        p.mb-4 En este punto del componente formativo, después de conocer y asimilar el desarrollo del modelo de traje de baño femenino básico es momento de continuar con la variación del mismo a vestido de baño alto.

    p.mb-5 Analice atentamente el recurso que se muestra a continuación, en el cual conocerá cada paso y acción del proceso. Recuerde que es muy importante llevar registro de los aspectos más importantes y necesarios en su libreta personal de apuntes.

    SlyderB.mb-5(:datos="datosSlyder")

    .row.justify-content-center
      .col-lg-5
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/Anexo5_VariaciónVDB_Femenino_Infantil.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Estudie los pasos para desarrollar la variación al vestido de baño alto, femenino infantil, visitando el Anexo 5 Variación Vestido de Baño Femenino Infantil.

    Separador


</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Variación delantera',
        texto:
          'Trazar la base delantera del vestido de baño con sus líneas y puntos de construcción.<br>B = ½ de la distancia 11 - 12<br>B - A = ancho de la cargadera 4 cm o según diseño<br>G - F = Diferencia entre tórax máximo y pecho<br>17 - H = profundidad de escote<br>Haciendo centro en el punto O trazar una circunferencia con un radio igual a la distancia O - G<br>Trazar escote uniendo los puntos B - H<br>7 - D = profundidad de sisa 3 a 5 cm o según diseño<br>Trazar sisa uniendo los puntos A - D<br>19 - 1 = 7 cm o según diseño<br>Unir con curva 17 - 1 como lo indica el gráfico.',
        imagen: require('@/assets/curso/tema9/img02.svg'),
      },
      {
        titulo: 'Variación trasera',
        texto:
          'Trazar la base de trasero del vestido de baño con sus líneas y puntos de construcción.<br>Z = ½ de la distancia 11 - 13<br>Z - Y = a la distancia A - B en el delantero<br>7 - X = a la distancia 7 - D en el delantero<br>14 - W = 2 a 4 cm o según diseño<br>19 - T = a la distancia 19 - 1 en el delantero<br>Unir con curva 17 con T como lo indica el gráfico<br>Trazar sisa uniendo los puntos Y - X<br>Trazar escote uniendo los puntos W con Z',
        imagen: require('@/assets/curso/tema9/img03.svg'),
      },
      {
        titulo: '<i>Software</i> <i>Optitex</i>',
        texto:
          'Tenga presente que todos los pasos del desarrollo de modelos de prendas, se pueden procesar manualmente y, desde luego, con ayudas tecnológicas como, por ejemplo, el <i>software</i> <i>Optitex</i>. De donde son tomadas las gráficas e imágenes que se muestran de ejemplos en este componente formativo. ',
        imagen: require('@/assets/curso/tema9/img04.svg'),
      },
    ],
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
