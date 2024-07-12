import { FC } from 'react'
import { ScaleAnimatedBoxStyled } from '../styles'
import { useAnimations } from '../useAnimation'
import { ScaleAnimatedBoxProps } from './types.components'

export const ScaleAnimatedBox: FC<ScaleAnimatedBoxProps> = ({
  startScale,
  endScale,
  duration,
  children,
  triggerOnClick = false,
}) => {
  const { useScaleAnimation } = useAnimations()
  const elementRef = useScaleAnimation({ startScale, endScale, duration, triggerOnClick })

  return <ScaleAnimatedBoxStyled ref={elementRef}>{children}</ScaleAnimatedBoxStyled>
}
