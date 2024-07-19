# react-animations-ts

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]


Now its under development. Please don’t download this. 
<!-- [**Live Demo**](https://Deba0099.github.io/react-animations-ts/) -->

## Installation:

```bash
npm install react-animations-ts --save-dev
```

or

```bash
npm install -D react-animations-ts
```

## Animation Types

`1. SlideAnimatedBox` 

Props are : `duration`, `startPosition`, `endPosition`, `animationType` 
You can play around with `0` (Note : 0 is the actual position of the element), `positive` and `negative` numbers.

### `animationType` Behaviour : 
### Slide Animation: Top to Bottom (SLIDE_TOP_BOTTOM)

1. When the `startPosition` is 0:
   - If the `endPosition` is a positive number, the element will move from its actual position to the bottom.
   - If the `endPosition` is a negative number, the element will move from its actual position to the top.
2. When the `endPosition` is 0:
   - If the `startPosition` is a negative number, the element will move from the top to its actual position.
   - If the `startPosition` is a positive number, the element will move from the bottom to its actual position.


### Slide Animation: Left to Right (SLIDE_LEFT_RIGHT)

1. When the `startPosition` is 0:
   - If the `endPosition` is a positive number, the element will move from its actual position to the right.
   - If the `endPosition` is a negative number, the element will move from its actual position to the left.
2. When the `endPosition` is 0:
   - If the `startPosition` is a negative number, the element will move from the left to its actual position.
   - If the `startPosition` is a positive number, the element will move from the right to its actual position.


### Slide Animation: Top-Right to Bottom-Left (SLIDE_TR_BL)

1. When the `startPosition` is 0:
   - If the `endPosition` is a positive number, the element will move from its actual position to the top-right corner.
   - If the `endPosition` is a negative number, the element will move from its actual position to the bottom-left corner.
2. When the `endPosition` is 0:
   - If the `startPosition` is a negative number, the element will move from the top-left corner to its actual position.
   - If the `startPosition` is a positive number, the element will move from the bottom-right corner to its actual position.




## Usage :

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { SlideAnimatedBox } from 'react-animations-ts'


const squareBoxStyle: React.CSSProperties = {
  width: '100px',
  height: '100px',
  background: 'white',
  color:'#0C161C',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const flexBoxStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
  background:'#0C161C'
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <div style={flexBoxStyle}>
            <SlideAnimatedBox duration={1000} startPosition={-100} endPosition={100}>
                <div style={squareBoxStyle}>OMM</div>
            </SlideAnimatedBox>
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/react-animations-ts
[npm-image]: https://img.shields.io/npm/v/react-animations-ts
[github-license]: https://img.shields.io/github/license/Deba0099/react-animations-ts
[github-license-url]: https://github.com/Deba0099/react-animations-ts/blob/master/LICENSE
[github-build]: https://github.com/Deba0099/react-animations-ts/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/Deba0099/react-animations-ts/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-animations-ts
