---
title: Detecting User's Geolocation in JavaScript
description: Learn how to detect the position of a user with the navigator.geolocation.getCurrentPosition method in JavaScript.
date: 2024-02-08
---

In this tip, we will learn how to detect a user's position using JavaScript's Geolocation API.

```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      console.log(position);
    },
    function(error) {
      console.error("Error Code = " + error.code + " - " + error.message);
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}
```

This code checks if the user's browser supports geolocation. If it does, it retrieves their current position and logs it to the console. If it doesn't, it logs an error message to the console. If an error occurs while retrieving the position (for example, the user denies permission), it logs the error code and message.