# 1c Informe académico 1

## Detalle del trabajo individual

Fecha, actividad, esfuerzo, responsable

Fecha | Actividad | Esfuerzo | Responsable
--- | --- | --- | ---
| Sep 2, 2022 | GIT INIT. | 2d | Todos
| Sep 15, 2022 | SCM | 4d | G. Martinez
| Sep 18, 2022 | REQ. ESPEC. 1 | 4d | G. Larrosa
| Sep 19, 2022 | REQ. ELICI.  | 1d | M. Fischer
| Sep 25, 2022 | REQ. ESPEC. 2 | 2d | G. Martinez
| Sep 28, 2022 | REQ. VALID. 1 | 1d | M. Fischer
| Oct 2, 2022 | REQ. ESPEC. UI | 4d | G. Larrosa
| Oct 1, 2022 | REQ. VALID. 2 | 1d | M. Fischer
| Oct 3, 2022 | INF. ACADE. | 2d | G. Martinez

## Técnicas aplicadas

- Git Flow + Estrategia Ship / Show / Ask
- User personas para definir nuestros usuarios de interés para el sistema
- Elicitación tormenta de ideas e ingeniería inversa
- User stories para requerimientos
- Casos de uso detallados para detalle de requerimientos
- Validación con entrevistas

## Algunos aprendizajes: 
En este proyecto aprendimos a trabajar de manera colaborativa, partimos por utilizar Git con las funciones usuales para el manejo del repositorio y continuamos aprendiendo el flujo de trabajo denominado Git Flow, posterior a esto dado que somos un equipo de trabajo pequeño nos interesamos en aprender una estrategia llamada Ship / Show / Ask para definir un orden y criterio para manejar las branches.

Dado el tiempo de trabajo para el proyecto y recursos son limitados utilizamos User Personas frente a otras técnicas para desarrollar estratégicamente la web del Mundial adaptado a los requisitos de los usuarios, contar con un diseño centrado en él y la forma de comprender las necesidades y deseos de esos user persona definidos. 

En cuanto a la elicitación nos basamos en dos sistemas (SuperMatch y Penca Ovación) como referencia haciendo ingeniería inversa de lo que comprendemos y relevar detalles internos adicionado a una tormenta de ideas para potenciar con otras funcionalidades útiles a los posibles usuarios que definimos.

Una vez definido el enfoque y los puntos necesarios a cubrir en la web, creamos los casos de uso que nos permitirán priorizar y ejecutar el desarrollo de las funcionalidades de forma organizada y con criterios claros de cumplimiento. 

Adicionalmente realizamos definiciones esquemáticas a nivel de interfaz con bocetos de UI que den una idea general de lo que se espera del sistema, si bien estos pueden tener un cierto nivel de incertidumbre con el sistema una vez finalizado, sirven como una guía general para el desarrollo y tareas de relevamiento a medida que se van perfeccionando las ideas con más claridad.

Finalmente, realizamos una validación con una técnica más tradicional, utilizando una entrevista con una persona real . Y de esta forma darle más certeza a los user persona definidos.

## Reflexiones personales

**Juan Mateo Fischer**: Al principio me costo un poco acostumbrarme a trabajar con git y github, pero por suerte pude acomodarme rapidamente. El sistema de git me parece una muy buena tecnica para poder trabajar en grupo ya que en ningun momento tuvimos ningun conflicto a la hora de modificar archivos entre nosotros. Al principio nos pusimos a plantear todas las ideas juntos y luego nos separamos ramas especificas para trabajar cada uno separado. Por mi parte trabaje en el md de la elicitacion y la validalidacion, aunque las ideas las planteabamos entre los tres. Luego de commitear, lo que hacia era crear pulls requests a develop y mergearlo cuando ambos, Gabriel y Gonzalo, lo aprobaran.

**Gonzalo Larrosa**: Por tema laboral ya conocia git, siempre trabaje con Azure DevOps de Github conocia lo basico, entonces estuvo bueno el aprendizaje e investigar las funcionaledades que tiene. En las primeras reuniones del equipo empezamos a plantear las ideas que tenia cada uno y escuchar la opinion de los demas, despues que nos pusimos de acuerdo como ibamos a trabajar nos dividimos las tareas. En mi caso trabaje con la especificacion del sistema determinando Requerimientos en conjunto con Gabriel y Mateo, luego trabaje en los User Stories y por ultimo los Bocetos UI para la aplicación. Como determinamos trabajar en ramas separtadas nunca tuvimos problemas para ir subiendo nuestros avances, cuando eran cambios chicos iban directo a la rama y si eran cambios mas grandes  se creeaba un pull request para que los compañeros visualizaran los cambios y me dieran el punto bueno para realizar el merge.

## Presentación en clase (1)

Para la presentación en clase realizaremos una práctica con la estrategia de SCM que utilizamos y aplicamos en el proyecto

Realizamos algunos ejemplos útiles en el Git que servirán como material de apoyo:

Ejemplo de **Ship** en el proyecto:
- Branch → Merge → Main: 
  - https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/commit/eafb221cdac1d1331179d9294ea77604eecc46c4

Ejemplo de **Show** en el proyecto
- Branch → PullRequest (A) → Merge → Main
  - https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/pull/2

Ejemplo de **Ask** en el proyecto
- Branch → PullRequest (B) → Merge → Main
  - https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/pull/3

Y otros ejemplos de Ask del equipo:
- Agregamos documentación de elicitacion (incompleta todavía) 
  - https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/pull/4
- Agregar especificación a develop 
  - https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/pull/5 


###  Material para la presentación
Para hacer una introducción de este punto que consideramos de valor a la clase, creamos una presentación general con algunas reflexiones y una demo real de como la trabajamos nosotros:
- https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/blob/feature/informe/docs/presentaciones/ORT%20-%20Presentación%20de%20valor%20para%20la%20clase.pdf
