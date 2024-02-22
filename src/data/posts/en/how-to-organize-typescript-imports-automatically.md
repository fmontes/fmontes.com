---
title: "How to organize TypeScript imports automatically"
description: "Imports at the start of TypeScript files can quickly get out of hand, but with VSCode and an npm package you can keep them well organized."
date: "2023-01-08"
category: typescript
---


Separating your code into modules is the best thing you can do for your project, not only for performance but also for organization.

`imports` are the first thing you will have in your TypeScript files and they can quickly get out of control.

## VSCode Organize Imports

VSCode has a command that organizes your imports automatically:

1. Open the `⇧⌘P or Ctrl+Shift+P` command palette.
2. And run "Organize Imports".

**When you run this command:**

- It will remove unused imports.
- Organize imports by name and paths alphabetically.

## **Run it in multiple files**

In VSCode you have to open each file and run the command on each one, which can be quite time consuming.

There is an `npm` package that allows you to run it on multiple files automatically.

## Using organize-imports-cli

1. `npm install -g organize-imports-cli`
2. Then you just run it and pass it the files `bash organize-imports-cli path/to/folder/**/**/*.ts`

And here we use the wildcard `**/*.ts` so that it takes all files with the `.ts` extension in all folders.