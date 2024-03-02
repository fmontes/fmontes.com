---
title: How to Read and Write CSS Variables with JavaScript
description: Explore how to manipulate CSS variables directly from JavaScript, offering dynamic control over your webpage's styling.
date: 2024-02-08
---

Discover the power of CSS variables and how you can manipulate them directly from JavaScript. It's a great way to dynamically control your webpage's styling.

```javascript
// Reading a CSS variable
var color = window.getComputedStyle(document.documentElement).getPropertyValue('--my-var');

// Writing a CSS variable
document.documentElement.style.setProperty('--my-var', 'blue');
```

This tip demonstrates how to read and write CSS variables from JavaScript. Reading CSS variables allows you to access the current values, while writing allows you to change these values on the fly.