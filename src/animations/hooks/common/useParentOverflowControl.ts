import { useEffect } from 'react'
import { OverflowCSSProperties } from '../types.hooks'

export const useParentOverflowControl = (
  element: HTMLElement | null,
  overrideParentOverflow: string[],
  startConfig: OverflowCSSProperties,
  endConfig: OverflowCSSProperties,
) => {
  useEffect(() => {
    if (!element || !overrideParentOverflow.length) return

    const parentClasses = overrideParentOverflow
      .map((parentClass) => `[class*="${parentClass}"]`)
      .join('')

    const parentElement = parentClasses
      ? (element.closest(parentClasses) as HTMLElement | null)
      : undefined

    if (!parentElement) return

    const toggleOverflow = (config: OverflowCSSProperties) => {
      if (config.overflowType && config.overflowValue) {
        parentElement.style[config.overflowType] = config.overflowValue
      }
    }

    const animationStartHandler = () => {
      toggleOverflow(startConfig)
    }

    const animationEndHandler = () => {
      toggleOverflow(endConfig)
    }

    element.addEventListener('animationstart', animationStartHandler)
    element.addEventListener('animationend', animationEndHandler)

    return () => {
      element.removeEventListener('animationstart', animationStartHandler)
      element.removeEventListener('animationend', animationEndHandler)
    }
  }, [element, overrideParentOverflow, startConfig, endConfig])
}
