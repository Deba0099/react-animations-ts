import { useRef, useEffect } from 'react'
import { SlideAnimationStylesProps } from './types.hooks'
// import { useParentOverflowControl } from './common'

// const overrideParentOverflow = ["signUpUnifiedJourney", "contentSection"];
//   const startConfig: = { overflowType: 'overflowY', overflowValue: 'visible' };
//   const endConfig = { overflowType: 'overflowY', overflowValue: 'auto' };

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
      element.style.animationDuration = `${duration}ms`
      element.style.setProperty('--startPosition', `${startPosition}px`)
      element.style.setProperty('--endPosition', `${endPosition}px`)
      element.classList.add('_rat-slide')
    }
    // !Below commented code will work to override the config with in the custom hook
    // overrideParentOverflow &&
    //   useParentOverflowControl(
    //     elementRef.current,
    //     overrideParentOverflow,
    //     { overflowType: 'overflowY', overflowValue: 'visible' },
    //     { overflowType: 'overflowY', overflowValue: 'auto' },
    //   )

    // !Below commented code will work to override the config

    /**
     * const parentClasses = overrideParentOverflow
      ?.map((parentClass) => `[class*="${parentClass}"]`)
      .join('')
    const parentElement = parentClasses
      ? (element.closest(parentClasses) as HTMLElement | null)
      : undefined

    if (!parentElement) return

    const toggleOverflowX = (toggleOn: boolean) => {
      if (toggleOn) {
        parentElement.style.overflowY = 'visible'
      } else {
        parentElement.style.overflowY = 'auto'
      }
    }

    const animationStartHandler = () => {
      toggleOverflowX(true)
    }

    const animationEndHandler = () => {
      toggleOverflowX(false)
    }

    element.addEventListener('animationstart', animationStartHandler)
    element.addEventListener('animationend', animationEndHandler)

    if (triggerOnClick) {
      element.addEventListener('click', startAnimation)
    } else if (!isClickable) {
      startAnimation()
    }
     */

    return () => {
      // element.removeEventListener('animationstart', animationStartHandler)
      // element.removeEventListener('animationend', animationEndHandler)
      if (triggerOnClick) {
        element.removeEventListener('click', startAnimation)
      }
      element.classList.remove('_rat-slide')
      // toggleOverflowX(false)
    }
  }, [duration, startPosition, endPosition, triggerOnClick, isClickable, overrideParentOverflow])

  return elementRef
}
