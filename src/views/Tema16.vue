<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 16
      h1 Sudadera masculino

    .row.justify-content-center.mb-4
      .col-lg-5.col-8.px-0
        figure.mb-lg-0.mb-4
          img(src='@/assets/curso/tema16/img01.png') 
      .col-lg-5.d-flex.align-items-center.p-3(style="background-color: #F2D6E3")
        div
          p.mb-0 La sudadera concebida como el pantalón deportivo con el que miles de personas en el mundo realizan la práctica deportiva: trote, caminata, gimnasia y, en general, cualquier modalidad de actividad física, cuenta con un modelo específico de desarrollo para el que, desde luego, se tiene en cuenta el cuadro de tallas normalizado.


    p.mb-5 Este es el desarrollo de pantalón deportivo, conocido también como sudadera o <i>jogging</i>.

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

    div.BorTit.mb-3          
      i.mb-0 Cuadro de tallas normalizado para pantalones y bermudas
    .tabla-a.color-acento-contenido.mb-5 
      table      
        thead
          tr
            th(colspan=2) 
              h4.mb-0 Sudadera o <i>jogging</i>            
        tbody
          tr
            td.w-50(style="vertical-align: top;")               
                h4.mb-1 Medidas    
                p.mb-5 Talla<br>Cintura<br>Cadera<br>Largo total<br>Bota<br>

                h4.mb-1 Delantero y trasero
                p.mb-5 A = punto de origen<br>A - B = ½ de cadera más 4 cm<br>A - C = largo total<br>Escuadrar hacia ambos lados los puntos A, B y C<br>A - E y A - F = ½ de cintura más 2 cm<br>B - H y B - G = ½ de cadera más 6 cm<br>G - 1 y H - J = 1/10 de cadera menos 1.5 cm<br>Unir con recta J - F y E - 1<br>F - K y E - L = 2 cm<br>M = ½ de la distancia F - J<br>N = ½ de la distancia E - 1<br>195<br>Trazar línea de tiro delantero uniendo los puntos G - N - L prolongando hasta el punto O (uniendo con recta N - L, y con curva N - G)<br>H - P = 2.5 cm<br>Trazar línea de tiro trasero uniendo los puntos P - M - K prolongando hasta el punto Q (uniendo con recta M - K y con curva M - P)<br>A - R y L - O = 2 veces el ancho del elástico<br>Unir con recta R - O<br>K - Q = a la distancia L - O más el levante de la sudadera 2.5 cm<br>Unir con recta Q con R suavizando el ángulo formado en el punto R<br>C -S y C - T = Medida de bota<br>Unir con recta S - G prolongando hasta el punto U y T - P prolongando hasta el punto Ñ<br>S - U y T - Ñ = medida para dobladillo (medida del ancho del elástico), si la sudadera lleva el bajo en tejido elástico (<i>reeb</i>) no se aplica esta medida.<br>Unir con recta U - Ñ<br>G - X y P - E = 25 cm<br>Escuadrar los puntos W y X<br>X - Z= 1.5 cm<br>W - Y = 3 cm<br>Unir con curva suave G - Z y P - Y<br>Unir con recta Y - T y Z - S<br>

                h4.mb-1 Nota
                p.mb-5 La base de la sudadera no lleva costura en el costado. Si se desea con costura en el costado, separar el molde por la línea de aplomo, dar las costuras correspondientes según máquina y trazar nuevamente la línea de aplomo.
            td.w-50 
              figure.mb-4
                img(src='@/assets/curso/tema16/img02.png') 
              figure.mb-4
                img(src='@/assets/curso/tema16/img03.png') 
              figure.mb-4
                img(src='@/assets/curso/tema16/img04.png') 

    Separador


</template>

<script>
export default {
  name: 'Tema16',
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
