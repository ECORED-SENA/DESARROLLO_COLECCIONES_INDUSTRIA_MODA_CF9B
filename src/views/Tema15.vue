<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 15
      h1 Básico camiseta <i>T-shirt</i> masculina y variación a camisilla

    .row.justify-content-evenly.mb-4      
      .col-lg-6.d-flex.align-items-center
        div.mb-4          
          p.mb-0 Las camisetas conocidas en otros lugares del mundo como poleras, remeras o playeras son una de las prendas con mayor uso, ya que son portadas en todo tipo de contextos, lugares, ocasiones, climas, culturas. Las camisetas en cualquiera de sus variaciones de diseño cuentan como todas las prendas con un básico para su desarrollo.
      .col-lg-6.col-8.px-5
        figure.mb-4
          img(src='@/assets/curso/tema15/img01.png') 

    .row.justify-content-center
      .col-lg-5.col-6
        a.lnk(@click="modal1 = true")    
          .row.justify-content-center.t12-div1.py-3        
            .col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema15/img08.svg') 
            .col-8.d-flex.align-items-center
              h4.mb-0 <b>Cuadro de tallas normalizado</b><br>Camisas y chaquetas

    ModalA.modal2-t5(:abrir-modal.sync="modal1")
        div.BorTit.mb-3          
          i.mb-0  Cuadro de tallas normalizado para camisas y chaquetas
        .tabla-a.color-acento-contenido(style="background-color: white")
              table
                thead
                  tr
                    th Medidas/tallas	
                    th 34 - XS	
                    th 36 - S	
                    th 38 - M	
                    th 40 - L	
                    th 42 - XL	
                    th 44 - XXL	
                    th 46 - XLL	
                    th INCREMENTO
                    
                tbody
                  tr
                    th Contorno de cuello	
                    td.text-center 34	
                    td.text-center 36	
                    td.text-center 38	
                    td.text-center 40	
                    td.text-center 42	
                    td.text-center 44	
                    td.text-center 46	
                    td.text-center 2 cm
                  tr
                    th S/P pecho	
                    td.text-center 42.5	
                    td.text-center 45	
                    td.text-center 47.5	
                    td.text-center 50	
                    td.text-center 52.5	
                    td.text-center 55	
                    td.text-center 57.5	
                    td.text-center 2.5 cm
                  tr
                    th S/P de cintura	
                    td.text-center 36	
                    td.text-center 38.5	
                    td.text-center 41
                    td.text-center 43.5	
                    td.text-center 46	
                    td.text-center 48.5	
                    td.text-center 51	
                    td.text-center 2.5 cm
                  tr
                    th S/P de cadera	
                    td.text-center 46.5	
                    td.text-center 49	
                    td.text-center 51.5	
                    td.text-center 54	
                    td.text-center 56.5
                    td.text-center 59	
                    td.text-center 61.5	
                    td.text-center 2.5 cm
                  tr
                    th Estatura total	
                    td.text-center 168	
                    td.text-center 170	
                    td.text-center 172	
                    td.text-center 174	
                    td.text-center 176	
                    td.text-center 178	
                    td.text-center 180	
                    td.text-center 2 cm
                  tr
                    th  Estatura 7ª C.	
                    td.text-center 144	
                    td.text-center 146	
                    td.text-center 148	
                    td.text-center 150	
                    td.text-center 152	
                    td.text-center 154	
                    td.text-center 156	
                    td.text-center 2 cm
                  tr
                    th Largo del brazo	
                    td.text-center 57.6	
                    td.text-center 58.4	
                    td.text-center 59.2	
                    td.text-center 60	
                    td.text-center 60.8	
                    td.text-center 61.6	
                    td.text-center 62.4	
                    td.text-center 0.8 mm
                  tr
                    th Talle	
                    td.text-center 43.5	
                    td.text-center 44	
                    td.text-center 44.5	
                    td.text-center 45	
                    td.text-center 45.5	
                    td.text-center 46	
                    td.text-center 46.5	
                    td.text-center 0.5 mm
                  tr
                    th Contorno de muñeca	
                    td.text-center 16	
                    td.text-center 16.6	
                    td.text-center 17.2	
                    td.text-center 17.8	
                    td.text-center 18.4	
                    td.text-center 19	
                    td.text-center 19.6	
                    td.text-center 0.6 mm


                    

    Separador

    #t_15_1.titulo-segundo.color-acento-contenido
      h2 15.1 Camiseta <i>T-shirt</i> masculino

    p.mb-5 Este es el desarrollo del básico de camiseta <i>T-Shirt</i> masculino:

    .tabla-b.color-primario.mb-5
      .tabla-b__header
        h4.mb-0 Camiseta <i>T-shirt</i> masculino
      table        
        tr
          th.w-50
            p.mb-4 Se desarrolla tomando como base los patrones de la camisa clásica, teniendo en cuenta marcar una talla más al nuevo molde, por ejemplo, si la base de camisa es talla 38/M se marcará como talla 40/L.
            p.mb-0 Es muy importante tener en cuenta el porcentaje de elasticidad del tejido cuando se desarrolla una camiseta. La base delantera se marca sin cruce y sin falso, con el costado recto se trazan nuevamente las curvas de la sisa (con curva suave), por la flexibilidad del tejido.
          td 
            figure
              img(src='@/assets/curso/tema15/img02.png') 
        tr
          th.w-50
            p.mb-4 Para desarrollar el cuello, el cual va en <i>reeb</i> o en el mismo tejido, a las bases delantera y espalda por la línea de escote se le descuentan de 2 a 3 cm para que pueda entrar la cabeza cómodamente. 
            p.mb-1 Trazar el escote en las bases.
            p.mb-0 El cuello es igual al perímetro del escote, menos el porcentaje de elasticidad del tejido por el ancho de 7 cm o según diseño.
          td 
            figure
              img(src='@/assets/curso/tema15/img03.png') 

        tr
          th.w-50
            p.mb-4 Para desarrollar la manga de la camiseta se toma como base el patrón de la camisa, se debe tener en cuenta el nuevo perímetro de sisa, corregir la copa de la manga con curvas muy suaves como lo indica el gráfico. 
            p.mb-0 El bajo de la manga puede ir más ajustado.
          td 
            figure
              img(src='@/assets/curso/tema15/img04.png') 

    #t_15_2.titulo-segundo.color-acento-contenido
      h2 15.2 Camisilla masculino

    p.mb-4 La camisilla es una de las variaciones que tiene el básico camiseta <i>T-Shirt</i>. Es generalmente usada como prenda de protección contra el viento, el sudor o la exposición de la piel a ciertos tipos de telas con las que se confeccionan camisas y camisetas. Otro de los usos más frecuentes de los últimos años se da en la práctica de gimnasia o culturismos, dada la comodidad que ofrecen para ejecutar movimientos de fuerza en brazos y tren superior.
    p.mb-5 Este es el desarrollo del básico de la variación a camisilla, línea masculina:

    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        h4.mb-0.texto-blanco Camisilla masculina
      table        
        tr
          th.w-50            
            p.mb-0 Medidas<br>Talla<br>Pecho<br>Cuello<br>Talle<br>Estatura 7ª C<br>Base = (Pecho X 100)/(100 + % elasticidad)
          td 
            figure
              img(src='@/assets/curso/tema15/img05.png') 
        tr
          th.w-50            
            p.mb-0 Delantero y espalda<br>1 = punto de origen<br>1 - 2 = 3/10 de pecho más 8 cm<br>1 - 3 = Medida de talle<br>1 - 4 = largo de la camisilla (½ de estatura 7ª C.)<br>Escuadrar los puntos 1, 2, 3 y 4<br>1 - 5 y 4 - 6 = ½ de base más la medida de costura según máquina<br>Unir con recta 5 - 6 encontrando los puntos 7 y 8<br>7 - 9 = 3.5 cm o según diseño<br>1 - 10 = 1/6 de cuello<br>10 - 11 = Ancho de hombro 5 a 7 cm o según diseño<br>1 - 12 = ½ de la distancia 1 - 2
          td 
            figure
              img(src='@/assets/curso/tema15/img06.png') 

        tr
          th.w-50            
            p.mb-0 Unir con curva 10 - 12 quedando dibujado el escote de la base delantera<br>1 - 13 = ½ de la distancia 1 - 12<br>Unir con curva suave 10 - 13 quedando dibujado el escote de la base espalda<br>Escuadrar el punto 11<br>11 - 14 = 1.5 cm<br>Unir con recta 10 - 14<br>Trazar sisa uniendo con línea curva los puntos 14 - 9 de tal forma que haya diferencia entre la sisa delantera y la sisa espalda, como lo indica el gráfico o según diseño.
          td 
            figure
              img(src='@/assets/curso/tema15/img07.png') 

    Separador


</template>

<script>
export default {
  name: 'Tema15',
  data: () => ({
    modal1: false,
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
