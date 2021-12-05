<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1 Escalado interior masculino

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema14/img01.png') 
      .col-lg-6.d-flex.align-items-center
        div.mb-4
          h4.mb-1 Al igual que el escalado de otras prendas de vestir, de cualquiera de las líneas masculina, femenina, infantil, el escalado de interior masculino cuenta con sus propios pasos clave.
          p.mb-0Cumplirlos y aplicarlos de manera correcta favorecerá que el desarrollo y confección de las mismas sea exitoso y, responda realmente a las necesidades y exigencias del público usuario y a las expectativas de la industria de la moda.

    p.mb-5 Para realizar el proceso de escalado manual del interior masculino tenga en cuenta los siguientes pasos:

    SlyderB.mb-5(:datos="datosSlyder")

    .row.justify-content-center
      .col-lg-3.col-6.px-3        
        a.lnk(@click="modal1 = true")          
          .row.justify-content-center.t1-div1.py-3
            .col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema14/img03.svg') 
            .col-6.d-flex.align-items-center
              h4.mb-0 <b>Recuerde</b>
          
      .col-lg-3.col-6.px-3
        a.lnk(@click="modal2 = true")          
          .row.justify-content-center.t1-div1.py-3
            .col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema14/img04.svg') 
            .col-6.d-flex.align-items-center
              h4.mb-0 <b>¡Importante!</b>

    

    ModalA(:abrir-modal.sync="modal1")
      p.mb-0 Sobre la línea central, escuadrar el punto del costado/pierna (eje X) y aplicar el incremento de cadera siendo 1.25 cm por talla, tanto para las superiores como las inferiores. Teniendo todo debidamente marcado, identificar cada una de las tallas en los diferentes puntos, para luego realizar la unión; las líneas rectas se unen con la escuadra o regla, las líneas curvas se unen con el molde base, con el fin de conservar su forma.

    ModalA(:abrir-modal.sync="modal2")
      p.mb-0 Es muy importante que al unir las distancias entre talla y talla se vean iguales. El paso a seguir es trazar cada una de las tallas, cortar e industrializar. Este proceso se realiza exactamente igual, tanto en delantero como en trasero.

    Separador


</template>

<script>
export default {
  name: 'Tema14',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    datosSlyder: [
      {
        titulo: 'Pasos iniciales',
        texto:
          'Extraer los incrementos del cuadro de tallas masculino, en este caso, para el interior clásico de hombre.<br><br>Seleccionar del cuadro, como talla base, la 32 y determinar cuántas tallas superiores e inferiores se van a trabajar, que no superen las 3 tallas, con el fin de conservar la forma del molde.',
        imagen: require('@/assets/curso/tema14/img02.png'),
      },
      {
        titulo: 'Variación trasera',
        texto:
          'Trazar la base de trasero del vestido de baño con sus líneas y puntos de construcción.<br>Z = ½ de la distancia 11 - 13<br>Z - Y = a la distancia A - B en el delantero<br>7 - X = a la distancia 7 - D en el delantero<br>14 - W = 2 a 4 cm o según diseño<br>19 - T = a la distancia 19 - 1 en el delantero<br>Unir con curva 17 con T como lo indica el gráfico<br>Trazar sisa uniendo los puntos Y - X<br>Trazar escote uniendo los puntos W con Z',
        imagen: require('@/assets/curso/tema9/img03.svg'),
      },
      {
        titulo: 'Software Optitex',
        texto:
          'Tenga presente que todos los pasos del desarrollo de modelos de prendas, se pueden procesar manualmente y, desde luego, con ayudas tecnológicas como, por ejemplo, el software Optitex. De donde son tomadas las gráficas e imágenes que se muestran de ejemplos en este componente formativo. ',
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
