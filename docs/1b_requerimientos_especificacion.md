# 1b Requerimientos

## Especificación
---
# Requerimientos Funcionales
* RF1: Crear un usuario.
* RF2: Eliminar un usuario.
* RF3: Login.
* RF4: Alta de de un equipo.
* RF5: Alta de un estadio.
* RF6: Alta de un arbitro.
* RF7: Alta de un partido.
* RF8: Eliminar un partido.
* RF9: Ingresar manualmente un pronostico a un partido.
* RF10 Ingresar aleatoriamente un pronóstico a un partido.
* RF11: Editar el pronostico de un partido.
* RF12: Mostrar el fixture por grupos del mundial.
* RF13: Mostrar el fixture por dia.
* RF14: Mostrar tabla de puntos de cada grupo.
* RF15: Buscador de partidos.
* RF16: Activar notificaciones de un partido.
* RF17: Poder seleccionar uno o varios equipos favoritos para que nos lleguen notificaciones con noticias de estos.
* RF18: Ingresar el resultado y novedades de un partido como administrador.
* RF19: Ranking de usuarios por sus predicciones al finalizar el mundial.
* RF20: Sección de noticias sobre el mundial.

# Requerimientos No Funcionales
## Eficiencia
* RNF1: Toda funcionalidad del sistema debe responder al usuario en menos de 5 segundos.
* RNF2: La aplicación debe de estar disponible las 24 horas los 7 días de la semana.
## Usabilidad
* RNF3: El sistema debe contar con manuales de usuario.
* RNF4: El sistema debe poseer un diseño “Responsive” a fin de garantizar la adecuada visualización en múltiples desktops, tablets y teléfonos inteligentes.
* RNF5: El sistema debe proporcionar mensajes de error que sean informativos y orientados a usuario final.
* RNF6: El tiempo de aprendizaje del sistema por un usuario deberá ser menor a 3 horas.
## Seguridad
* RNF7: La longitud de las contraseñas del sistema deben tener mínimo 8 caracteres y debe incluir símbolos, al menos una mayúscula y al menos un número.
# User Stories
| Titulo | Prioridad |
| ---------- | ----------: |
| Función dar de alta un usuario.  | 1 |
#### Como: Usuario Final.
#### Quiero: Dar de alta un usuario dentro del sistema, para poder ingresar en el mismo.
### Criterios de aceptación: 
* 
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Función dar de alta un arbitro.  | 1 |
#### Como: Usuario Administrador.
#### Quiero: Dar de alta un arbitro dentro del sistema, para poder asignarlo al alta de un partido.
### Criterios de aceptación: 
* Poder dar de alta un usuario administrador en el sistema.
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Función dar de alta un estadio.  | 1 |
#### Como: Usuario Administrador.
#### Quiero: Dar de alta un estadio dentro del sistema, para poder asignarlo al alta de un partido.
### Criterios de aceptación: 
* Poder dar de alta un usuario administrador en el sistema.
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Función dar de alta un partido.  | 1 |
#### Como: Usuario Administrador.
#### Quiero: Dar de alta un partido dentro del sistema, para poder armar el fixture.
### Criterios de aceptación: 
* Poder dar de alta un arbitro en el sistema.
* Poder dar de alta un estadio en el sistema.
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Función dar de baja un usuario.  | 2 |
#### Como: Usuario administrador.
#### Quiero: Dar de baja un usuario dentro del sistema, para poder eliminar un usuario mal creado.
### Criterios de aceptación: 
* Poder dar de alta un usuario administrador en el sistema.
* Cada usuario cuente con un id único. 
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Función editar un pronostico.  | 3 |
#### Como: Usuario final.
#### Quiero: Editar un pronostico dentro del sistema, para poder volver a pronosticar el resultado de un partido.
### Criterios de aceptación: 
* El partido a editar no debe haberse jugado aún.
* El partido tiene que tener un resultado pronosticado anteriormente.
* Cada partido cuente con un id único. 
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Función ingresar un pronóstico (manual o aleatorio).  | 1 |
#### Como: Usuario final.
#### Quiero: Ingresar un pronostico dentro del sistema, sea aleatorio o no.
### Criterios de aceptación: 
* El partido a pronosticar no debe haberse jugado aún.
* Cada partido cuente con un id único. 
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Mostrar el fixture (del día o por grupos) y tabla de resultados | 1 |
#### Como: Usuario final.
#### Quiero: Ver un fixture seleccionando del dia y/o grupo y una tabla de resultados
### Criterios de aceptación: 
* Debe verse una tabla de fixtures seleccionable del dia.
* Debe verse una tabla de fixtures seleccionable por grupo.
* Debe verse una tabla de resultados actuales.
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Buscador de partidos y suscripción a notificaciones. | 3 |
#### Como: Usuario final.
#### Quiero: Buscar un partido por país vs país y activar las notificaciones
### Criterios de aceptación: 
* Debe verse un buscador que acepte el criterio país vs país.
* Debe aceptar algunos errores ortográficos.
* Una vez encontrado el partido el usuario se podrá suscribir a notificaciones.
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Ingresar el resultado y novedades de un partido como administrador. | 1 |
#### Como: Usuario administrador.
#### Quiero: Buscar un partido por país vs país y dar de alta resultado o novedades
### Criterios de aceptación: 
* Debe verse un buscador que acepte el criterio país vs país.
* Debe aceptar algunos errores ortográficos.
* Una vez encontrado el partido el usuario administrador podrá dar de alta su resultado.
* El usuario también podrá dar de alta novedades (como titulo/descripción) para las notificaciones.
* Una vez guardado se envía automáticamente la notificación o resultado
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Ranking de usuarios por sus predicciones al finalizar el mundial. | 1 |
#### Como: Usuario final.
#### Quiero: Ver un ranking de 10 usuarios según predicción al terminar el mundial.
### Criterios de aceptación: 
* Debe verse una tabla con usuarios y puntaje.
* Debe establecerse un criterio preciso y justo de puntaje según los resultados.
* No puede haber ambigüedades, en caso de dos usuarios con misma predicción se toma el primero que lo ingresó.
1) Debe de haberse dado de alta un árbitro al menos para asignarle al partido
2) Debe de haberse dado de alta un estadio al menos para asignarle al partido
#### **Post Condiciones**:
1) Se agrego el partido al fixture
#### **Trigger**: Se dio de alta el partido en el sistema
### **Interacciones:**
**Curso normal**
| Actor | Sistema |
| ---------- | ----------: |
| 1. Inicia el proceso de alta de un partido | 2. Solicita que seleccione un arbitro |
| 3. Selecciona un arbitro | 4. Solicita que seleccione un estadio |
| 5. Selecciona un estadio | 6. Solicita que ingrese la fecha para el partido |
| 7. Ingresa la fecha | 8. Valida la fecha |
|| 9. Se da de alta el partido |
| 10. Finaliza la interacción y muestra la pantalla principal||
#### **Cursos alternos**
* 2.1 Selecciona un arbitro que no esta disponible para ese día: se emite un mensaje 'este arbitro no esta disponible para la fecha ingresada'
* 4.1 Selecciona un estadio que esta ocupado con otro partido ese dia: se emite un mensaje 'este estadio no esta disponible para la fecha ingresada' 
---
| Caso de Uso | Requerimiento Asociado | Finalidad |
| ---------- | ----------: | ---------- |
| Eliminar un usuario del sistema | RF2: Eliminar un usuario | Eliminar un usuario del sistema porque se dio de alta con datos erróneos|
#### **Actor**: Usuario administrador
#### **Pre Condiciones**:
1) Debe de haber al menos un usuario en el sistema
2) Debemos conocer el nombre o el id del usuario a eliminar
#### **Post Condiciones**:
1) Se elimina el usuario del sistema
2) Se le informa al mail que tenia registrado el usuario que fue dado de baja y el motivo
#### **Trigger**: Se elimino el usuario del sistema(Inactivación lógica)
### **Interacciones**
#### **Curso normal**
| Actor | Sistema |
| ---------- | ----------: |
| 1. Inicia el proceso de eliminación de un usuario| 2. Solicita el nombre o el id del usuario a eliminar|
| 3. Ingresa el nombre o el id | 4. Valida que este exista |
|| 5. Elimina el usuario |
#### Cursos alternos
* 2.1 Se ingresa un usuario o id no existente: se emite un mensaje 'usuario o id ingresado no valido' 
---
| Caso de Uso | Requerimiento Asociado | Finalidad |
| ---------- | ----------: | ---------- |
| Ranking de usuarios | RF19: Ranking de usuarios por sus predicciones al finalizar el mundial. | Establecer la lista de usuarios con mejores predicciones |
#### **Actor**: Usuario final
#### **Pre Condiciones**:
1) Debe haber terminado el mundial
2) Debe haber al menos un usuario con predicción
3) Debe haberse dado al menos de alta un resultado de partido por el administrador
#### **Post Condiciones**:
1) Se genera una lista de usuarios según el algoritmo de puntaje
2) No se puede volver a cambiar resultados por el administrador posterior a ejecutar el ranking
3) Ningún usuario puede editar sus partidos ni alterar resultados
#### **Trigger**: Se elimino el usuario del sistema(Inactivación lógica)
### **Interacciones**
#### **Curso normal**
| Actor | Sistema |
| ---------- | ----------: |
| 1. El administrador navega a generar puntajes | 2. Muestra la pantalla y un botón para confirmar generar puntajes  |
| 3. Aprieta en generar puntajes | 4.  Genera los resultados y solicita confirmación para cerrar el mundial |
| 5. Acciona confirmar resultados | 5. Guarda los resultados definitivamente y cierra toda operación de modificación al sistema de resultados |
#### Cursos alternos
* 3.1 No hay apuestas o usuarios o resultados: se emite un mensaje 'faltan datos suficientes para generar puntajes' 
* 5.1 No confirma el resultado: se emite un mensaje 'se cancelaron los puntaje generados, puede volver a generarlos luego' 
# Bocetos de IU
* Lo pensamos como una aplicación SPA, por esto nos quedan estos bocetos sencillos de la aplicación.
* En pocas palabras, SPA son las siglas de Single Page Application. Es un tipo de aplicación web donde todas las pantallas las muestra en la misma página, sin recargar el navegador.
### Como usuario administrador:
![](bocetosiu/FixtureAdmin(Final).png)
---
### Como usuario final:
![](bocetosiu/FixtureUserFinal(Final).png)