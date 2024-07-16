import { slideAnimations } from './constants.styles'

export type AnimationType = keyof typeof slideAnimations

export interface SlideAnimatedStyleProps {
  duration: number
  animationType?: AnimationType
}
