import React from 'react'
import ReactDOM from 'react-dom/client'
import { SlideAnimatedBox } from 'react-animations-ts'
import { FlexBox, SquareBox } from './components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <FlexBox>
      <SlideAnimatedBox duration={1000} startPosition={0} endPosition={-150}>
        <SquareBox />
      </SlideAnimatedBox>
    </FlexBox>
  </React.StrictMode>,
)
