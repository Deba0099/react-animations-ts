import styled, { keyframes } from 'styled-components'

const slideTop = keyframes`
  0% {
    transform: translateY(var(--startPositionY));
  }
  100% {
    transform: translateY(var(--endPositionY));
  }
`

export const SlideAnimatedStyle = styled.div<{ duration: number }>`
  &.slide-top {
    animation: ${slideTop} ${({ duration }) => duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`
