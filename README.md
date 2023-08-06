# useFavicon



if you want to update the Favicon of your react page dynamically this is your hook.
in order to change the Favicon, you will need to pass the Image **url** as parameter to the hook, it will upate the **Favicon** of the current react page.

## API

**Arguments**

- `url` - The URL of the Favicon you want to use.

**Example**

```jsx
import useFavicon from "react-modify-favicon";
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
 useFavicon('https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196')
  return <div />
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## Installation

```
<<<<<<< HEAD
npm i react-modify-favicon
=======
$ npm install modify-favicon
>>>>>>> origin/main
