---
title: Understanding the JavaScript Spread Operator
description: A quick guide on how to use the JavaScript spread operator to manipulate arrays and objects.
date: 2024-02-08
---

The JavaScript spread operator is a useful tool for manipulating arrays and objects. 

```javascript
// Spread Operator with Arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // arr2 = [1, 2, 3, 4, 5, 6]

// Spread Operator with Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // obj2 = { a: 1, b: 2, c: 3 }
```

The spread operator is a powerful JavaScript feature that makes it easier to work with arrays and objects by allowing you to expand them in places where zero or more elements or properties are expected.