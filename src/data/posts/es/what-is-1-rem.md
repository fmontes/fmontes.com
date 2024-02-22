---
external: false
title: "¿Qué es 1rem?"
description: "Al igual que px o %, es una unidad de medida de CSS que te permite establecer longitudes en tu sitio web, pero esta longitud depende del elemento raíz, de ahí su nombre."
date: "2023-02-06"
category: css
cover: https://images.unsplash.com/photo-1529651795107-e5a141e34843
---


Al igual que `px` o `%`, es una unidad de medida de CSS que te permite establecer longitudes en tu sitio web, pero esta longitud depende del elemento raíz, de ahí su nombre.

## ¿Qué es el elemento `root`?

El elemento `root` es el contenedor **que contiene el resto de los elementos** de la página, es la etiqueta `html`. Lo que hace especial a esta caja es que su `font-size` servirá como base para establecer longitudes para elementos que utilizan medidas en `rem`.

<aside>
🌟 Por defecto, el tamaño de fuente del elemento raíz es de 16px.

</aside>

## ¿Cómo afecta el elemento raíz a rem?

Entonces, basándonos en el hecho de que el tamaño de fuente del elemento raíz es de 16px, cuando haces, por ejemplo:

```css
.box {
  display: block;
  height: 1rem;
  width: 1rem;
}
```

El ancho y alto de la caja se traducirán en **16 x 16 píxeles**. Es decir, `1rem` es igual al `font-size` del elemento raíz y, como sospechabas, es relativo:

1. `0.5rem` es `8px` (16 * 0.5)
2. `2rem` es `32px` (16 * 2)
3. `4rem` es `64px` (16 * 4) y así sucesivamente.

## ¿Cómo cambiar el tamaño de fuente del elemento raíz?

Necesitas agregar una regla a tu hoja de estilos, donde especifiques el `font-size` que deseas utilizar.

Por ejemplo, para establecer el `font-size` del elemento raíz en `14px`, utiliza la siguiente regla:

```css
html {
  font-size: 14px;
}
```

Al realizar este cambio,