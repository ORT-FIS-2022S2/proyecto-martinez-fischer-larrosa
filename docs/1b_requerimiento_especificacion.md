# 1b Requerimientos

## Especificación
---
# Requerimientos Funcionales
* Crear un usuario.
* Eliminar un usuario.
* Login.
* Alta de de un equipo.
* Alta de un estadio.
* Alta de un arbitro.
* Alta de un partido.
* Eliminar un partido.
* Ingresar manualmente un pronostico a un partido.
* Ingresar aleatoreamente un pronostioco a un partido.
* Editar el pronostico de un partido.
* Mostrar el fixture por grupos del mundial.
* Mostrar el fixture por dia.
* Mostrar tabla de puntos de cada grupo.
* Buscador de partidos.
* Activar notificaciones de un partido.
* Poder seleccionar uno o varios equipos favoritos para que nos lleguen notificaciones con noticias de estos.

---

# Requerimientos No Funcionales
## Eficiencia
* Toda funcionalidad del sistema debe responder al usuario en menos de 5 segundos.
* El tiempo de aprendizaje del sistema por un usuario deberá ser menor a 3 horas.
## Usabilidad
* El sistema debe contar con manuales de usuario.
* El sistema debe poseer un diseño “Responsive” a fin de garantizar la adecuada visualización en múltiples desktops, tablets y teléfonos inteligentes.
* El sistema debe proporcionar mensajes de error que sean informativos y orientados a usuario final.
## Seguridad
* La longitud de las contraseñas del sistema deben tener mínimo 8 caracteres y debe incluir símbolos, al menos una mayúscula y al menos un número.

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


<!-- / Use Cases detallados -->

<!-- Bocetos de IU -->
