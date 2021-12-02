<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Básico del vestido de baño femenino

    .row.justify-content-evenly.mb-4      
      .col-lg-5.d-flex.align-items-center
        div.mb-4          
          p.mb-4 Una de las prendas con mayor demanda en el mundo de la moda y de la confección, gracias a la utilidad y aceptación que tiene en el público usuario es el vestido de baño femenino. 
          h4.mb-0 Esta es otra de las prendas de vestir que ha evolucionado significativamente y del cual es muy importante conocer el proceso de desarrollo del modelo.
      .col-lg-5.col-8.px-5
        figure.mb-4
          img(src='@/assets/curso/tema8/img01.png') 

    p.mb-5 En el siguiente recurso estudie en detalle el proceso de desarrollo del modelo del traje de baño femenino (adultos).

    TabsC.color-primario
      .row.py-3.py-md-4.justify-content-center(titulo="Medidas")      
        .col-lg-3
          figure.mb-4
            img(src='@/assets/curso/tema8/img02.svg') 
        .col-lg-3.ps-5
          h4 Medidas
          p.mb-0 Tórax máximo<br>Pecho <br>Estatura 7ª C.<br>Cintura<br>Cadera<br>Porcentaje de elasticidad
      .row.py-3.py-md-4.justify-content-center(titulo="Espalda (I)")      
        .col-lg-7
          figure.mb-4
            img(src='@/assets/curso/tema8/img03.svg') 
        .col-lg-3.ps-5
          h4 Espalda (I)
          p.mb-0 1 = Punto de origen<br>1 - 2 = 3/10 de estatura 7ª C.<br>2 - 3 = 1/3 de cadera más 8 cm<br>3 - 4 = 1/5 de cadera<br>1 - 5 = 1/10 de estatura 7 ª C.<br>5 - 6 = 1 /5 de base<br>6 - 7 y 3 - 8 = ½ de base<br>Unir con recta 7 - 8<br>7 - 9 - 1 /10 de base<br>1 - 10 = a la distancia 6 - 9<br>Trazar recta uniendo los puntos 9 - 10<br>1 - 11 = 1/6 de pecho<br>1 - 12 = ¼ de la distancia 1 - 11<br>Trazar escote uniendo los puntos 11 - 12<br>10 - 13 = 1/10 de base
      .row.py-3.py-md-4.justify-content-center(titulo="Espalda (II)")    
        .col-lg-7
          figure.mb-4
            img(src='@/assets/curso/tema8/img04.svg') 
        .col-lg-3.ps-5
          h4 Espalda (II)
          p.mb-0  Trazar línea de hombro uniendo los puntos 11 - 13<br>2 -14 = 3 cm<br>Trazar línea recta uniendo los puntos 14 - 3 prolongando hasta el punto 16<br>3 - 16 = a la distancia 3 - 4 en el delantero<br>8 - 15 = ½ de la diferencia entre pecho y cadera<br>18 - 19 = ½ de la diferencia entre cintura y pecho menos 1 cm<br>Unir con curva los puntos 7 - 19 - 15<br>Escuadrar el punto 16 sobre la línea 14 - 16<br>16 - 17 = 1/10 de cadera menos 1 cm<br>Unir con curva suave 17 - 15
      .row.py-3.py-md-4.justify-content-center(titulo="Delantero (I)")   
        .col-lg-7
          figure.mb-4
            img(src='@/assets/curso/tema8/img05.svg') 
        .col-lg-3.ps-5
          h4 Delantero (I)
          p.mb-0 1 = punto de origen<br>1 - 2 = 3/10 de estatura 7ª C.<br>- 3 = 1/3 de cadera más 8 cm<br>3 - 4 = 1/5 de cadera<br>1 - 5 = 1/10 de estatura 7 ª C.<br>5 - 6 = 1 /5 de base<br>6 - 7 y 3 - 8 = ½ de base<br>7 - 9= 1/10 de base<br>1 -10 = a la distancia 6 - 9<br>Unir con recta 9 - 10<br>1 - 11 = 1 /6 de pecho<br>1 - 13 = a la distancia 1 - 11 más 3 cm<br>10-12 = 1/10 de base<br>Trazar línea de hombro uniendo los puntos 11 - 12<br>9 - 14 y 10 - 17 = 1/10 de la distancia 6 - 7
      .row.py-3.py-md-4.justify-content-center(titulo="Delantero (II)")     
        .col-lg-7
          figure.mb-4
            img(src='@/assets/curso/tema8/img06.svg') 
        .col-lg-3.ps-5
          h4 Delantero (II)
          p.mb-0  Trazar sisa uniendo los puntos 12 - 7 rozando la línea 14 - 17<br>8 - 15 = ½ de la diferencia entre pecho y cadera<br>4 - 16 = 1/10 de cadera menos 1cm<br>3 - 20 = 1/10 de cadera<br>18 - 19 = ½ de la diferencia entre cintura y pecho menos 1 cm<br>0 = ½ de la distancia 6 - 9<br>A 2 cm del punto 6 y haciendo centro en el punto 0 trazar una <br>circunferencia que delimite el área del busto


</template>

<script>
export default {
  name: 'Tema8',
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
