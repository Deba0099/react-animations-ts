import React, { ReactNode } from 'react'

// Define the style object
const squareBoxStyle: React.CSSProperties = {
  width: '100px',
  height: '100px',
  background: 'green',
  borderRadius: '8px',
}

interface SquareBoxProps {
  children?: ReactNode
}

export const SquareBox: React.FC<SquareBoxProps> = ({ children }) => {
  return <div style={squareBoxStyle}>{children}</div>
}
