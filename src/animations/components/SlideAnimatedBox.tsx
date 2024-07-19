import { SlideAnimatedStyle } from '../styles'
import { useAnimations } from '../useAnimation'
import { SlideAnimatedBoxProps } from './types.components'

export const SlideAnimatedBox: React.FC<SlideAnimatedBoxProps> = ({
  children,
  duration = 500,
  startPosition = 0,
  endPosition = 100,
  triggerOnClick = false,
  isClickable = undefined,
  animationType,
}) => {
  const { useSlideAnimation } = useAnimations()
  const elementRef = useSlideAnimation({
    duration,
    startPosition,
    endPosition,
    triggerOnClick,
    isClickable,
  })

  return (
    <SlideAnimatedStyle animationType={animationType} ref={elementRef} >
      {children}
    </SlideAnimatedStyle>
  )
}
