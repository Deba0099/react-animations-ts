import styled, { keyframes, css } from 'styled-components'
import { slideAnimations } from './constants.styles'
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
    transform: translateY(calc(-1 * var(--endPositionY))) translateX(var(--endPosition));
  }
`;

export const slideBL = keyframes`
  0% {
    transform: translateY(var(--startPosition)) translateX(var(--startPosition));
  }
  100% {
    transform: translateY(var(--endPosition)) translateX(calc(-1 * var(--endPositionY)));
  }
`;

export const SlideAnimatedStyle = styled.div<SlideAnimatedStyleProps>`
  ${({ animationType = 'SLIDE_TOP_BOTTOM', duration }) => css`
    &._rat-slide {
      animation: ${slideAnimations[animationType]} ${duration}ms
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  `}
`


// ! Below code will be deleted if the above works  fine

// import styled, { keyframes } from 'styled-components'

// const slideTop = keyframes`
//   0% {
//     transform: translateY(var(--startPosition));
//   }
//   100% {
//     transform: translateY(var(--endPosition));
//   }
// `

// export const SlideAnimatedStyle = styled.div<{ duration: number }>`
//   &.slide-top {
//     animation: ${slideTop} ${({ duration }) => duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
//   }
// `
