## React css.gg

npm package removed since this will be merged in the main repo

### Usecase

Use `css.gg` icons without `styled-components` or it's SVG Sprite method. This package provides all SVG's exported as typed React Components

### Installation

```sh
yarn add react-css.gg
```

```sh
npm install react-css.gg
```

### Usage

```javascript
import React from "react";
import { Pokemon } from "react-css.gg";

const App = () => {
  return <Pokemon />;
};

export default App;
```

Icons can be sized (default: 24)

```javascript
<Pokemon size={42} />
```

You can also include the whole icon pack:

```javascript
import React from "react";
import * as Icons from "react-css.gg";

const App = () => {
  return <Icons.Pokemon />;
};

export default App;
```
