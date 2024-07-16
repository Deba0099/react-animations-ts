import styled, { keyframes, css } from 'styled-components'
import { SlideAnimatedStyleProps } from './types.styles'

export const slideTopBottom = keyframes`
  0% {
    transform: translateY(var(--startPosition));
  }
  100% {
    transform: translateY(var(--endPosition));
  }
`

export const slideLeftRight = keyframes`
  0% {
    transform: translateX(var(--startPosition));
  }
  100% {
    transform: translateX(var(--endPosition));
  }
`

export const slideTR = keyframes`
  0% {
    transform: translateY(var(--startPosition)) translateX(var(--startPosition));
  }
  100% {
    transform: translateY(calc(-1 * var(--endPosition))) translateX(var(--endPosition));
  }
`;

export const slideBL = keyframes`
  0% {
    transform: translateY(var(--startPosition)) translateX(var(--startPosition));
  }
  100% {
    transform: translateY(var(--endPosition)) translateX(calc(-1 * var(--endPosition)));
  }
`;

export const slideAnimations = {
  SLIDE_TOP_BOTTOM: slideTopBottom,
  SLIDE_LEFT_RIGHT: slideLeftRight,
  SLIDE_TOP_RIGHT: slideTR,
  SLIDE_BOTTOM_LEFT: slideBL,
}

export const SlideAnimatedStyle = styled.div<SlideAnimatedStyleProps>`
  ${({ animationType = 'SLIDE_TOP_BOTTOM', duration }) => css`
    &._rat-slide {
      animation: ${slideAnimations[animationType]} ${duration}ms
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  `}
`



