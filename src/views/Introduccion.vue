<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero        
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col-lg-4
        h4.mb-4 Bienvenido al componente formativo 9B “Patronaje y escalado ropa interior y deportiva”. 
      .col-lg-6
        p.mb-4 Para comenzar esta experiencia visualice el recurso que se muestra a continuación.<br><b>¡Adelante!</b>
    
    figure.mb-5
      .video      
        iframe(iframe width="1280" height="720" src="https://www.youtube.com/embed/zGI0kCp5mbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
