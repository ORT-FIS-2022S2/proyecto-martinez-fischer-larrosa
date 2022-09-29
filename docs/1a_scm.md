# 1a SCM

## Repositorio Git

### Creación y uso de repositorios locales y remotos

Para manejar los repositorios locales se planifica utilizar Git manejado por GitHub, nos provee un sistema de control de versiones distribuido que permite a nuestro equipo compuesto por 3 desarrolladores trabajar en los mismos documentos de forma simultánea. 

Esto implica que hay un único servidor que contiene todos los archivos, pero que cada vez que se clona un repositorio de este origen centralizado, la totalidad del repositorio se clona localmente en el equipo del desarrollador.

### Comandos Git ejecutados desde terminal y desde el IDE

Para la creación del Git es necesario
1. Aceptar la invitación a la Organización ORT
2. Agregar a los integrantes del grupo de desarrollo
3. Cada desarrollador aceptar la invitación a unirse al repositorio
4. Asignar los permisos correspondientes para visualizar el repositorio a cada uno
 
Una vez realizado los pasos anterior se debe utilizar el comando:
```
cd ~/Documents/Gits
git clone https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa.git
```

Para esto se utiliza los comandos:
```
# Para añadir el archivo modificado
git add .
# Commitear archivos
git commit -m "Cambio documentación elicitación"
# Enviar cambios al repositorio
git push
# Traer cambios a repositorio
git pull
```
> Estos comandos son esenciales para el trabajo con Git, se recomienda a todo el equipo realizar push/pulls para traer los últimos cambios haciendo push con frecuencia asi como los envíos de códigos con push con una periodicidad adecuada. Incorporando en los commits la descripción necesaria para generar un historial saludable

Para trabajar con branches:
```
# Crear branch
git branch feature/elicitacion
# Ceckout main
git checkout main
# Merge de cambios con branch main principal
git merge feature/elicitacion
```
> Esto se utiliza principalmente para trabajar en equipo creando branches para aquellos casos que requieran o puedan generar conflicto

Para ver el estado de las acciones en el repositorio:
```
# Checkear el estado del repositorio
git status
# Ver log del repositorio
git log
```
> Estos comandos son útiles en todo el ciclo de desarrollo

Para realizar un Pull Request:
```
1. Hacer un fork del repositorio original con el cual se quiere colaborar.
2. Clonar el repositorio.
3. Crear una rama nueva (acá sera donde haremos la colaboración)
4. Realizar el aporte.
5. Commitear los cambios.
6. Subir la rama al repositorio: git push origin [nombre-rama]
7. Ir a la rama que acabamos de subir a Github y crear el pull request.
```
> Estos pasos son útiles en las etapas de Show/Ask descritas en las buenas prácticas de versionado

## Versionado

### Buenas prácticas de versionado

Como buenas prácticas se recomienda utilizar en este proyecto el flujo de Git Flow + los lineamientos de una estrategia Ship/Show/Ask.

Combinar estos nos permite commitear a master y/o evitar requerir siempre branches para todo. Si algo no lo amerita se hace un (Ship) directo a master, si algo es mediano pero no requiere pull request se hace (Show), y sino un (Ask) con branch y pull request.

### Estrategia Ship / Show / Ask

- Es una estrategia que consideramos moderna y util para manejar las ramas que combina las características de los Pull Request con la capacidad de mantener los cambios directos. Los cambios se clasifican como Ship (fusionar en la línea principal sin revisión), Show (abrir una Pull Request para revisión, pero fusionarse en la línea principal inmediatamente) o Ask (abrir una solicitud de Pull Request para alinearnos antes de la fusión).

### Ship

