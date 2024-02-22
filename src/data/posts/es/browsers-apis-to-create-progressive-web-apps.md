---
title: "APIs del navegador para crear aplicaciones web progresivas"
description: "Vamos a explicar las API más importantes disponibles para crear aplicaciones web progresivas y publicarlas en las tiendas de aplicaciones."
date: '2023-01-21'
category: web
---

Las aplicaciones web progresivas son cada vez más compatibles con gigantes tecnológicos como Microsoft, quienes permiten y fomentan su publicación en sus tiendas de aplicaciones.

La plataforma web contiene una serie de API que te permiten crear aplicaciones que brindan experiencias de usuario cada vez más cercanas a las aplicaciones nativas.

En esta publicación de blog enumeraré algunas de las API necesarias para construir aplicaciones web exitosas.

## Contenido disponible sin conexión

Carga el contenido, guárdalo en caché y úsalo mientras el usuario no tenga conexión a Internet, esto se puede lograr con:

- Workbox (la biblioteca) tiene una [receta de almacenamiento en caché](https://developer.chrome.com/docs/workbox/serving-cached-audio-and-video/) para audio y video.
- Con la [API de caché](https://developer.mozilla.org/docs/Web/API/Cache) puedes almacenar en caché objetos de solicitud y respuesta HTTP.

## Descargar información en segundo plano

Puedes delegar al navegador, que detecta cuando está en línea y comienza o reanuda la descarga de recursos con la [API de descarga en segundo plano](https://developers.google.com/web/updates/2018/12/background-fetch).

## Compartir contenido

No solo puedes compartir contenido desde tu PWA con la [API de intercambio web](https://web.dev/web-share/), sino que también puedes recibir contenido en tu aplicación web con la [API de destino de intercambio web](https://web.dev/web-share-target/).

## Actualización de contenido de la aplicación web en segundo plano

Puedes mantener el contenido actualizado en "segundo plano" utilizando la [API de sincronización en segundo plano periódica](https://web.dev/periodic-background-sync/).

## Sincronizar el estado con el servidor

¿Qué sucede cuando el usuario está sin conexión y realiza algún cambio? Necesitas permitir eso y puedes delegar, mantener la sincronización con la [API de sincronización en segundo plano](