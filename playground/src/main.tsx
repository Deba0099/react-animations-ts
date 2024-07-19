import React from 'react';
import ReactDOM from 'react-dom/client'
import { SlideAnimatedBox } from '../../src';
import { FlexBox, SquareBox } from './components';

const App = () => (
  <div>
    <h1>Development App</h1>
    <FlexBox>
      <SlideAnimatedBox duration={1000} startPosition={0} endPosition={-150}>
        <SquareBox />
      </SlideAnimatedBox>
    </FlexBox>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('playground') as HTMLElement)
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
)
