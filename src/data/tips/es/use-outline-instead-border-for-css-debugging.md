---
title: Usar Outline en lugar de Border para depurar CSS
description: Un consejo sencillo sobre cómo usar outline en lugar de border para depurar CSS, ya que no altera el tamaño de la caja.
date: 2024-02-08
---

Cuando estás depurando CSS, es beneficioso usar 'outline' en lugar de 'border' ya que no cambia el tamaño de la caja.

```css
.debug {
  outline: 1px solid red;
}
```

Al usar 'outline' en lugar de 'border', evitas afectar el tamaño de la caja, lo cual puede distorsionar el diseño. Este método proporciona un proceso de depuración más preciso.