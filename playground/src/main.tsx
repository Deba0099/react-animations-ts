import React from 'react'
import ReactDOM from 'react-dom/client'
import { SlideAnimatedBox } from '../../src'
import { FlexBox, SquareBox } from './components'

const App = () => (
  <div>
    <h1>Development App</h1>
    <FlexBox>
      <SlideAnimatedBox animationType='SLIDE_LEFT_RIGHT' duration={1500} startPosition={0} endPosition={100}>
        <SquareBox />
      </SlideAnimatedBox>
    </FlexBox>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('playground') as HTMLElement)
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
)
