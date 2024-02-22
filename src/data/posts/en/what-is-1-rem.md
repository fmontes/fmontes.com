---
external: false
title: "What is 1rem?"
description: "Just like px or %, it is a CSS unit that allows you to set lengths on your website, but this length is dependent on the root element, hence its name."
date: '2023-02-06'
category: css
---


Just like `px` or `%`, it is a CSS unit that allows you to set lengths on your website, but this length is dependent on the root element, hence its name.

## What is the `root` element?

The `root` element is the box **that contains the rest of the elements** of the page, it is the `html` tag. What makes this box special is that its `font-size` will serve as the basis for setting lengths for elements that use `rem` measurements.

<aside>
🌟 By default, the root’s element font size is 16px.

</aside>

## How does the root element affect rem?

So, based on the fact that the root element's font-size is 16px, when you do, for example:

```css
.box {
  display: block;
  height: 1rem;
  width: 1rem;
}
```

The width and height of the box will be translated into **16 x 16 pixels**. That is, `1rem` is equal to the `font-size` of the root element and, as you suspected, being relative:

1. `0.5rem` is `8px` (16 * 0.5)
2. `2rem` is `32px` (16 * 2)
3. `4rem` is `64px` (16 * 4) and so on.

## How to change the font size of the root element?

You need to add a rule to your stylesheet, where you specify the `font-size` you want to use.

For example, to set the root element's `font-size` to `14px`, use the following rule:

```css
html {
  font-size: 14px;
}
```

By making this change, all lengths you used in your styles will be relative to 14px then.

1. `0.5rem` is `7px` (14 * 0.5)
2. `2rem` is `28px` (14 * 2)
3. `4rem` is `56px` (14 * 4) and so on.

## Conclusion

In summary, `rem` is a relative unit of measure that is based on the `font-size` of the root element of your website and this allows you to set lengths relative to that element and with this pattern you can make your websites and applications more "responsive".