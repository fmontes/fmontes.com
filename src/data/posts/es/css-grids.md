---
title: "Cómo utilizar CSS grids para crear el diseño de una página web"
description: "CSS grids es la forma más fácil y eficiente de crear diseños para tus páginas web y aplicaciones. Te explico cómo crear un diseño común fácilmente."
date: '2021-12-09'
category: css
---


CSS grids es un sistema de diseño nativo de CSS que reemplazó a los sistemas de diseño que se desarrollaron de manera "artesanal" (usando floats inicialmente y ahora con flexbox) para crear los diseños de páginas web y aplicaciones web.

Lo que CSS grids te permite hacer es **organizar los elementos del diseño** de una página de una manera más lógica, con menos código y más flexibilidad.

## Desarrollando un diseño con CSS grids

Trabajemos con un diseño común que tiene lo básico:

1. Encabezado
2. Barra lateral
3. Contenido (principal)

![https://res.cloudinary.com/fmontes/image/upload/v1639198122/fmontes.com/css-grids/001.jpg](https://res.cloudinary.com/fmontes/image/upload/v1639198122/fmontes.com/css-grids/001.jpg)

## El código HTML

El primer paso es crear el HTML. Es solo un elemento padre con tres elementos hijos. Nada fuera de lo común.

```html
<div>
	<header></header>
	<aside></aside>
	<main></main>
</div>
```

El elemento padre `.page` se encarga de definir la cuadrícula.

## Añadiendo las bases de CSS

Este diseño que estamos creando tiene una altura y anchura del 100%, para lograr esto tenemos que definir el CSS de `html` y `body`. Además, con fines de demostración, vamos a añadir un borde al `header`, `aside` y `main`.

```css
body, html {
	padding: 1rem;
	height: 100%;
	width: 100%;
}

header, aside, main {
	border: solid 2px;
}
```

## Creando el contenedor de la cuadrícula

Para definir la cuadrícula, establecemos que el elemento padre `.page` tenga `display: grid`. Esto creará un **"contenedor de cuadrícula"** y convertirá a todos los elementos hijos direct