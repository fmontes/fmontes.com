---
title: "How to use validationMessage"
description: "The HTMLObjectElement.validationMessage property represents an error message displayed if an object element is not valid, or an empty string if it is valid. It is used to implement custom error messages for form validation."
date: "2023-01-01"
category: javascript
---


When validating forms we have to do a lot of logic to create the messages depending on the type of validation we are doing, but the browser has a built-in native system that works well for that.

## **`HTMLObjectElement.validationMessage`**

The `validationMessage` property **** allows to obtain the validation message of a form element and it is native of the browser so it comes with translations by default.

To get this property we look for the element using `querySelector` and from that object we look for the `validationMessage` property.

## Example

We have the following form:

```html
<form>
    <div>
        <label for="email">Email:</label>
        <input id="email" type="email" />
    </div>
    <div>
        <label for="url">Url:</label>
        <input id="url" type="url" />
    </div>
    <div>
        <label for="month">Month:</label>
        <input type="month" name="month" id="month" min="2022-06" />
    </div>
    <div>
        <label for="number">Min 1 & Max 100:</label>
        <input id="number" type="number" min="1" max="100" />
    </div>
    <div id="message">Here goes the validation message</div>
</form>
```

In this HTML it is important to highlight the `type` attribute of each `<input>` because based on this `type` is how the browser will do the corresponding validation:

Now the JavaScript code:

```jsx
const form = document.querySelector('form');
const message = document.querySelector('#message');

form.addEventListener('input', addMessage)

function addMessage(e) {
    const validationMessage = e.target.validationMessage;
    message.innerText = validationMessage || 'Here goes the validation message'
}
```

Let’s explain line by line

1. We get the element with the `form` tag and the element with the id `#message`
2. To the `form` element we listen to the `input` event, this will be fired when the user writes in any of the `<input>` children.
3. When the event is triggered we call the function `addMessage`
4. The `addMessage` function receives the event in the parameter `e`
5. Inside the event we look for the `target` and inside the `validationMessage`
6. If the `validationMessage` has a `string`, we add it to the DOM with the `innerText` of the `#message` element.

In this case when user enter any value to any of the `<input>` the `input` event will be fired and in the callback we will write in the DOM the `validationMessage` if any exists.

## Demo

[https://codepen.io/fmontes/pen/MWByqOv](https://codepen.io/fmontes/pen/MWByqOv)