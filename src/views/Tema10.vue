<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Escalado del vestido de baño femenino

    .row.justify-content-evenly.mb-4      
      .col-lg-6.d-flex.align-items-center
        div.mb-4          
          p.mb-0 Es la unión de dos piezas, el panty y el corpiño. Se procede de la misma forma que en los escalados estudiados hasta este punto del componente formativo, teniendo en cuenta que se aplican los mismos incrementos, extraídos del cuadro de tallas.
      .col-lg-6.col-8.px-5
        figure.mb-4
          img(src='@/assets/curso/tema10/img01.png') 

    p.mb-5 Para realizar el proceso de escalado manual de esta prenda se deben tener en cuenta dos fases importantes: la preparación del escalado y, con ello, el escalado mismo.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .tarjeta.tarjeta--gris(style="background-color: #FAFAFA").p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Paso 01")
          .col-lg-4
          .col-lg-1.col-3
            figure.mb-4
              img(src='@/assets/curso/tema10/img02.svg') 
          .col-lg-1            
          .col-lg-4.d-flex.align-items-center
            p.mb-0 Trazar el molde básico sobre el papel, con sus líneas de construcción, es muy importante que cada pieza tenga bien definidas las líneas, los ángulos, el hilo de la tela, esto es definitivo para el desarrollo del escalado ya que los trazos y proyecciones se escuadran con base a estas líneas.
          .col-md-2            

        .row.justify-content-center(titulo="Paso 02")
          .col-lg-1
          .col-lg-5.col-12
            figure.mb-4
              img(src='@/assets/curso/tema10/img03.png')           
          .col-lg-4.d-flex.align-items-center
            p.mb-0 Extraer los incrementos del cuadro de tallas.
          .col-md-2    

        .row.justify-content-center(titulo="Paso 03")
          .col-lg-2
          .col-lg-4.col-10
            figure.mb-4
              img(src='@/assets/curso/tema10/img04.png')           
          .col-lg-4.d-flex.align-items-center
            p.mb-0 Del cuadro de tallas normalizado, se trabaja con la talla 10, como talla base y se determina cuantas tallas superiores e inferiores se van a escalar, que no superen las 3 tallas hacia fuera, con el fin de conservar la forma del molde.
          .col-md-2   

        .row.justify-content-center(titulo="Paso 04")
          .col-lg-4
          .col-lg-1.col-3
            figure.mb-4
              img(src='@/assets/curso/tema10/img05.png') 
          .col-lg-1            
          .col-lg-4.d-flex.align-items-center
            p.mb-0 Determinar las medidas que se necesitan de acuerdo con la prenda a trabajar, en este caso se necesitan los incrementos de: cintura, cadera, largo de tiro o altura de cadera, pecho, talle, largo de hombro y cuello.
          .col-md-2 

        .row.justify-content-center(titulo="Paso 05")
          .col-lg-2
          .col-lg-4.col-10
            figure.mb-4
              img(src='@/assets/curso/tema10/img06.png')           
          .col-lg-4.d-flex.align-items-center
            p.mb-0 El incremento por aplicar en cada una de estas medidas es la diferencia entre talla y talla según el cuadro de tallas normalizado:<br>Cintura= 2 cm en el semi perímetro<br>Cadera= 2 cm en el semi/perímetro<br>Largo de Tiro o Altura de cadera= 1 cm en total<br>Pecho= 2cm en el semi/perímetro <br>Talle= 0.6 mm<br>Largo de hombro= 0.5 mm<br>Cuello= 0.3 mm
          .col-md-2   
    
        .row.justify-content-center(titulo="Paso 06")
          .col-lg-1
          .col-lg-5.col-12
            figure.mb-4
              img(src='@/assets/curso/tema10/img07.png')           
          .col-lg-4.d-flex.align-items-center
            p.mb-0 Estas medidas se dividen de acuerdo con el número de piezas a escalar, en este caso tenemos la ½ de un frente y la ½ de una espalda, se reparten de tal forma que queden equilibradas en los diferentes puntos que tiene el molde, normalmente en los ángulos.
          .col-md-2    
    Separador


</template>

<script>
export default {
  name: 'Tema10',
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
