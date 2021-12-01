<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inducción al patronaje y escalado, interior y deportivo

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema1/img01.png') 
      .col-lg-6.d-flex.align-items-center
        p.mb-4 La toma de medidas es uno de los pasos más importantes en la confección de prendas; por medio del mismo se obtienen las medidas más representativas del cuerpo humano, tomadas directamente sobre él, con el fin de establecer posteriormente unos estándares para construir cuadros de tallas y de medidas anatómicas.


    p.mb-5 Para tomar correctamente las medidas corporales se deben tener cuenta recomendaciones generales como:
    
    SlyderB.mb-5(:datos="datosSlyder")

    p.mb-5 A continuación, se presentan las fórmulas para construir el cuadro de tallas de medidas deducidas femenino:

    .row.justify-content-center.mb-4.t1-lista1
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador.mb-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Tórax máximo (representa la talla) = pecho + 2 cm
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Pecho = tórax máximo - 2 cm
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Submamario = tórax máximo - 5 cm
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Cadera = tórax máximo + 4 cm
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Cintura = cadera - 14 cm
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Cuello = 2/3 de pecho + 4 cm
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Estatura séptima cervical (7ª C.) = estatura total - 20 cm
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador.mb-4
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Talle = 3/10 de la estatura 7ª C.
          li 
            .lista-ol--cuadro__vineta
              span 9
            | Cintura al suelo = 7 /10 de la estatura 7ª C.
          li 
            .lista-ol--cuadro__vineta
              span 10
            | Largo brazo = 4/10 de la estatura 7ª C.
          li 
            .lista-ol--cuadro__vineta
              span 11
            | Estatura total = estatura 7ª C. + 20 cm
          li 
            .lista-ol--cuadro__vineta
              span 12
            | Base = pecho+ desahogo+ costura (desahogo 4 cm y costura 2 cm)
          li 
            .lista-ol--cuadro__vineta
              span 13
            | Tiro = 1/2 cadera – 3 cm 

    .row.justify-content-center
      .col-lg-3.col-6
        .row.justify-content-center.t1-div1.py-3
          .col-4.d-flex.align-items-center
            figure
              img(src='@/assets/curso/tema1/img03.svg') 
          .col-6.d-flex.align-items-center
            p.mb-0 <b>¡Importante!</b>
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Desahogo

    .row.justify-content-center.mb-4
      .col-lg-6.d-flex.align-items-center
        p.mb-4 Hace referencia a la diferencia que existe entre la medida anatómica y la medida de la prenda terminada y, varía de acuerdo con los factores como el diseño de prenda, la tendencia de la moda, la calidad del tejido, el forro o entretela empleada y la amplitud o comodidad deseada.
      .col-lg-6.col-8.d-flex.align-items-center
        figure.mb-4
          img(src='@/assets/curso/tema1/img04.png') 

    p.mb-5 La siguiente tabla muestra el desahogo empleado según el tipo de prenda en centímetros.

    .row.justify-content-center
      .col-lg-10
        div.BorTit.mb-3          
          i.mb-0 Desahogo según el tipo de prenda en centímetros
        .tabla-a.color-acento-contenido(style="background-color: white")
              table
                thead
                  tr
                    th Prenda/Amplitud
                    th Muy estrecha
                    th Estrecha normal
                    th Normal
                    th Ancha
                    th Muy Ancha
                tbody
                  tr
                    td.text-center Camisa
                    td.text-center 4
                    td.text-center 6
                    td.text-center 8 
                    td.text-center 10
                    td.text-center 12
                  tr
                    td.text-center Saco
                    td.text-center 6
                    td.text-center 8 
                    td.text-center 10
                    td.text-center 12
                    td.text-center 14
                  tr
                    td.text-center Abrigo
                    td.text-center 8
                    td.text-center 10 
                    td.text-center 12 
                    td.text-center 14 
                    td.text-center 16
                  tr
                    td.text-center Safari
                    td.text-center 10
                    td.text-center 12 
                    td.text-center 14 
                    td.text-center 16 
                    td.text-center 18                                     

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Drop
    
    .row.justify-content-center.mb-4.px-5
      .col-lg-6.col-8.d-flex.align-items-center
        figure.mb-4
          img(src='@/assets/curso/tema1/img05.png') 
      .col-lg-6.d-flex.align-items-center
        div.mb-4
          h4.mb-4 Es una palabra internacional que indica la diferencia en centímetros entre la cintura y el pecho para el hombre y, entre cadera y tórax máximo para la mujer.
          p.mb-5 El drop no es más que una medida de identificación que permite determinar la talla correspondiente a cada individuo.
          .cajon.color-secundario.p-4.px-5
            p.mb-0 Generalmente predomina para el hombre el drop negativo, puesto que el hombre suele tener más pecho que cintura, aunque al realizar una tabla de tallas y medidas se acostumbra que a mayor talle menos drop, llegando en tallas extremas a ser positivo o sea un cuerpo con más cintura que pecho.   

    p.mb-5 A continuación, se muestran algunos ejemplos:

    .row.justify-content-center
      .col-lg-3.col-6.px-4
        .row.justify-content-center.t1-div2.py-3
          .col-4.d-flex.align-items-center
            figure
              img(src='@/assets/curso/tema1/img06.svg') 
          .col-6.d-flex.align-items-center
            h4.mb-0 <b>Drop<br>masculino</b>
      .col-lg-3.col-6.px-4
        .row.justify-content-center.t1-div2.py-3
          .col-4.d-flex.align-items-center
            figure
              img(src='@/assets/curso/tema1/img07.svg') 
          .col-6.d-flex.align-items-center
            h4.mb-0 <b>Drop<br>femenino</b>
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Cuadro de tallas normalizado femenino

    p.mb-5 Lo define cada empresa, cada marca como resultado de un estudio de mercado realizado al público objetivo, donde se le hacen ajustes a las medidas iniciales, garantizando que el sector de la población que quiere vestir quedará satisfecho, porque las prendas y tallas se ajustan a su antropometría y necesidades, lo común es encontrar en la industria de la confección que cada empresa maneje su propio cuadro de tallas.
    
    div.BorTit.mb-3          
      i.mb-0 Desahogo según el tipo de prenda en centímetros
    .tabla-a.color-acento-contenido(style="background-color: white")
      table
        thead
          tr
            th(colspan=2) Talla
            th 6 - XS
            th 8 - XS
            th 10 - M
            th 12 - L
            th 14 - XL
            th 16 - Sl
            th Incremento
        tbody
          tr
            td.text-center(colspan=2) Tórax máximo
            td.text-center 40
            td.text-center 42
            td.text-center 44
            td.text-center 46
            td.text-center 48
            td.text-center 50
            td.text-center 2 cm
          tr
            td.text-center(colspan=2) Submamario
            td.text-center 35
            td.text-center 38
            td.text-center 39
            td.text-center 41
            td.text-center 43
            td.text-center 45
            td.text-center 2 cm
          tr
            td.text-center(colspan=2) Cadera
            td.text-center 44
            td.text-center 46
            td.text-center 48
            td.text-center 50
            td.text-center 52
            td.text-center 54
            td.text-center 2 cm
          tr
            td.text-center(colspan=2) Pecho
            td.text-center 38
            td.text-center 40
            td.text-center 42
            td.text-center 44
            td.text-center 46
            td.text-center 48
            td.text-center 2 cm
          tr
            td.text-center(colspan=2) Cintura
            td.text-center 30
            td.text-center 32
            td.text-center 34
            td.text-center 36
            td.text-center 38
            td.text-center 40
            td.text-center 2 cm
          tr
            td.text-center(colspan=2) Estatura Vertex-Suelo
            td.text-center 166
            td.text-center 168
            td.text-center 170
            td.text-center 172
            td.text-center 174
            td.text-center 176
            td.text-center 2 cm
          tr
            td.text-center(colspan=2) Estatura Optima Cervical (Est. 7° C.)
            td.text-center 146
            td.text-center 148
            td.text-center 150
            td.text-center 152
            td.text-center 154
            td.text-center 156
            td.text-center 2 cm
          tr
            td.text-center(colspan=2) Talle
            td.text-center 43.8
            td.text-center 44.4
            td.text-center 45
            td.text-center 45.6
            td.text-center 46.2
            td.text-center 46.8
            td.text-center 0.6 mm
          tr
            td.text-center(colspan=2) Cuello
            td.text-center 29.4
            td.text-center 30.7
            td.text-center 32
            td.text-center 33.3
            td.text-center 34.6
            td.text-center 35.9
            td.text-center 1.3 cm
          tr
            td.text-center(colspan=2) Cintura suelo
            td.text-center 102.2
            td.text-center 103.6
            td.text-center 105
            td.text-center 106.4
            td.text-center 107.8
            td.text-center 109.2
            td.text-center 1.4 cm
          tr
            td.text-center(colspan=2) Largo brazo
            td.text-center 58.4
            td.text-center 59.2
            td.text-center 60
            td.text-center 60.8
            td.text-center 61.6
            td.text-center 62.4
            td.text-center 0.8 cm
          tr
            td.text-center(colspan=2) Base
            td.text-center 44
            td.text-center 46
            td.text-center 48
            td.text-center 50
            td.text-center 52
            td.text-center 54
            td.text-center 2 cm
          tr
            td.text-center(colspan=2) Tiro
            td.text-center 22
            td.text-center 23
            td.text-center 24
            td.text-center 25
            td.text-center 26
            td.text-center 27
            td.text-center 1 cm











                    
    Separador


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Medidas deducidas',
        texto:
          'Se construyen a partir de fórmulas matemáticas ya establecidas, obtenidas de estudios antropométricos realizados en países como España, donde la configuración del cuerpo es similar a la de la población latina. Dan como resultado, las medidas para construir cuadros de tallas, a partir de los cuales se pueden obtener las medidas y establecer el incremento o la diferencia que existe entre talla y talla, en los diferentes puntos de referencia del cuerpo humano.',
        imagen: require('@/assets/curso/tema1/img02.png'),
      },
      {
        titulo: 'Medidas deducidas',
        texto:
          'Se construyen a partir de fórmulas matemáticas ya establecidas, obtenidas de estudios antropométricos realizados en países como España, donde la configuración del cuerpo es similar a la de la población latina. Dan como resultado, las medidas para construir cuadros de tallas, a partir de los cuales se pueden obtener las medidas y establecer el incremento o la diferencia que existe entre talla y talla, en los diferentes puntos de referencia del cuerpo humano.',
        imagen: require('@/assets/curso/tema1/img02.png'),
      },
      {
        titulo: 'Medidas deducidas',
        texto:
          'Se construyen a partir de fórmulas matemáticas ya establecidas, obtenidas de estudios antropométricos realizados en países como España, donde la configuración del cuerpo es similar a la de la población latina. Dan como resultado, las medidas para construir cuadros de tallas, a partir de los cuales se pueden obtener las medidas y establecer el incremento o la diferencia que existe entre talla y talla, en los diferentes puntos de referencia del cuerpo humano.',
        imagen: require('@/assets/curso/tema1/img02.png'),
      },
      {
        titulo: 'Medidas deducidas',
        texto:
          'Se construyen a partir de fórmulas matemáticas ya establecidas, obtenidas de estudios antropométricos realizados en países como España, donde la configuración del cuerpo es similar a la de la población latina. Dan como resultado, las medidas para construir cuadros de tallas, a partir de los cuales se pueden obtener las medidas y establecer el incremento o la diferencia que existe entre talla y talla, en los diferentes puntos de referencia del cuerpo humano.',
        imagen: require('@/assets/curso/tema1/img02.png'),
      },
      {
        titulo: 'Medidas deducidas',
        texto:
          'Se construyen a partir de fórmulas matemáticas ya establecidas, obtenidas de estudios antropométricos realizados en países como España, donde la configuración del cuerpo es similar a la de la población latina. Dan como resultado, las medidas para construir cuadros de tallas, a partir de los cuales se pueden obtener las medidas y establecer el incremento o la diferencia que existe entre talla y talla, en los diferentes puntos de referencia del cuerpo humano.',
        imagen: require('@/assets/curso/tema1/img02.png'),
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
