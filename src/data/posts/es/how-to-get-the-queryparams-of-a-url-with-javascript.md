---
title: "Cómo obtener los queryparams de una URL con JavaScript"
description: "Los query params o URLSearchParams son la parte final de la URL y se utilizan para enviar datos adicionales al servidor."
date: '2023-02-17'
category: javascript
---

Los query params o **URLSearchParams** son la parte final de la URL y se utilizan para enviar datos adicionales al servidor.

## Cómo identificar un query param?

Puedes identificarlos porque aparecen al final de la URL y comienzan con el símbolo `?`. Por ejemplo, en la URL `https://fmontes.com?search=webdesign&page=2`, los query params son `search=webdesign&page=2`.

- El símbolo `?` no forma parte de los query params, se utiliza para separar los parámetros de la URL.
- Por otro lado, el símbolo `&` se utiliza para separar múltiples query params, en este caso tenemos dos:
    - `search=webdesign`
    - `page=2`

## Obtener queryparams de una URL con JavaScript

Para obtener los queryparams vamos a utilizar dos APIs del navegador, la `URL` y **`URLSearchParams`.**.

Lo primero que debemos hacer es utilizar la API `URL`:

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=2>");
```

Dentro del objeto resultante, podemos obtener el objeto **`URLSearchParams` en la propiedad** `searchParams`:

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=2>");
const queryParams = url.searchParams;
```

### El objeto **`URLSearchParams`**.

Este objeto es como una caja de herramientas para interactuar con los query params y tiene varios métodos para agregar, editar o eliminar parámetros, por ejemplo.

El método `toString` devuelve los query params como una cadena:

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=2>");
const queryParams = url.searchParams;

queryParams.toString() //search=webdesign&page=2
```

Si necesitas obtener el valor de un query param, puedes hacerlo pasando la clave al método `get`

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=