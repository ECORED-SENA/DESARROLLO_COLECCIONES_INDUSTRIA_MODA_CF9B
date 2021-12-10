<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Básico de <i>leggins</i>

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema11/img01.png') 
      .col-lg-6.d-flex.align-items-center
        p.mb-4 A continuación, el componente formativo muestra el desarrollo básico de <i>leggins</i>, otra prenda deportiva que se ha impuesto en los últimos años, a tal punto que, poco a poco, ha comenzado a traspasar el ámbito deportivo y las personas han comenzado a usarlos en otro tipo de ambientes y escenarios de la vida común.

    p.mb-5 Conozca el procedimiento para el desarrollo básico de <i>leggins</i>; preste atención a cada uno de ellos y procure llevar registro en su libreta personal de apuntes.
    
    ImagenInfograficaB.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema11/img02.png', alt='Texto que describa la imagen')          

      div(x="9.1%" y="27.2%" tooltip="Medidas" numero=" ")
        .row.justify-content-center
          .col-lg-3.d-flex.align-items-center
            div.mb-4
              h4 Medidas
              p.mb-0 Estatura 7ª C<br>Cintura<br>Cadera<br>Cintura al suelo<br>Rodilla<br>Bota (bajo)<br>Coeficiente de elasticidad 15%<br>Base = (Cadera X 100)/(100 + 15)
          .col-lg-3.col-5
            figure
              img(src='@/assets/curso/tema11/img03.png') 

      div(x="34.4%" y="54.5%" tooltip="Delantero y trasero" numero=" ")
        .row.justify-content-center
          .col-lg-4.d-flex.align-items-center
            div.mb-4
              h4 Delantero y trasero
              p.mb-0 A= punto de origen (intersección de dos líneas en forma de T)<br>A - B = ½ de cadera menos 2 cm<br>A - C = medida de cintura al suelo menos 5 cm<br>B - O y B - E = ½ de cadera más 1 cm<br>F = ½ de la distancia B - C<br>F -G = 5 cm
          .col-lg-3.col-5
            figure
              img(src='@/assets/curso/tema11/img04.png') 

      div(x="50.1%" y="54.5%" tooltip="Escuadrar" numero=" ")
        .row.justify-content-center
          .col-lg-4.d-flex.align-items-center
            div.mb-4
              h4 Escuadrar
              p.mb-0 Escuadrar el punto G hacia ambos lados encontrando la línea de rodilla<br>G - H = ½ de rodilla<br>G - 1 = ½ de rodilla más 2 cm para costura<br>C - J = ½ de bota<br>C - L = ½ de bota más 2 cm<br>D - M = 1/12 de cadera<br>8 - N = 1/3 de la distancia A - B menos 1.5 cm
          .col-lg-3.col-5
            figure
              img(src='@/assets/curso/tema11/img05.png') 

      div(x="62.3%" y="54.5%" tooltip="Escuadrar" numero=" ")
        .row.justify-content-center
          .col-lg-4.d-flex.align-items-center
            div.mb-4
              h4 Escuadrar
              p.mb-0 Escuadrar hacia ambos lados el punto N<br>Escuadrar el punto D<br>O = unión de los puntos N - D<br>Unir con curva O - M<br>E - P = 1/6 de cadera<br>P - Q= 1 cm<br>8 - R= ½ cm <br>Unir con línea recta los puntos R - Q
          .col-lg-3.col-5
            figure
              img(src='@/assets/curso/tema11/img06.png') 

      div(x="67.4%" y="35.1%" tooltip="Escuadrar el punto E" numero=" ")
        .row.justify-content-center
          .col-lg-4.d-flex.align-items-center
            div.mb-4
              h4 Escuadrar el punto E
              p.mb-0 S = Unión de los puntos A - E<br>S - T = 2 cm<br>E - U=½ cm<br>Unir con recta U - T y prolongar<br>T- V= 3 cm<br>Unir con línea curva los puntos Z con Q
          .col-lg-3.col-5
            figure
              img(src='@/assets/curso/tema11/img07.png') 

      div(x="81.2%" y="35.1%" tooltip="Unir" numero=" ")
        .row.justify-content-center
          .col-lg-4.d-flex.align-items-center
            div.mb-4
              h4 Unir
              p.mb-0 Unir con semicurva Q con 1<br>Unir con línea recta 1 - L y J - H<br>Unir con curva suave M - H<br>W = unión de los puntos A - D<br>W - X = 7 cm<br>V - Y= 7 cm<br>Unir con línea recta X - Y<br>Sobre la línea Y - X -Q dar 1 cm de costura
          .col-lg-3.col-5
            figure
              img(src='@/assets/curso/tema11/img08.png') 

    Separador


</template>

<script>
export default {
  name: 'Tema11',
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
