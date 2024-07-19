import { useRef, useEffect } from 'react'
import { SlideAnimationStylesProps } from './types.hooks'

export const useSlideAnimation = ({
  duration,
  startPosition,
  endPosition,
  triggerOnClick,
  isClickable,
  overrideParentOverflow,
}: SlideAnimationStylesProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const startAnimation = () => {
      element.style.setProperty('--duration', `${duration}ms`)
      element.style.setProperty('--startPosition', `${startPosition}px`)
      element.style.setProperty('--endPosition', `${endPosition}px`)
      element.classList.add('_rat-slide')
    }

    if (triggerOnClick && isClickable) {
      element.addEventListener('click', startAnimation)
    } else if (!isClickable) {
      startAnimation()
    }
    return () => {
      if (triggerOnClick) {
        element.removeEventListener('click', startAnimation)
      }
      element.classList.remove('_rat-slide')
    }
  }, [duration, startPosition, endPosition, triggerOnClick, isClickable, overrideParentOverflow])

  return elementRef
}
