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
* RF10 Ingresar aleatoreamente un pronostioco a un partido.
* RF11: Editar el pronostico de un partido.
* RF12: Mostrar el fixture por grupos del mundial.
* RF13: Mostrar el fixture por dia.
* RF14: Mostrar tabla de puntos de cada grupo.
* RF15: Buscador de partidos.
* RF16: Activar notificaciones de un partido.
* RF17: Poder seleccionar uno o varios equipos favoritos para que nos lleguen notificaciones con noticias de estos.

---

# Requerimientos No Funcionales
## Eficiencia
* RNF1: Toda funcionalidad del sistema debe responder al usuario en menos de 5 segundos.
* RNF2: La aplicacion debe de estar disponible las 24 horas los 7 dias de la semana.
## Usabilidad
* RNF3: El sistema debe contar con manuales de usuario.
* RNF4: El sistema debe poseer un diseño “Responsive” a fin de garantizar la adecuada visualización en múltiples desktops, tablets y teléfonos inteligentes.
* RNF5: El sistema debe proporcionar mensajes de error que sean informativos y orientados a usuario final.
* RNF6: El tiempo de aprendizaje del sistema por un usuario deberá ser menor a 3 horas.
## Seguridad
* RNF7: La longitud de las contraseñas del sistema deben tener mínimo 8 caracteres y debe incluir símbolos, al menos una mayúscula y al menos un número.

---
# User Stories
| Titulo | Prioridad |
| ---------- | ----------: |
| Funcion dar de alta un usuario.  | 1 |
#### Como: Usuario Final.
#### Quiero: Dar de alta un usuario dentro del sistema, para poder ingresar en el mismo.
### Criterios de aceptación: 
* 
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Funcion dar de alta un arbitro.  | 1 |
#### Como: Usuario Administrador.
#### Quiero: Dar de alta un arbitro dentro del sistema, para poder asignarlo al alta de un partido.
### Criterios de aceptación: 
* Poder dar de alta un usuario administrador en el sistema.
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Funcion dar de alta un estadio.  | 1 |
#### Como: Usuario Administrador.
#### Quiero: Dar de alta un estadio dentro del sistema, para poder asignarlo al alta de un partido.
### Criterios de aceptación: 
* Poder dar de alta un usuario administrador en el sistema.
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Funcion dar de alta un partido.  | 1 |
#### Como: Usuario Administrador.
#### Quiero: Dar de alta un partido dentro del sistema, para poder armar el fixture.
### Criterios de aceptación: 
* Poder dar de alta un arbitro en el sistema.
* Poder dar de alta un estadio en el sistema.
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Funcion dar de baja un usuario.  | 2 |
#### Como: Usuario administrador.
#### Quiero: Dar de baja un usuario dentro del sistema, para poder eliminar un usuario mal creado.
### Criterios de aceptación: 
* Poder dar de alta un usuario administrador en el sistema.
* Cada usuario cuente con un id unico. 
---
| Titulo | Prioridad |
| ---------- | ----------: |
| Funcion editar un pronostico.  | 3 |
#### Como: Usuario final.
#### Quiero: Editar un pronostico dentro del sistema, para poder volver a pronosticar el resultado de un partido.
### Criterios de aceptación: 
* El partido tiene que tener un resultado pronosticado anteriormente.
* Cada partido cuente con un id unico. 
---
# Use Cases Detallados
| Caso de Uso | Requerimiento Asociado | Finalidad |
| ---------- | ----------: | ---------- |
| Dar de alta un partido en el sistema  | RF7: Alta de un partido | Ingresar un partido al fixture|
#### **Actor**: Usuario final
#### **Pre Condiciones**:
1) Debe de haberse dado de alta un arbito al menos para asignarle al partido
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
| Eliminar un usuario del sistema | RF2: Eliminar un usuario | Eliminar un usuario del sistema porque se dio de alta con datos erroneos|
#### **Actor**: Usuario administrador
#### **Pre Condiciones**:
1) Debe de haber al menos un usuario en el sistema
2) Debemos conocer el nombre o el id del usuario a eliminar
#### **Post Condiciones**:
1) Se elimina el usuario del sistema
2) Se le informa al mail que tenia registrado el usuario que fue dado de baja y el motivo
#### **Trigger**: Se elimino el usuario del sistema(Inactivacion lógica)
### **Interacciones**
#### **Curso normal**
| Actor | Sistema |
| ---------- | ----------: |
| 1. Inicia el proceso de eliminacion de un usuario| 2. Solicita el nombre o el id del usuario a eliminar|
| 3. Ingresa el nombre o el id | 4. Valida que este exista |
|| 5. Elimina el usuario |
#### Cursos alternos
* 2.1 Se ingresa un usuario o id no existente: se emite un mensaje 'usurio o id ingresado no valido' 

<!-- Bocetos de IU -->
