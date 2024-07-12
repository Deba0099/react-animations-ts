import { useRef, useEffect } from 'react'
import { ScaleAnimationProps } from './types.hooks'

export const useScaleAnimation = ({
  startScale,
  endScale,
  duration,
  triggerOnClick = false,
}: ScaleAnimationProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const startAnimation = () => {
      element.style.setProperty('--startScale', `${startScale}`)
      element.style.setProperty('--endScale', `${endScale}`)
      element.style.setProperty('--animationDuration', `${duration}ms`)
      element.classList.add('scale-animation')
    }

    if (triggerOnClick) {
      element.addEventListener('click', startAnimation)
    } else {
      startAnimation()
    }

    return () => {
      if (triggerOnClick) {
        element.removeEventListener('click', startAnimation)
      }
      element.classList.remove('scale-animation')
      element.style.removeProperty('--startScale')
      element.style.removeProperty('--endScale')
      element.style.removeProperty('--animationDuration')
    }
  }, [startScale, endScale, duration, triggerOnClick])

  return elementRef
}
