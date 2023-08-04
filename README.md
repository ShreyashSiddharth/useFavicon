# useFavicon

[![npm version][npmv-image]][npmv-url]
[![build status][gh-actions-image]][gh-actions-url]
[![coverage status][codecov-image]][codecov-url]
[![npm downloads][npmd-image]][npmd-url]
[![minzipped size][minzipped-size-image]][minzipped-size-url]

if you want to update the Favicon of your react page dynamically this is your hook.
in order to change the Favicon, you will need to pass the **url** as parameter to the hook, it will upate the **Favicon** of the current react page.

## API

**Arguments**

- `url` - The URL of the Favicon you want to use.

**Example**

```jsx
useFavicon('https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196')
```

## Installation

```
$ npm install modify-favicon