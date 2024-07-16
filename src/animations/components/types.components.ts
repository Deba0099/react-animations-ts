import { ReactNode } from 'react'
import { AnimationType } from '../styles/types.styles'

export interface SlideAnimatedBoxProps {
  children: ReactNode
  duration?: number
  startPosition?: number
  endPosition?: number
  triggerOnClick?: boolean
  isClickable?: boolean | undefined
  animationType?: AnimationType
}

export interface ScaleAnimatedBoxProps {
  children: ReactNode
  startScale: number
  endScale: number
  duration: number
  triggerOnClick?: boolean
}
