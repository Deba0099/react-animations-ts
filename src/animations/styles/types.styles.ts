import { slideAnimations } from './slideAnimation.style'

export type AnimationType = keyof typeof slideAnimations

export interface SlideAnimatedStyleProps {
  animationType?: AnimationType
}
