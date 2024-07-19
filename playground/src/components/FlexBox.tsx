import React, { ReactNode } from 'react'

// Define the style object
const flexBoxStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
  border: '1px solid red',
}

interface FlexBoxProps {
  children: ReactNode
}

export const FlexBox: React.FC<FlexBoxProps> = ({ children }) => {
  return <div style={flexBoxStyle}>{children}</div>
}
