<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 17
      h1 Pantaloneta masculino

    .row.justify-content-center.mb-4
      .col-lg-5.d-flex.align-items-center.p-3.mb-lg-0.mb-4(style="background-color: #D6EBFB")
        div
          p.mb-0 Desde luego, la pantaloneta conocida en muchos países como pantalón deportivo corto o short es sin duda la prenda con mayor demanda para la práctica de cualquier actividad física, deportes, recreación, ocio, aprovechamiento de climas cálidos y de verano.
      .col-lg-5.col-8.px-0
        figure
          img(src='@/assets/curso/tema17/img01.png') 

    p.mb-5 Este es el desarrollo para el modelo básico de pantaloneta:
      
    .row.justify-content-center.mb-4
      .col-lg-9
        figure
          img(src='@/assets/curso/tema17/img02.svg') 

    .row.justify-content-center
      .col-lg-8(style="position:relative")
        figure(style="position:relative")
          img(src='@/assets/curso/tema17/img03.svg') 
        
        a(style="position:absolute; width:6%; height:20%; top:7%; left:25%" @click="verdiv = 1")          
        a(style="position:absolute; width:6%; height:20%; top:7%; left:36.2%" @click="verdiv = 2; mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
        a(style="position:absolute; width:6%; height:20%; top:7%; left:47.1%" @click="verdiv = 3")
        a(style="position:absolute; width:6%; height:20%; top:7%; left:57.9%" @click="verdiv = 4")
        a(style="position:absolute; width:6%; height:20%; top:7%; left:68.6%" @click="verdiv = 5")
        
        .row.justify-content-center.w-100(style="position:absolute; top: 35%")
          .col-xl-9.col-12.px-xl-0.px-4
            divdiv(v-if="verdiv==1")
              h2.mb-1 01
              p.mb-0 Se desarrolla tomado como base los patrones del short masculino.<br>Trazar las bases delantera y trasera del short ubicando los puntos A, E, C, 1, 3 y 4
            
            div(v-if="verdiv==2")
              h2.mb-1 02
              p.mb-0 Sobre la línea de aplomo escuadrar los puntos A y 1<br>A - B y 1 - 2 = medida para desahogo 6 cm o según diseño

            div(v-if="verdiv==3")
              h2.mb-1 03
              p.mb-0 Unir con curva B con C y 2 con 3 paralelas a las líneas del costado del molde base

            div(v-if="verdiv==4")
              h2.mb-1 04
              p.mb-0 Prolónguese las líneas del tiro<br>8 - F, E - G, 2 - 6 y 4 - 5 = medida de ancho elástico<br>F - H, G - 1, 6 - 7 y 5 - 8 = a la distancia 2 - 6 más 0.5 cm

            div(v-if="verdiv==5")
              h2.mb-1 05
              p.mb-0 Unir con recta H - 1 y 7 - 8

    

    Separador


</template>

<script>
export default {
  name: 'Tema17',
  data: () => ({
    verdiv: 1,
    mostrarIndicador: true,
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
