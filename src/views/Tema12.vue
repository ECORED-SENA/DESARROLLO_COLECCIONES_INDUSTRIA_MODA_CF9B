<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Básico interior masculino

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema12/img01.png') 
      .col-lg-6.d-flex.align-items-center
        p.mb-4 Para estudiar el básico de la ropa interior masculina cabe resaltar que, al igual que con la ropa femenina, las prendas de uso íntimo en hombres han ido evolucionando con el paso de los años y que, en el mismo sentido, cada diseño requiere atención especial a las nuevas necesidades de uso, comodidad, practicidad, higiene, economía, entre otras, que marcan la demanda de los mismos.

    .row.justify-content-center.mb-5
      .col-lg-5.col-6
        a.lnk(@click="modal1 = true")    
          .row.justify-content-center.t12-div1.py-3        
            .col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema12/img02.svg') 
            .col-8.d-flex.align-items-center
              h4.mb-0 <b>Cuadro de tallas normalizado</b><br>Pantalones y burmudas

    ModalA.modal2-t5(:abrir-modal.sync="modal1")
      h2.mb-2 Cuadro de tallas normalizado para pantalones y burmudas      
      .tabla-a.color-acento-contenido(style="background-color: white")
              table
                thead
                  tr
                    th Medidas/tallas	
                    th 28	
                    th 30	
                    th 32	
                    th 34	
                    th 36	
                    th 38	
                    th 40	
                    th Incremento                     
                tbody
                  tr
                    th S/P de cintura	
                    td.text-end 36	
                    td.text-end 38.5	
                    td.text-end 41	
                    td.text-end 43.5	
                    td.text-end 46	
                    td.text-end 48.5	
                    td.text-end 51	
                    td.text-end 2.5 cm                    
                  tr
                    th S/P de cadera
                    td.text-end 46.5	
                    td.text-end 49	
                    td.text-end 51.5	
                    td.text-end 54	
                    td.text-end 56.5	
                    td.text-end 59	
                    td.text-end 61.5	
                    td.text-end 2.5 cm
                  tr
                    th Cintura al suelo	
                    td.text-end 100.5	
                    td.text-end 102	
                    td.text-end 103.5	
                    td.text-end 105	
                    td.text-end 106.5	
                    td.text-end 108	
                    td.text-end 109.5	
                    td.text-end 1.5 cm
                  tr
                    th Largo total	
                    td.text-end 105	
                    td.text-end 106.5	
                    td.text-end 108	
                    td.text-end 109.5	
                    td.text-end 111	
                    td.text-end 112.5	
                    td.text-end 114	
                    td.text-end 1.5 cm
                  tr
                    th Bajo	
                    td.text-end 20	
                    td.text-end 21	
                    td.text-end 22	
                    td.text-end 23	
                    td.text-end 24	
                    td.text-end 25	
                    td.text-end 26	
                    td.text-end 1 cm
                  
    p.mb-5 Ahora, conozca el procedimiento para el desarrollo del básico del interior masculino (adulto).

    div.tema12
      TabsA.color-acento-contenido.mb-5        
        .tarjeta.tarjeta--gris.p-5(titulo="Paso 1: Medidas")
          .row.justify-content-center
            .col-lg-4
              div.mb-4
                h4 Medidas
                p.mb-0 Talla 32<br>Cadera<br>Base = (Cadera X 100)/(100 + % de elasticidad)
            .col-lg-6.col-8
              figure
                img(src='@/assets/curso/tema12/img03.png') 
        .tarjeta.tarjeta--gris.p-5(titulo="Paso 2: Delantero")
          .row.justify-content-center
            .col-lg-4
              div.mb-4
                h4 Delantero
                p.mb-0 1 = punto de origen<br>1 - 2 y 2 - 3 = ½ de base<br>Escuadrar los puntos 1, 2 y 3<br>1 - 4 y 2 - 5 = ½ de base<br>Unir con recta 4 - 5<br>3 - 6 = 1/10 de base más 1 cm<br>5 - 7 = ½ de la distancia 6 - 5
            .col-lg-6.col-9
              figure
                img(src='@/assets/curso/tema12/img04.svg') 
        .tarjeta.tarjeta--gris.p-5(titulo="Paso 3: Escuadrar")
          .row.justify-content-center
            .col-lg-4
              div.mb-4
                h4 Escuadrar
                p.mb-0 Escuadrar el punto 7<br>7- 8 = 2 a 4 cm<br>Unir con curva 5 - 6 pasando por el punto 8<br>1 - 9 = 1/10 de la distancia 1 - 4<br>Unir con curva suave 9 – 4<br>g - 10 = a la distancia 1 - 9<br><br>Unir con recta 10 - 8<br>Escuadrar sobre la línea 1 - 3 el punto 8 encontrando el punto 11 límite de la pinza del refuerzo
            .col-lg-6.col-9
              figure
                img(src='@/assets/curso/tema12/img05.svg') 
        .tarjeta.tarjeta--gris.p-5(titulo="Paso 4: Trasero")
          .row.justify-content-center
            .col-lg-10
              h4 Trasero              
              .row.justify-content-center
                .col-lg-6
                  div.mb-4               
                    p.mb-0 A = Punto de origen<br>A - B y B - C = ½ de base<br>Escuadrar los puntos A, B y C<br>A - B y B - F = ½ de base
                .col-lg-6
                  div.mb-4               
                    p.mb-0 Unir con recta E - F<br>C -G = a la distancia 3 - 6 en el delantero<br>H = ½ de la distancia F - G<br>Escuadrar el punto H<br>H - I' = 1 a 2.5 cm<br>I' - 1 = 3 cm
              .row.justify-content-center
                .col-lg-6.col-10                  
                  figure.mb-4
                    img(src='@/assets/curso/tema12/img06.svg') 
                .col-lg-6.col-10                  
                  figure.mb-4
                    img(src='@/assets/curso/tema12/img07.svg') 
              
        .tarjeta.tarjeta--gris.p-5.mb-5(titulo="Paso 5: Unir")
          .row.justify-content-center
            .col-lg-10
              h4 Unir              
              .row.justify-content-center
                .col-lg-6
                  div.mb-4               
                    p.mb-0 Unir con curva suave F - G pasando por el punto 1<br>A - J = 1/10 de la distancia A - E<br>Unir con curva suave J - E<br>B - K = 1/3 de la distancia B - C más 2 cm
                .col-lg-6
                  div.mb-4               
                    p.mb-0 Trazar línea de refuerzo uniendo los puntos K -1<br>El refuerzo queda conformado por los puntos 9 - 10, 9 - 8, 8 - 6, 6 - 3, C - G, G- l, l - K.<br>El refuerzo va doble
              
              .row.justify-content-center
                .col-lg-6.col-10                  
                  figure.mb-4
                    img(src='@/assets/curso/tema12/img08.svg') 
                .col-lg-6.col-10                  
                  figure.mb-4
                    img(src='@/assets/curso/tema12/img09.svg') 
        .tarjeta.tarjeta--gris.p-5(titulo="¡Importante!")
          .row.justify-content-center
            .col-lg-10
              h4 ¡Importante!              
              p.mb-4 Todas las acciones para el desarrollo básico de cualquier prenda, además de poderse realizar de manera manual, también pueden ser desarrolladas en <i>softwares</i> especializados como <i>Optitex</i> – <i>Corel</i>.
              figure
                img(src='@/assets/curso/tema12/img10.svg') 
    

    .row.justify-content-center
      .col-lg-5
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/Anexo6_Interior_Masculino.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Explore las variaciones aplicadas al básico de interior masculino infantil, analizando la información del Anexo 6 Básico Interior Masculino Infantil.

    Separador


</template>

<script>
export default {
  name: 'Tema12',
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