![barco](https://martinfowler.com/articles/ship-show-ask/Ship.png)
Si se quiere hacer un cambio y este se considera seguro, es posible bajo conciencia de cada desarrollador hacerlo directamente en su línea principal. Cuando hace esto, no se espera ni se pide una revisión del código al ser un incremento pequeño al repositorio. Para poder trabajar sin complicaciones, simplemente se hace el cambio **pero** con todas las técnicas habituales de integración continua para que sea seguro.

A continuación se brindan algunos ejemplos que sirven como "acuerdo" de equipo para distintas situaciones:
- Agregué una característica usando un patrón establecido
- Arreglé un error sin complicaciones
- Actualicé documentación
- Mejoré el código en base a los comentarios

Ejemplo de Ship en el proyecto:
- Branch → Merge → Main: 
  - https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/commit/eafb221cdac1d1331179d9294ea77604eecc46c4

### Show

![mostrar](https://martinfowler.com/articles/ship-show-ask/Show.png)

En este punto es donde tomamos la mentalidad de Integración Continua y  hacemos uso de todas las bondades que brindan los Pull Requests. Al hacer un cambio en una Branch, se abre un Pull Request, luego se fusionas sin esperar a nadie. Es aconsejable esperar las verificaciones automáticas (pruebas, cobertura de código, entornos de vista previa, etc.), pero no espere los comentarios de nadie para proceder con la implementación de su cambio.

Al hacerlo, se ha implementado el cambio rápidamente y al mismo tiempo ha creado un espacio para la retroalimentación y la conversación. El equipo puede recibir una notificación del Pull Request y luego poder revisar lo que se ha hecho.
De esta manera el equipo puede proporcionar comentarios sobre el enfoque o código, hacer preguntas y aprender de lo que se hizo.

A continuación se brindan algunos ejemplos que sirven como "acuerdo" de equipo para distintas situaciones:
- Me gustaría recibir  comentarios sobre cómo se podría mejorar este código
- Mira este nuevo algoritmo o patrón que usé
- Refactoricé X para que ahora se vea así
- Mirá como lo arreglé

Ejemplo de Show en el proyecto
- Branch → PullRequest (A) → Merge → Main
  - https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/pull/2

### Ask

![PREGUNTAR](https://martinfowler.com/articles/ship-show-ask/Ask.png)

Aquí hacemos una pausa. Realizamos nuestros cambios en una Branch, abrimos una Pull Request y esperamos los comentarios antes de fusionarnos. Tal vez no estamos seguros de haber tomado el enfoque correcto. Tal vez hay algún código con el que no estamos muy contentos, pero no estamos seguros de cómo mejorarlo. Tal vez se hizo un experimento y quieras ver qué piensa el resto del equipo.

Las herramientas modernas como GitHub que se utilizan en este proyecto para revisión de código ofrecen un gran espacio para este tipo de conversación e incluso puede reunir a todo un equipo para ver una Pull Request y discutirla.

A continuación se brindan algunos ejemplos que sirven como "acuerdo" de equipo para distintas situaciones:
- ¿Esto funcionara?
- ¿Cómo nos sentimos acerca de este nuevo enfoque?
- Necesito ayuda para hacer esto mejor por favor
- Terminé por hoy, haré el merge mañana

Ejemplo de Ask en el proyecto
- Branch → PullRequest (B) → Merge → Main
  - https://github.com/ORT-FIS-2022S2/proyecto-martinez-fischer-larrosa/pull/3

### Los acuerdos de equipo (Uso de ramas separadas de 'main')

- La revisión del código, o "aprobación", no debe ser un requisito para hacer un merge de una solicitud de incorporación de cambios.
- Las personas pueden fusionar sus propios Pull Request. De esta manera, tienen el control de si su cambio es un "Show" o una "Ask", y pueden decidir cuándo se activa.
- Tenemos que usar todas las excelentes técnicas de integración continua posibles y entrega continua que ayudan a mantener la línea principal liberable. 
- Nuestros Branches no deberían vivir mucho tiempo, y deberíamos volver a basarlas en la línea principal a menudo

### Cómo trabajamos en equipo (Hablando como personas)
Si bien los Pull Requests pueden ser una forma útil de hablar sobre los cambios, tienen algunos inconvenientes. El Anti Pattern más atractivo es la idea de que pueden reemplazar otras formas de tener una conversación.

Un problema común con la bifurcación es que la gente decide un enfoque sin discutirlo. En el momento en que se abre una Pull Request, se ha invertido tiempo en eso y otros.
Recordar que las Pull Requests no son la única forma de hacer Show o Ask. Responda a una llamada o acérquese al escritorio de esa persona. Mostrar el trabajo temprano y con frecuencia. Pida ayuda y comentarios pronto y con frecuencia trabajando juntos en las tareas.

### Conclusión
Entonces, ¿qué es Enviar/Mostrar/Preguntar? Fundamentalmente, son dos cosas:

- Primero: Un truco para ayudarnos a obtener lo mejor de ambos mundos: Combinar su propia Pull Request sin esperar comentarios, luego prestar atención a los comentarios cuando lleguen.

- Segundo: Una forma más inclusiva y dinámica de ver las estrategias de ramificación. La técnica nos recuerda que el enfoque de cada equipo se encuentra en un continuo en algún lugar entre "Enviar siempre" y "Preguntar siempre". Nos anima a pensar en cada cambio de forma independiente y preguntarnos: ¿debo enviar/ship, mostrar/show o preguntar/ask?

## Manejo de issues (problemas)

Para los problemas dados por pruebas unitarias con error u otros GitHub iene integrado un gestor de bugs en forma de Issues que podemos aprovechar en nuestro proyecto. Cada Issue representa un problema o mejora del proyecto. Dentro de cada Issue se pueden poner comentarios en los que informar de los progresos o debatir la mejor forma de solucionarla.

Para crear una nueva Issue, se puede hacer click en "New Issue", donde nos aparece el formulario para rellenar. Desde él podemos añadir un título, una descripción, asignar la Issue a una persona concreta (o varias) y etiquetar la Issue para resolverlo.

## Resumen de commits y evolución del proyecto

1. Se crearon los primeros commits de prueba
2. Se crearon branches para documentación (scm, requerimientos, informe)
3. Se crean ejemplos de Ship Show Ask
4. Se documenta manejo de issues

_Fuentes_
- [Ship, Show, Ask - Martin Fowler](https://martinfowler.com/articles/ship-show-ask.html)
- [Fundamentos de Git - Trabajar con Remotos](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Trabajar-con-Remotos)