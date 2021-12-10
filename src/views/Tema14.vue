<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1 Escalado interior masculino

    .row.justify-content-center.mb-4
      .col-lg-6.col-8
        figure.mb-4
          img(src='@/assets/curso/tema14/img01.png') 
      .col-lg-6.d-flex.align-items-center
        div.mb-4
          h4.mb-1 Al igual que el escalado de otras prendas de vestir, de cualquiera de las líneas masculina, femenina, infantil, el escalado de interior masculino cuenta con sus propios pasos clave.
          p.mb-0 Cumplirlos y aplicarlos de manera correcta favorecerá que el desarrollo y confección de las mismas sea exitoso y, responda realmente a las necesidades y exigencias del público usuario y a las expectativas de la industria de la moda.

    p.mb-5 Para realizar el proceso de escalado manual del interior masculino tenga en cuenta los siguientes pasos:

    SlyderB.mb-5(:datos="datosSlyder")

    .row.justify-content-center
      .col-lg-3.col-6.px-3        
        a.lnk(@click="modal1 = true")          
          .row.justify-content-center.t1-div1.py-3
            .col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema14/img03.svg') 
            .col-6.d-flex.align-items-center
              h4.mb-0 <b>Recuerde</b>
          
      .col-lg-3.col-6.px-3
        a.lnk(@click="modal2 = true")          
          .row.justify-content-center.t1-div1.py-3
            .col-4.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema14/img04.svg') 
            .col-6.d-flex.align-items-center
              h4.mb-0 <b>¡Importante!</b>

    

    ModalA(:abrir-modal.sync="modal1")
      p.mb-0 Sobre la línea central, escuadrar el punto del costado/pierna (eje X) y aplicar el incremento de cadera siendo 1.25 cm por talla, tanto para las superiores como las inferiores. Teniendo todo debidamente marcado, identificar cada una de las tallas en los diferentes puntos, para luego realizar la unión; las líneas rectas se unen con la escuadra o regla, las líneas curvas se unen con el molde base, con el fin de conservar su forma.

    ModalA(:abrir-modal.sync="modal2")
      p.mb-0 Es muy importante que al unir las distancias entre talla y talla se vean iguales. El paso a seguir es trazar cada una de las tallas, cortar e industrializar. Este proceso se realiza exactamente igual, tanto en delantero como en trasero.

    Separador


</template>

<script>
export default {
  name: 'Tema14',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    datosSlyder: [
      {
        titulo: 'Pasos iniciales',
        texto:
          'Extraer los incrementos del cuadro de tallas masculino, en este caso, para el interior clásico de hombre.<br><br>Seleccionar del cuadro, como talla base, la 32 y determinar cuántas tallas superiores e inferiores se van a trabajar, que no superen las 3 tallas, con el fin de conservar la forma del molde.',
        imagen: require('@/assets/curso/tema14/img02.png'),
      },
      {
        titulo: 'En segunda instancia',
        texto:
          'Determinar las medidas que se necesitan de acuerdo con la prenda a trabajar, en este caso del interior clásico de hombre: cintura, cadera, altura de cadera.<br> Entonces, aplicar el incremento en cada una de estas medidas, que corresponde a la diferencia entre talla y talla, según el cuadro de tallas:<br>Cintura 2.5 cm en el semi/perímetro<br>Cadera 2.5 cm en el semi/perímetro<br>Altura de cadera 1.2 cm en total',
        imagen: require('@/assets/curso/tema14/img05.png'),
      },
      {
        titulo: 'Medidas y piezas a escalar',
        texto:
          'Estas medidas se dividen de acuerdo con el número de piezas a escalar, en este caso tenemos la ½ de un delantero y la ½ de un trasero, se reparten de tal forma que queden equilibradas en los diferentes puntos que tiene el molde, normalmente en los ángulos.<br><br>Es, en ese paso, cuando se determinan los incrementos:<br>Cintura: 2.5 cm /2 = 1.25 cm (1/4 parte del contorno de cintura)<br>Cadera: 2.5 cm/2 = 1.25 cm (1/4 parte del contorno de cadera)<br>Altura de cadera: 1.2 cm/2 = 0.6 cm (Para que el molde aumente hacia la cintura y la entrepierna)',
        imagen: require('@/assets/curso/tema14/img06.png'),
      },
      {
        titulo: 'Escalado',
        texto:
          'Teniendo esta información se procede a realizar el escalado a los moldes. Trazar el molde sobre el papel, con sus líneas de construcción, es muy importante que cada pieza tenga bien definidas las líneas, los ángulos el hilo de la tela, esto es definitivo para el desarrollo del escalado ya que los trazos y proyecciones se escuadran con base a estas líneas.',
        imagen: require('@/assets/curso/tema14/img07.png'),
      },
      {
        titulo: 'Prolongación de la línea',
        texto:
          'Luego de trazado el molde se procede a prolongar la línea del centro (Dobles de tela) tanto hacia la parte superior como inferior (sobre la línea Y). Sobre esta línea (Y) se mide lo que corresponde a la medida de tiro (0.6 mm) por cada talla a escalar, tanto en la cintura como en la entrepierna.',
        imagen: require('@/assets/curso/tema14/img08.png'),
      },
      {
        titulo: 'Escuadrado entrepierna',
        texto:
          'Escuadrar hacia abajo el lado de la entrepierna que da hacia el costado y sobre esta línea medir los mismos 0.6 mm por cada talla, tanto las superiores 34, 36 y 38 como las inferiores 30 y 28. Sobre la línea central se hace escuadra pasando por el punto cintura /costado, trazar la línea horizontal ( eje X del plano) hacia afuera del punto. Sobre esta línea, aplicar incremento correspondiente a la medida de cintura, 1.25 cm multiplicado por el número de tallas a escalar hacia afuera; partiendo de la talla base (32) se escala la 34,36 y 38, tres tallas superiores ósea 1.25 cm por 3 tallas es igual a 3.75 cm. Se marca la medida completa, desde el molde base por la línea que se trazó (X).',
        imagen: require('@/assets/curso/tema14/img09.png'),
      },
      {
        titulo: 'Escuadra sobre punto cintura/costado',
        texto:
          'Hacer escuadra sobre el punto de la cintura/costado, talla superior en sentido vertical (Eje Y del plano), sobre esta línea aplicar el mismo incremento del centro frente cintura siendo 0.6 mm por el número de tallas a escalar hacia afuera o sea 3 tallas (0.6 X 3 = 1.8 cm), esta medida se aplica completa. Trazar la diagonal, uniendo respectivamente el costado cintura de la talla base, con el costado cintura de la talla límite o talla superior, se toma la medida a la diagonal y se divide por el número de tallas a escalar hacia afuera, en este caso 3 tallas. La misma medida se aplica sobre la diagonal hacia adentro para las tallas pequeñas, en este caso, serian dos, la 30 y 28.',
        imagen: require('@/assets/curso/tema14/img10.png'),
      },
    ],
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
