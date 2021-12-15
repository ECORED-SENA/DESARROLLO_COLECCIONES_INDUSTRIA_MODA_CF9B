export default {
  global: {
    componenteFormativo: 'Patronaje y escalado ropa interior y deportiva',
    descripcionCurso:
      'En este componente el aprendiz se afianzará en la elaboración de prototipos con calidad y <i>confort</i> para el consumidor final, desarrollando patrones básicos de ropa interior, lencería y deportiva, tanto masculina como femenina e infantil, con su respectivo escalado. Conocerá la aplicación del método manual de patronaje y escalado de línea interior y deportiva.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Inducción al patronaje y escalado, interior y deportivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Desahogo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<i>Drop</i>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Cuadro de tallas normalizado femenino',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Tejidos, elasticidad, elongación y método de trazo de patrones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Ropa interior femenina: base del <i>panty</i> y tipos de <i>panty</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Escalado de patrones de ropa interior y deportiva',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Básicos del <i>brasier</i> y principiante de niña',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Escalado del corpiño para <i>brasier</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'Desarrollo de modelos de <i>brasier</i>, modelo de <i>brasier</i> básico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Básico del vestido de baño femenino',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Variación a vestido de baño femenino alto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Escalado del vestido de baño femenino',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Básico de <i>leggins</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        icono: 'far fa-file-alt',
        numero: '12',
        titulo: 'Básico interior masculino',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        icono: 'far fa-file-alt',
        numero: '13',
        titulo: 'Tipos de interior masculino',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema14',
        icono: 'far fa-file-alt',
        numero: '14',
        titulo: 'Escalado interior masculino',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema15',
        icono: 'far fa-file-alt',
        numero: '15',
        titulo:
          'Básico camiseta <i>T-shirt</i> masculina y variación a camisilla',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema16',
        icono: 'far fa-file-alt',
        numero: '16',
        titulo: 'Sudadera masculino',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema17',
        icono: 'far fa-file-alt',
        numero: '17',
        titulo: 'Pantaloneta masculino',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Celestecielo, G. (2012). Patronaje de diseño de modas y costura  a través de tutoriales gratuitos no descargables. El rincón de Celestecielo.',
      link: 'https://n9.cl/g8tgc',
    },
    {
      referencia:
        'Campamentos, J. (1995). Manual técnico de patronaje industrial: ropa interior y vestidos de baño.  Costura 3, Ingenieros. ',
    },
    {
      referencia:
        'Carrera de Diseño y Gestión en Moda. (2015). Técnicas de patronaje. Tomo I: mujer. Universidad Peruana de Ciencias Aplicadas (UPC).',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/41322?page=7 ',
    },
    {
      referencia:
        'Oromí, E. (1986). Método completo de corte sastre para señora. 8a. Ed. Academia de Corte Rocosa. ',
    },
    {
      referencia:
        'Vélez, M., García, M. & Hincapié, L. (1996). Patronaje y escalado línea interior y deportiva. SENA.',
      link: 'https://hdl.handle.net/11404/4811',
    },
    {
      referencia:
        'Vélez, M., García, M. & Hincapié, L. (1995). Patronaje y escalado línea infantil. SENA.',
      link: 'https://hdl.handle.net/11404/4874',
    },
    {
      referencia:
        'Vélez, M., García, M. & Hincapié, L. (1995). Patronaje y escalado línea femenina SENA.',
      link: 'https://hdl.handle.net/11404/4873',
    },
    {
      referencia:
        'Vélez, M., García, M. & Hincapié, L. (1995). Patronaje y escalado línea masculina. SENA.',
      link: 'https://hdl.handle.net/11404/5245',
    },
  ],
  glosario: [
    {
      termino: 'Delantero',
      significado:
        'Pieza que forma la parte de delante de una prenda de vestir.',
    },
    {
      termino: 'Escalado',
      significado: 'Adaptación a una determinada escala o marcas de medida.',
    },
    {
      termino: 'Escalado de patrones',
      significado:
        'Es la técnica de aumentar o disminuir un patrón base a otro, proporcionalmente y en concordancia a un cuadro de tallas establecido.',
    },
    {
      termino: 'Escuadrar',
      significado:
        'Labrar o disponer un objeto de modo que sus caras formen con las caras contiguas ángulos rectos.',
    },
    {
      termino: 'Industrializar',
      significado:
        'Es dar el acabado al molde o patrón, señalizando la línea de aplomo, marcando la talla, número de veces que se corta, haciendo piquetes en los puntos estratégicos necesarios para facilitar procesos en producción.',
    },
    {
      termino: 'Método',
      significado:
        'Modo ordenado y sistemático de proceder para llegar a un resultado o fin determinado.',
    },
    {
      termino: 'Molde básico',
      significado:
        'Patrón inicial de donde se derivan luego otros patrones. Este no lleva márgenes de costura incluidos.',
    },
    {
      termino: 'Patrón',
      significado:
        'Plantilla realizada generalmente en cartón o papel, la cual se utiliza para marcar las distintas partes de una prenda. Estos se utilizan para realizar el corte en la tela, pueden o no tener los márgenes de costura.',
    },
    {
      termino: 'Patronaje',
      significado:
        'Es un dibujo en plano de la prenda que se usa como plantilla, para luego transportarlo a la tela con la que se procederá a confeccionar la prenda final.',
    },
    {
      termino: 'Patronaje manual',
      significado:
        'Proceso de trazar el patrón de la prenda, consiste en desglosar por piezas las diferentes áreas del cuerpo humano a vestir; de manera que cada pieza de tela se adapte a las formas corporales, y la unión de ellas en un orden predeterminado produzca como resultado el modelo de prenda que corresponda con el diseño. ',
    },
    {
      termino: 'Refuerzo',
      significado:
        'Pieza o parte de una cosa que sirve para hacerla más fuerte o resistente.',
    },
    {
      termino: 'Talla',
      significado:
        'Medida utilizada para la fabricación de prendas de vestir industriales. ',
    },
    {
      termino: 'Trasero',
      significado:
        'Que está situado en la parte de atrás de una cosa vista de frente.',
    },
    {
      termino: 'Trazo',
      significado: 'Línea o raya hecha al escribir o dibujar.',
    },
    {
      termino: 'Vestibilidad',
      significado:
        'Es el requisito fundamental que debe cumplir toda prenda para que sea funcional y confortable al ser usada.',
    },
  ],
  complementario: [
    {
      texto:
        'Comunicaciones Centro de Formación en Diseño, Confección y Moda. (2021). Método SENA para escalado de prendas de vestir.	',
      tipo: 'Video',
      link: '',
    },
    {
      texto:
        'Comunicaciones Centro de Formación en Diseño, Confección y Moda. (2021). Método SENA para escalado aplicado al molde de corpiño.',
      tipo: 'Video',
      link: '',
    },
    {
      texto:
        'Comunicaciones Centro de Formación en Diseño, Confección y Moda. (2021). Método SENA para trazar patrones.	',
      tipo: 'Video',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Alfonso Hincapié Echeverri',
        cargo: 'Instructor',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
      },
      {
        nombre: 'Idian Fernando López Agudelo',
        cargo: 'Instructor',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
      },
      {
        nombre: 'Ruth Elena Morales Ríos',
        cargo: 'Instructora',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés Gárcia',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santande',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santande',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santande',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santande',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santande',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santande',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
