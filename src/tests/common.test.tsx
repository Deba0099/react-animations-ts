import { render } from '@testing-library/react'

import 'jest-canvas-mock'
import App from '../App'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
