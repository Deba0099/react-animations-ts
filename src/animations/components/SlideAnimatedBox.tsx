import { SlideAnimatedStyle } from '../styles'
import { useAnimations } from '../useAnimation'
import { SlideAnimatedBoxProps } from './types.components'

export const SlideAnimatedBox: React.FC<SlideAnimatedBoxProps> = ({
  children,
  duration = 500,
  startPositionY = 0,
  endPositionY = -100,
  triggerOnClick = false,
  isClickable = undefined,
}) => {
  const { useSlideAnimation } = useAnimations()
  const elementRef = useSlideAnimation({
    duration,
    startPositionY,
    endPositionY,
    triggerOnClick,
    isClickable,
  })

  return (
    <SlideAnimatedStyle ref={elementRef} duration={duration}>
      {children}
    </SlideAnimatedStyle>
  )
}
