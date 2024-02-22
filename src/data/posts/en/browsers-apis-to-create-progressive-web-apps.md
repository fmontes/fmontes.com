---
title: "Browser APIs to create progressive web apps"
description: "We are going to explain the most important APIs available to create progressive web apps and publish them in the app stores."
date: '2023-01-21'
category: web
---


Progressive web apps are increasingly supported by technology giants such as Microsoft who allow and encourage you to publish them in their app stores.

The web platform contains a series of APIs that allow you to create applications that provide user experiences closer and closer to native applications.

In this blog post I will list some of the APIs needed to build successful web apps.

## Content available offline

Load the content, cache it and use it while the user has no internet connection, this can be achieved with:

- Workbox (the library) has a [caching recipe](https://developer.chrome.com/docs/workbox/serving-cached-audio-and-video/) audio and video.
- With the [Cache API](https://developer.mozilla.org/docs/Web/API/Cache) you can cache HTTP Request and Responses objects

## Download information in the background

You can delegate to the browser, which detects when it is online and starts or resumes downloading resources with the [Background Fetch API](https://developers.google.com/web/updates/2018/12/background-fetch).

## Content sharing

Not only can you share content from your PWA with the [Web Share API](https://web.dev/web-share/), but you can also receive content in your web app with the [Web Share Target API](https://web.dev/web-share-target/).

## Refreshing web app content in the background

You can keep the content fresh in the "background" using the [Periodic Background Sync API](https://web.dev/periodic-background-sync/).

## Synchronize the state with the server

And what happens when the user is offline and makes some change, you need to allow that and you can delegate, keep the synchronization with the [Background Sync API](https://developers.google.com/web/updates/2015/12/background-sync).

## Controlling the app with the multimedia keys

The multimedia keys are supported by the [Media Session API](https://web.dev/media-session/).

This includes keyboard keys, headphone buttons, smartwatches, etc. It also allows to take advantage of OS media controls, such as widgets.

## Integrate with local files

You can read and write files on the system using the [File System Access API](https://web.dev/file-system-access/), of course this is going to require permissions.

## Quick animations

There are many ways to make animations on the Web some ways include:

- [Animations and performance tips](https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance)
- [CSS Scroll Snap](https://developers.google.com/web/updates/2018/07/css-scroll-snap)
- [Web Animations API](https://developer.mozilla.org/docs/Web/API/Web_Animations_API)

## Content outside the PWA

With the [Content Index API](https://web.dev/content-indexing-api/) you can tell the browser which PWA content will "surface" outside the main app.

## Notifications

So we have two APIs [Push API](https://developers.google.com/web/fundamentals/push-notifications) and [Notification Triggers API](https://web.dev/notification-triggers/).

## Badges

Yes, those "uncomfortable" little balls on the icon can be put on the icon of your progressive web app with the [Push API](https://www.w3.org/TR/push-api/).

## Conclusion

Progressive web apps don't solve everything by far, but the web as a platform keeps improving and providing tools that allow those of us who work in technology to provide good solutions in a fast efficient way.