import { ReactNode } from 'react'

export interface SlideAnimatedBoxProps {
  children: ReactNode
  duration?: number
  startPositionY?: number
  endPositionY?: number
  triggerOnClick?: boolean
  isClickable?: boolean | undefined
}

export interface ScaleAnimatedBoxProps {
  children: ReactNode
  startScale: number
  endScale: number
  duration: number
  triggerOnClick?: boolean
}
