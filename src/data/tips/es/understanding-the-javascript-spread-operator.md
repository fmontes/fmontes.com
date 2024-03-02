---
title: Comprendiendo el operador de propagación en JavaScript
description: Una guía rápida sobre cómo usar el operador de propagación en JavaScript para manipular arrays y objetos.
date: 2024-02-08
---

El operador de propagación en JavaScript es una herramienta útil para manipular arrays y objetos. 

```javascript
// Operador de propagación con arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // arr2 = [1, 2, 3, 4, 5, 6]

// Operador de propagación con objetos
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // obj2 = { a: 1, b: 2, c: 3 }
```

El operador de propagación es una característica poderosa de JavaScript que facilita el trabajo con arrays y objetos, ya que te permite expandirlos en lugares donde se esperan cero o más elementos o propiedades.