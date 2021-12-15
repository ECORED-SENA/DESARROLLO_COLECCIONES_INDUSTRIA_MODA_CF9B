<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Desarrollo de modelos de <i>brasier</i>, modelo de <i>brasier</i> básico

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema7/img01.png') 
      .col-lg-6.d-flex.align-items-center
        p.mb-4 Adicional a la protección de los senos, el <i>brasier</i> es una prenda que se ha convertido en elemento fundamental del vestuario desde el punto de vista estético, de moda, comercial, entre otros. El desarrollo de modelos de <i>brasier</i> también ha ido evolucionando con el paso de los años, pero sin importar cuál sea el diseño final, existe un modelo básico de <i>brasier</i>, del cual se parte para confeccionarlos.

    p.mb-5 Conozca, a continuación, los pasos para el desarrollo del modelo de <i>brasier</i> básico. Procure llevar registro de los aspectos más importantes en su libreta personal de apuntes.
    
    .row.justify-content-center
      .col-lg-9.infografia-t7
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure.mb-4
              img(src='@/assets/curso/tema7/img02.svg') 
          
          .tarjeta.color-secundario--borde.p-3(x="4.8%" y="23.8%" numero=" ")
            p.mb-0 Descubra, a continuación, los pasos para el desarrollo del modelo de brasier básico. Identifique en la gráfica, cada uno de los pasos y acciones que van siendo mencionados y explicados.            

          .tarjeta.color-secundario--borde.p-3(x="4.8%" y="36.8%" numero=" ")
            p.mb-0 Trazar la base del brasier ubicando los puntos 1, V, S y N<br>S - A = profundidad de sisa 3 cm<br>Prolónguese la línea de la pinza como lo indica el gráfico encontrando el punto Y <br>V - Z = altura del corpiño 9 cm o según diseño

          .tarjeta.color-secundario--borde.p-3(x="4.8%" y="50%" numero=" ")
            p.mb-0 Unir con curva suave Z - 1<br>Unir con curva Z - A como lo indica el gráfico<br>Escuadrar el punto C hasta la línea de la pinza encontrando el punto F

          .tarjeta.color-secundario--borde.p-3(x="4.8%" y="63%" numero=" ")
            p.mb-0 1 - E = base del corpiño 8 cm o según la talla<br>E – C= 1 cm<br>Escuadrar el punto C<br>F – G = 2 cm<br>Unir con recta V - G<br>Unir con curva suave G - E

          .tarjeta.color-secundario--borde.p-3(x="4.8%" y="76%" numero=" ")
            p.mb-0 V - H y S - B = a la distancia V - F<br>8 - K = 1 cm<br>H - J = 2 cm<br>Unir con recta V - J

          .tarjeta.color-secundario--borde.p-3(x="95.5%" y="23.8%" numero=" ")
            p.mb-0 Unir con curva suave J - K<br>M - N = 4 cm o según diseño<br>M- U= 3 a 5 cm<br>M - O y U - P = medida para el gancho 2 cm<br>Unir con recta O - P

          .tarjeta.color-secundario--borde.p-3(x="95.5%" y="36.8%" numero=" ")
            p.mb-0 El punto Q se encuentra en la pinza de la espalda<br>Q - R = 1.4 cm<br>Y - S', Y - W, Z- T y Z - X = 0.75 cm<br>Unir con recta S' - X y W - T

          .tarjeta.color-secundario--borde.p-3(x="95.5%" y="50%" numero=" ")
            p.mb-0 2 - 3 = a la distancia 1 - S' en el delantero<br>3 - 4 = a la distancia S - W<br>Unir con recta 3 - R y 4 - Q

          .tarjeta.color-secundario--borde.p-3(x="95.5%" y="63%" numero=" ")
            p.mb-0 Marcar las bases y separarlas<br>Trazar la base A<br>V - 6 = 1.3 cm

          .tarjeta.color-secundario--borde.p-3(x="95.5%" y="76%" numero=" ")
            p.mb-0 Unir con curva 1 - S pasando por el punto 6<br>Trazar las bases By C unidas por la línea de la pinza<br>V - 7 = 1.3<br>Unir con curva 1 - S pasando por el punto 7<br>Unir las bases E y F por la línea de hombro formando la cargadera

    Separador

</template>

<script>
export default {
  name: 'Tema7',
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
