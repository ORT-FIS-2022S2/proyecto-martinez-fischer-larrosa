# 2a Implementación

## Alcance del Sistema
### Objetivo
Definimos el Alcance del Sistema, esto es, de todos los requerimientos especificados cuáles se implementarán y en que momento.

- Rol responsable
    - Desarrollador
- Alcance del Sistema
    1. Función dar de alta un usuario
    2. Función ingresar un pronóstico (manual o aleatorio)
    3. Función editar un pronostico
    4. Mostrar el fixture (del día o por grupos) y tabla de resultados
- Momento de realización
    - Fase I (Item 1)
    - Fase II (Item 2 y 3)
    - Fase III (Item 4)
- Planificación de Proyecto
    - Se realizaran primero la base del proyecto, con librerías y configuraciones necesarias para luego estar en condiciones de implementar las distintas fases pautadas de forma incremental.
    Se trabajaran la interfaz gráfica y lógica para poder alcanzar la primer fase y luego se incorporará las distintas funcionalidades de forma gradual.
- Estimaciones y Mediciones (S,M,L,XL)
    1. Función dar de alta un usuario: Tamaño M
    2. Función ingresar un pronóstico (manual o aleatorio): Tamaño L
    3. Función editar un pronostico: Tamaño S
    4. Mostrar el fixture (del día o por grupos) y tabla de resultados: Tamaño L
- Ajuste y Control de Desarrollo
    - Elaborar la Presentación del Sistema para el Cliente (ORT)
    - Planificación de la Transición
    - Describir la Versión: Versión 1 inicial con funcionalidades básicas sin ranking
    - Escribir las Notas de la Versión: ...

## Funciones implementadas

Implementación de funciones principales (sin la necesidad de persistencia de datos)

En nuestro decidimos poner en practica algunos de los casos de uso que habiamos definido en la especificacion. Dentro de ellos estan:

- Registrar usuario  
- Pronosticar partido  
- Borrar y editar pronostico  
- Obtener una lista de usuarios  
- Obtener pronosticos de un usuario  
- Obtener pronosticos de una fecha
- Obtener fixture por dia o por grupo

En los casos de registrar usuario, editar y eliminar pronosticos, son servicios que queda expuestos ya que funcionan pero no estaran funcionando dentro de la Interfaz de Usuario.

Nosotros decidimos ir por el lado de la persistencia de datos y para eso hicimos uso de SQLite para poder crear una base de datos con persistencia. Esta se va a encargar de guardar todos los datos de manera rapida y sin tanta complejidad. Para poder manejar el mapeo entre los objetos y la base de datos utilizamos PRISMA JS. 

Por otro lado hicimos uso de una API (Interfaz de programacion de aplicaciones) donde los servicios que ponemos estan echos en express js, el cual es un framework web transigente, escrito en JS y alojado dentro del entorno de ejecucion Node JS. Ademas, para poder probar la API usamos postman, el cual se encarga de llamar a los servicios. Para esto agregamos una arpeta en dominio llamada postman y dentro de esta la conexion con todos los servicios. Este archivo se puede importar en postman para tener el ambiente y poder hacer las pruebas.

Estas herramientas mencionadas anteriormente, junto a JSDOC para la documentacion y JEST para las pruebas fueron las otras herramientas que utilizamos para poder completar toda la parte del backend.

A continuacion sus librerias incluidas en el package.json:
```
"dependencies": {
    "@prisma/client": "4.3.1",
    "express": "4.18.1"
  },
  "devDependencies": {
    "prisma": "4.3.1",
    "jest": "29.2.2",
    "jsdoc": "4.0.0"
  },

```

Para el frontend utilizamos las siguientes librerias:
```
"devDependencies": {
    "@babel/core": "^7.18.13",
    "@babel/preset-env": "^7.18.10",
    "autoprefixer": "^10.4.8",
    "babel-loader": "^8.2.5",
    "css-loader": "^5.2.7",
    "extract-loader": "^5.1.0",
    "file-loader": "^6.2.0",
    "postcss-loader": "^5.3.0",
    "sass": "^1.54.6",
    "sass-loader": "^11.1.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^3.11.3"
  }

```


## Interfaz de usuario

Para la interfaz de usuario tratamos de guiarnos en el boceto que habiamos diseñado en la especificacion para llegar a lo que queriamos. Nosotros decidimos crear una unica pagina con navegacin en diferentes secciones. Por un lado en el header tenemos un logo del mundial a la iquierda, y al otro extremo un labe que indica que usuario esta ingresado y un buscador (implementado con el estilo de material design) los cuales no tienen funcionalidad al igual que los botones de alta que aparecen debajo.

Dentro del main tenemos 3 secciones. A a izquierda esta el selector de fixture, si lo queremos elegir por dia o por grupo, hecho con una barra de seleccion que encontramos en material design 2, y que aparezcan dichas opciones para elegir con radio buttons de Material design. Luego de haber seleccionado una de las opciones, al centro del main apareceran todos los partidos correspondientes a dicha opcion seleccionada y la posibilidad de pronosticar sobre ellos. Los botones de pronosticar estan basados en la opcion que nos brindaba Material design de los buttons. Por ultimo a la derecha hay una seccion de ranking de usuarios la cual lista todos los usuarios que pronosticaron y su puntaje, pero la misma no esta en funcionamiento.

En cuanto a lo solicitado con que sea responsive, tuvimos algunas complicaciones en la implementacion que no permitieron que nos funcione correctamente, pero si logramos cumplir con la especificacion de estilo. Las fuentes estan en Roboto, para la barra del header decidimos utilizar el color secundario y para los botones y las secciones del main el secundario. Los colores Green 900 y Light Blue 800 los buscamos dentro de la pagina web material design y copiamos sus codigos de color.

A medida que ibamos creando la pagina web verificabamos que cumpliera con los estandares de accesibilidad WCAG. En cuanto a la percepcion, solamente utilizamos una imagen que es el logo que aparece arriba a la derecha, entonces no consideramos como nescesario agregarle un texto de referencia para que se entienda que es. Tambien buscamos utilizar los colores de fondo, texto, etc de manera que no sea complicado entender lo que dice cada parte.

En cuanto a la operacion, toda operacion que esta en funcionamiento se puede ejecutar simplemente con un click del mouse o ingresando numeros en el teclado. La pagina es de facil navegacion, no hay complejidad a la hora de navegar entre las secciones, localizar el conteido o determinar donde se encuentra cada cosa, y su contenid textual es legible y comprensible.

En base a esto dicho consideramos que logramos cumplir con los estandares de accesibilidad WCAG.

## Codificación

En cuanto a la parte de codificacion, utilizamos Visual Studio Code con Node JS instalado para realizar el proyecto. Dentro de este IDDE realizabamos nuestras modifiaciones de los documentes en difrentes ramas de git. Por un lado separemos en una rama toda la parte de la IU y el frontend y por el otro creamos una rama especifica para el backend y toda la funcionalidad y luego juntabamos todo. A medida que ibamos operando en cada una de las partes fuimos comprobando que cumpla con los estandares de codifiación de Google en cuanto a la parte de HTML, CSS y JavaScript.

Tambien hicimos enfasis en que nuestro codigo quede bien indentado, no aplicamos funciones demasiado largas o complejas,y por ultimo hicimos uso de un linter para que nos tire observaciones en cuanto a errores de formato o calidad de codigo.

## Test unitario

Test unitarios en Jest 

Detallar cantidad e incluir ejemplos significativos

100% cobertura en clases de dominio


> ## Code freeze
> En la semana previa a la entrega final se debe congelar el desarrollo.
> A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y documentación.
