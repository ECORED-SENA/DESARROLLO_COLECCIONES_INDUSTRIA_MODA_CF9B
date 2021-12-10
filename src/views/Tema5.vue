<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Básicos del <i>brasier</i> y principiante de niña

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema5/img01.png') 
      .col-lg-6.d-flex.align-items-center
        p.mb-4 El <i>brasier</i>, los principiantes y el top son prendas superiores, es decir, su uso se aplica en la parte superior del cuerpo de las personas. Su escalado, al igual que las prendas de la zona inferior, tiene una mecánica que se debe seguir para generar las tallas adecuadas y lograr, desde luego, los patrones respectivos. Para este proceso se requieren los materiales básicos como la escuadra de 60°, la curva de cadera, curvígrafo, sisómetro, compás divisional, cinta métrica, tijeras, lápices, marcadores y compás convencional.

    p.mb-5 A continuación, estudie el proceso de escalado para base de <i>brasier</i> (corpiño).

    .row.justify-content-center.t5-linea-tiempo.mb-5
      .col-lg-10
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="Paso 01")     
            .col-lg-5.col-8    
              figure
                img(src='@/assets/curso/tema5/img02.svg')    
            .col-lg-5
              h4.mb-1 Medidas
              p.mb-0 Tórax máximo<br>Pecho<br>estatura 7ª C<br>Cintura<br>Base<br>Porcentaje de elasticidad<br>Base = Base x 100<br>100 + 15%<br>Delantero y Espalda

          .row.justify-content-center(numero="2" titulo="Paso 02")    
            .col-lg-5.col-8    
              figure
                img(src='@/assets/curso/tema5/img03.svg')    
            .col-lg-5
              h4.mb-1 Base del <i>Brasier</i> (corpiño)
              p.mb-4 7 - 8= 1/10 de base<br>1 - 9 = 1 /6 de base<br>1 - 10 = ¼ de 1 - 9<br>11 = ½ de la distancia 6 - 8<br>11 - 12 = 1 cm

              h4.mb-1 Se curva la sisa uniendo los puntos 8 - 12 - 5
              p.mb-0 2 - 13 = a la distancia 4 - 5<br>5 - 14 y 13 - 16 = ½ de base<br>15 - 19 y 15 - 20 = 1 /6 de base
 
          .row.justify-content-center(numero="3" titulo="Paso 03")  
            .col-lg-5.col-8    
              figure
                img(src='@/assets/curso/tema5/img04.svg')    
            .col-lg-5
              h4.mb-1 Base del <i>Brasier</i> (corpiño)
              p.mb-4 7 - 8= 1/10 de base<br>1 - 9 = 1 /6 de base<br>1 - 10 = ¼ de 1 - 9<br>11 = ½ de la distancia 6 - 8<br>11 - 12 = 1 cm

              h4.mb-1 Se curva la sisa uniendo los puntos 8 - 12 - 5
              p.mb-0 2 - 13 = a la distancia 4 - 5<br>5 - 14 y 13 - 16 = ½ de base<br>15 - 19 y 15 - 20 = 1 /6 de base      
          .row.justify-content-center(numero="4" titulo="Paso 04")    
            .col-lg-5.col-8    
              figure
                img(src='@/assets/curso/tema5/img05.svg')    
            .col-lg-5
              h4.mb-1 Base del <i>Brasier</i> (corpiño)
              p.mb-0 Se curva el escote uniendo los puntos 19 - 20<br>5 – 17 y de18 - 21 = 1/10 de base<br>18 - 22 y de 17 -23 = 1/10 de la distancia 14 -17<br>Trazar sisa uniendo los puntos 21 - 5<br>24 = ½ de la distancia 14 - 17<br>24 - 25 = 1/10 de la distancia 1 - 4    
          .row.justify-content-center(numero="5" titulo="Paso 05") 
            .col-lg-5.col-8    
              figure
                img(src='@/assets/curso/tema5/img06.svg')    
            .col-lg-5
              h4.mb-1 Base del <i>Brasier</i> (corpiño)
              p.mb-0 En el punto 25 con un radio igual a la distancia 14 - 24 menos 2 cm, trazar circunferencia que nos demarca la ubicación del pecho.<br>Para <i>brasier</i> la prenda de 2 - 32, 13 - 30 y 13 - 31 es igual a 1/3 de la diferencia de cintura y pecho.
          .row.justify-content-center(numero="6" titulo="Paso 06")          
            .col-lg-5.col-8    
              figure
                img(src='@/assets/curso/tema5/img07.svg')    
            .col-lg-5
              h4.mb-1 Base del <i>Brasier</i> (corpiño)
              p.mb-0 En el punto 25 con un radio igual a la distancia 14 - 24 menos 2 cm, trazar circunferencia que nos demarca la ubicación del pecho.<br>Para <i>brasier</i> la prenda de 2 - 32, 13 - 30 y 13 - 31 es igual a 1/3 de la diferencia de cintura y pecho.

    .row.justify-content-center
      .col-lg-3.col-6.px-3        
        a.lnk(@click="modal1 = true")          
          .row.justify-content-center.t1-div1.py-3
            .col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema5/img08.svg') 
            .col-6.d-flex.align-items-center
              h4.mb-0 <b>Desarrollo de copas</b>
          
      .col-lg-3.col-6.px-3
        a.lnk(@click="modal2 = true")          
          .row.justify-content-center.t1-div1.py-3
            .col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema5/img09.svg') 
            .col-6.d-flex.align-items-center
              h4.mb-0 <b>Principiante de niñas</b>
              
      .col-lg-3.col-6.px-3
        a.lnk(@click="modal3 = true")          
          .row.justify-content-center.t1-div1.py-3
            .col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema5/img10.svg') 
            .col-6.d-flex.align-items-center
              h4.mb-0 <b><i>Brasier</i> tipo <i>bikini</i></b>

    ModalA(:abrir-modal.sync="modal1")
      SlyderA
        .row.justify-content-evenly
          .col-lg-4.d-flex.align-items-center
            div.mb-4
              h4 Base
              p.mb-0 Se toma como base el círculo que delimita el área del busto.<br>1 - 2 = Diferencia entre pecho y tórax máximo más su mitad multiplicado por π (3.1416) haciendo centro en el punto 0 trazar una circunferencia tomando como radio la distancia 0 – 2.        
          .col-lg-4.col-6.d-flex.align-items-center
            figure
              img(src='@/assets/curso/tema5/img11.svg') 
        .row.justify-content-evenly
          .col-lg4.d-flex.align-items-center
            div.mb-4
              h4 Vaciado
              p.mb-0 El vaciado de la pinza es igual a tres veces la diferencia entre pecho y tórax máximo, multiplicado por π (3.1416)<br>Ejemplo: Diferencia entre tórax máximo y pecho es de 2 cm x 3 = 6 cm <br>6 x 3.1416= 18.8<br>Vaciado de pinza igual a 18. 8
          .col-lg-4.col-6.d-flex.align-items-center
            figure
              img(src='@/assets/curso/tema5/img12.svg') 
        
        .row.justify-content-evenly
          .col-lg-9              
            h4 Incremento de medida
            p.mb-5 El vaciado de la pinza se reparte según diseño, en los cortes se incrementa la medida de costura.<br>Copa Nº 1, Copa N° 2, Copa N°3                            
            div.d-flex.justify-content-center
              figure.w-75
                img(src='@/assets/curso/tema5/img13.svg') 

    ModalA(:abrir-modal.sync="modal2")
      SlyderA      
        .row.justify-content-center
          .col-lg-6.col-10.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img14.svg') 
          .col-lg-3.d-flex.align-items-center
            div.px-4
              h4 Delantero
              p.mb-0 1 = punto de origen<br>1 -2 = 10.5 cm<br>Escuadrar los puntos 1 y 2<br>1 - 3 y 2 - 4 = 19 cm<br>Unir con recta 3 - 4<br>2 - 5 y 4 - 6 = 0.5 cm<br>2 - 7 = 3.5 cm<br>4 - 8 = 5 cm<br>Unir con recta 5 - 7 y 6 - 8<br>1 - 9 y 2 - 10 = 10 cm<br>Unir con recta 9 - 10 <br>9- 11= 3 cm
          
        .row.justify-content-center
          .col-lg-6.col-10.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img15.svg') 
          .col-lg-3.d-flex.align-items-center
            div.px-4
              h4 Escuadrar
              p.mb-0 Escuadrar hacia ambos lados el punto 11 tomando como guía la línea 9 - 10<br>11 - 12 y 11 - 13 = 5 cm<br>Unir con curva 7 - 9 pasando por el punto 13 y 9 - 8 pasando por el punto 12
          
        .row.justify-content-center
          .col-lg-6.col-10.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img16.svg') 
          .col-lg-3.d-flex.align-items-center
            div.px-4
              h4 Variación
              p.mb-0 Trazar el rectángulo de la base delantera con sus líneas de construcción<br>Tomar la base delantera y cortarla por la línea 10 - 9 hasta 2 mm antes del punto 9<br><br>Dar una amplitud de 3 cm.

        .row.justify-content-center
          .col-lg-6.col-10.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img17.svg') 
          .col-lg-3.d-flex.align-items-center
            div.px-4
              h4 Pinza
              p.mb-0 En la línea de centro trazar una pinza con un vaciado igual a la amplitud con una profundidad de 5 cm (repartir el vaciado de la pinza en partes iguales).<br><br>Unir con curva suave la línea del bajo y marcar piquetes en las líneas de la pinza.

        .row.justify-content-center
          .col-lg-6.col-10.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img18.svg') 
          .col-lg-3.d-flex.align-items-center
            div.px-4
              h4 Espalda
              p.mb-0 A= punto de origen<br>A – B = 5 cm<br>Escuadrar el punto B<br>8 - C = 14 cm<br>Escuadrar el punto C<br>C - 0 = 3.5 cm<br>Unir con curva A - D según gráfico<br>Para ubicar las cargaderas D - E= 6.5 cm<br>Marcar piquete en el punto E

    ModalA(:abrir-modal.sync="modal3")
      SlyderA      
        .row.justify-content-center
          .col-lg-4.col-5.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img19.svg') 
          .col-lg-4.d-flex.align-items-center
            div.px-4
              h4 Medidas
              p.mb-0 Tórax máximo<br>Pecho<br>Estatura 7ª C<br>Cintura<br>Base<br>Porcentaje de elasticidad 15 %<br>Delantero y Espalda

        .row.justify-content-center
          .col-lg-4.col-5.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img20.svg') 
          .col-lg-4.d-flex.align-items-center
            div.px-4             
              p.mb-0 1 = Punto de origen<br>1 - 2 = 3/10 de pecho más 10 cm<br>2 - 3 = a dos veces la diferencia de pecho y tórax máximo<br>3 - 4 = ½ de base (sin desahogo o según él % de elasticidad) ·
 
        .row.justify-content-center
          .col-lg-4.col-5.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img21.svg') 
          .col-lg-4.d-flex.align-items-center
            div.px-4             
              p.mb-0 4 - 5 = 1 /10 de base<br>1 - 0 = a dos veces la diferencia entre pecho y tórax máximo<br>6 = ½ de la distancia 2 - 5<br>2 - 7 y 5 - 8 = a la distancia 1 - 0<br>Se escuadran los puntos 7 - 6 - 12

        .row.justify-content-center
          .col-lg-4.col-5.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img22.svg') 
          .col-lg-4.d-flex.align-items-center
            div.px-4             
              p.mb-0 Trazar recta 6 - 8 encontrando el punto 9<br>6 - 9 = a la distancia 6 - 4<br>Escuadrar los puntos 9 - 6 - 11<br>6 - 11 y 6 - 12 = a la distancia 2 - 6<br>13 = se encuentra escuadrando los puntos 12 - 6

        .row.justify-content-center
          .col-lg-4.col-5.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img23.svg') 
          .col-lg-4.d-flex.align-items-center
            div.px-4             
              p.mb-0 Escuadrar los puntos 6 - 9 - 10<br>9 - 10 = a la distancia 6 - 11<br>Unir con recta 9 - 10<br>0 - 14 = a la distancia 3 - 5<br>14 - 15 = 1/10 de base<br>0 - 16 = 1/10 de pecho más 2 cm<br>11 - 18 y 12 - 19 = Diferencia entre pecho y tórax máximo

        .row.justify-content-center
          .col-lg-4.col-5.d-flex.align-items-center
            figure.mb-4
              img(src='@/assets/curso/tema5/img24.svg') 
          .col-lg-4.d-flex.align-items-center
            div.px-4             
              p.mb-0 Unir los puntos 18 - 6 - 19 con línea curva como lo muestra el gráfico<br>A 2 cm del punto 2 y haciendo centro en el punto 6 trazar una circunferencia que delimite el área del busto.

    Separador


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
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
