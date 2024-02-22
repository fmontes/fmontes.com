---
title: "How to get the queryparams of a URL with JavaScript"
description: "Query params or URLSearchParams are the final part of the URL and are used to send additional data to the server."
date: "2023-02-17"
category: javascript
---


Query params or **URLSearchParams** are the final part of the URL and are used to send additional data to the server.

## How to identify a query param?

You can identify them because they come at the end of the URL and begin with the `?` symbol. For example in the url `https://fmontes.com?search=webdesign&page=2` the query params are `search=webdesign&page=2`.

- The `?` symbol is not part of the query params it is used to separate the url parameters.
- The `&` symbol on the other hand, is used to separate multiple query params, in this case we have two:
    - `search=webdesign`
    - `page=2`

## Get queryparams from a URL with JavaScript

To get the queryparams we are going to use two browser APIs, the `URL` and the **`URLSearchParams`.**.

The first thing we have to do is to use the `URL` API:

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=2>");
```

Inside the resulting object we can get the object **`URLSearchParams` in the property** `searchParams`:

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=2>");
const queryParams = url.searchParams;
```

### The **`URLSearchParams`** object.

This object is like a toolbox for interacting with query params and has several methods for adding, editing or deleting parameters, e.g.

The `toString` method returns the query params as a string:

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=2>");
const queryParams = url.searchParams;

queryParams.toString() //search=webdesign&page=2
```

If you need to get the value of a query param you can do it by passing the key to the ``get` method

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=2>");
const queryParams = url.searchParams;

queryParams.get('search') //webdesign
```

You can add a new query param with the `append` method:

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=2>");
const queryParams = url.searchParams;

queryParams.append('order', 'ASC')

queryParams.toString() //search=webdesign&page=2&order=ASC
```

And of course, you can also delete by passing the key to the `delete` method

```jsx
const url = new URL("<https://fmontes.com?search=webdesign&page=2>");
const queryParams = url.searchParams;

queryParams.delete('page')

queryParams.toString() //search=webdesign&order=ASC
```

And like this there are many more methods that you can see in the [official documentation](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

## Conclusion

In summary, query params or **URLSearchParams** are used to send additional data to the server through the URL. They are identified because they come at the end of the URL and begin with the **`?`** symbol. With the **`URL`** and **`URLSearchParams`** API in JavaScript, it is easy to get, add, edit and remove query params from a URL.