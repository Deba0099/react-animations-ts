import styled from 'styled-components'

export const ScaleAnimatedBoxStyled = styled.div`
  &.scale-animation {
    animation: scale-animation var(--animationDuration) cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes scale-animation {
    0% {
      transform: scale(var(--startScale));
    }
    100% {
      transform: scale(var(--endScale));
    }
  }
`
