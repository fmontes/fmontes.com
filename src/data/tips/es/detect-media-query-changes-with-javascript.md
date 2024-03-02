---
title: Detectar cambios en las consultas de medios con JavaScript
description: Aprende cómo utilizar JavaScript para detectar cambios en las consultas de medios, una habilidad esencial para crear diseños web responsivos.
date: 2024-02-08
---

En el diseño web responsivo de hoy en día, es crucial detectar cambios en las consultas de medios. JavaScript proporciona una forma de hacer esto.

```javascript
// Crea una lista de consultas de medios
var mediaQueryList = window.matchMedia('(max-width: 600px)');

// Define una función que se llamará cada vez que cambie el estado de la consulta de medios
function mediaQueryListener(e) {
  if (e.matches) {
    // La consulta de medios ahora coincide
  } else {
    // La consulta de medios ya no coincide
  }
}

// Agrega la función del listener a la lista de consultas de medios
mediaQueryList.addListener(mediaQueryListener);
```

Este consejo muestra cómo utilizar JavaScript para escuchar cambios en una consulta de medios. Esto es útil para ajustar dinámicamente el diseño o el comportamiento de un sitio web en función del tamaño de la ventana del usuario.