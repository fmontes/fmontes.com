---
title: "Cómo mejoré la velocidad de carga de esta página en un 20%."
description: "Desde que desarrollé este sitio, sabía que había ciertos problemas de rendimiento y que en algún momento tenía que solucionarlo, ese momento fue ayer."
date: '2022-03-19'
category: web,css,javascript
---

Desde que desarrollé esta página, sabía que había ciertos problemas de rendimiento y que en algún momento tenía que solucionarlo, ese momento fue ayer.

## Para saber qué mejorar, tienes que medir

Utilizando Google PageSpeed Insights, una herramienta de Google Chrome que informa sobre el rendimiento de una página en dispositivos móviles y de escritorio, y ofrece sugerencias sobre cómo mejorar esa página.

Al ejecutar Google PageSpeed Insights en esta página, nos dimos cuenta de inmediato de que tiene algunos problemas importantes de rendimiento, veamos los resultados.

![Resultados de Google PageSpeed Insights para esta página.](https://res.cloudinary.com/fmontes/image/upload/v1646486968/fmontes.com/how-i-improved-the-loading-speed-of-this-page-by-20/001.png)

Resultados de Google PageSpeed Insights para esta página.

Un rendimiento de 77 no es un buen resultado (por eso está en amarillo 😂) y esto es precisamente lo que quiero solucionar, pero para saber cómo solucionarlo necesito echar un vistazo más de cerca.

## Echando un vistazo más de cerca a las métricas.

En el informe de Google PageSpeed Insights pude ver con más detalle cuáles son los problemas que la página tiene para que el rendimiento sea solo de 77 sobre 100.

En los detalles de las métricas pude ver que el Tiempo de Interacción y el Tiempo de Bloqueo Total eran muy altos, 5.7 segundos y 850 milisegundos respectivamente.

En la siguiente imagen podemos ver que hay dos métricas que están mal (amarillo y rojo):

![https://res.cloudinary.com/fmontes/image/upload/v1646486968/fmontes.com/how-i-improved-the-loading-speed-of-this-page-by-20/002.png](https://res.cloudinary.com/fmontes/image/upload/v1646486968/fmontes.com/how-i-improved-the-loading-speed-of-this-page-by-20/