# 2a Test de sistema

Proyecto asingado para testear: ![proyecto-casanova-correa-stummo](https://github.com/ORT-FIS-2022S2/proyecto-casanova-correa-stummo.git)

## Test de sistema

Luego de haber terminado con nuestro proyecto nos toco evaluar el de otros compañeros del curso. En nuestro caso el de Casanova, Correa y Stummo. Decidimos hacer sesiones de prueba exploratorias cada uno de nosotros para evaluar a ver si encontrabamos algun defecto o aspecto a mejorar dentro de su proyecto. Estas son bloques ininterrumpidos y revisables donde hay evidencias del trabajo en nuestra mision de testear.

### Sesion de prueba exploratoria 1
*Hecha por:* Gabriel Martinez

*Bloque de tiempo:* 50 minutos (Media)

*Objetivos:* 
- Validar que la apariencia de la aplicacion se vea correcta en diferentes navegadores y dispositivos (Mac y Windos)
- Verificar que se ingresen bien los resultados a la hora de dar de alta un pronostico
- Chequear que el codigo este correctamente
- Hacer casos de prueba de entrada y salida con la tecnica de particion equivalente

*Notas:* Hice pruebas con casos borde y en algunos casos no funcionaban ciertas cosas por lo que fue fundamental revisarlo para posibles soluciones de errores. El hecho de que guarde los resultados negativos es un defecto urgente a solucionar ya que no existen rsultados negativos. Dentro de lo que vi es una aplicacion bien formada y prolija.

### Sesion de prueba exploratoria 2
*Hecha por:* Juan Mateo Fischer

*Bloque de tiempo:* 35 minutos (Corta)

*Objetivos:*
- Verificar faltas de ortografia en el proyecto
- Verificar que se ingresen bien los resultados a la hora de dar de alta un pronostico
- Hacer casos de prueba de entrada y salida con la tecnica de particion equivalente
- Chequear responsive y material design
- Buscar posibles mejoras en cuanto a funcionalidad del sistema

*Notas:* Es mi primera vez testeando y fue una buena practica que me gusto ya que aprendi mucho sobre el proyecto de los otros compañeros. Descubri muchas cosas que podriamos haber hecho y puesto en practica en nuestro proyecto y es bueno eso ya que te permite conocer las ideas de los demas. A pesar de haber descubierto algunos defctos, veo a la pagina de ellos bastante bien y en algunos aspectos superior a la nuestra. Un caso seria el material design y el responsive que fue algo que no se nos dio bien para implementar a nosotros, y al ver el proyecto de estos compañeros vi como podriamos haber hecho para que nuestro proyecto quede mejor.

### Sesion de prueba exploratoria 3
*Hecha por:* Gonzalo Larrosa

*Bloque de tiempo:* 30 minutos (Corta)

*Objetivos:*
- Hacer casos de prueba de entrada y salida con la tecnica de particion equivalente
- Buscar errores en las funciones y corregirlos

*Notas:* Decidi no hacer una sesion muy larga ya que mis compañeros ya habian hecho 2 sesiones en las cuales ya habian encontrado 6 defectos o posibles mejoras dentro del sistema. Fui directo a buscar bugs a corregir o posibles implementaciones y logre encontrar algunas cosas para reportar. Igualmente considero que los compañeros realizaron un gran trabajo para lo que se pedia.


## Reporte de issues

Dentro de esas 3 sesiones de pruebas explorarotias llegamos a reportar 9 issues diferentes a las cuales calificamos con labels como:

BUGS:
- Error ingreso de resultado
- Problema ingreso de resultados negativos
- Error al ingresar 0 a 0 en un partido
- Se cierra la ventana para pronosticar el resultado al no ingresar nada en intentar guardar
- Ingreso un resultado no valido, guardo aparece una alerta y al intentar dar de alta otro resultado esta el invalido

POSIBLES MEJORAS/ NUEVAS IDEAS
- Mejora complejidad ciclomatica actualizarFases(grupoSeleccionado)
- Posible mejora a la hora de crear campeonato
- Posible mejora a la hora de ingresar un resultado

INVALIDEZ
- Ingreso de nombre y organizador sin caracteres alfanumericos, solo con espacios al crear campeonato

Esas fueron todas las issues que logramos descubrir. Para cada una de ellas aplicamos buenas practicas de reporte para que los que trabajaron en la creacion de ese proyecto puedan comprender facilmente que se debe arreglar y mejorar. Para eso les pusimos prioridad, severidad, pasos de ejecucion, resultados esperaos y obtenidos, y videos e imagenes para que se comprenda lo mejor posible.

## Reporte de calidad del sistema

Dentro de todo lo que pudimos testear llegamos a:

- 5 issues de bugs
- 3 posibles mejoras
- 1 invalidez

Con esto podemos decir que es necesaria una revision ya que hay varias issues de bugs que deberian ser revisadas ya que no cumplen con los requerimientos establecidos y tampoco son cosas que se considren correctas (como por ejemplo ingresar un resultado negativo). Tambien estaria bueno que se solucione la invalidez que registramos ya que no deja ingresar un campeonato con los campos en blanco pero si con solo espacios que es practicamente lo mismo.

Ademas, logramos descubris algunos aspectos que pueden mejorar para que la aplicacion sea aun mejor, a pesar de que los compañeros realizaron un gran trabajo para lo que se pedia.

Como conclusion final podemos decir que la app realizada por los compañeros viene por buen camino y de corregir esos bugs y agregar ciertas mejoras va a quedar excelente para cualquiera que la desee usar.