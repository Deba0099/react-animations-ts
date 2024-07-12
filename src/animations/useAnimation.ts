/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { useScaleAnimation, useSlideAnimation } from './hooks'

export const useAnimations = () => {
  return {
    useSlideAnimation,
    useScaleAnimation,
  }
}

export const useAnimationTriggers = () => {
  const animationHooks = useAnimations()
  const stateSetters: Record<string, any> = {}

  Object.keys(animationHooks).forEach((hookName) => {
    const stateName = `get${(hookName.charAt(0).toUpperCase() + hookName.slice(1)).replace(
      /^use/i,
      '',
    )}`
    const setStateName = `set${(hookName.charAt(0).toUpperCase() + hookName.slice(1)).replace(
      /^use/i,
      '',
    )}`
    const [state, setState] = useState<number | boolean | string>(false)
    stateSetters[stateName] = state
    stateSetters[setStateName] = setState
  })
  return stateSetters

  /**
   *
   * The following example demonstrates
   * how to implement dynamic getter and setter functions.
   *
   * These functions are dynamically created
   * based on the encapsulated animation hooks in the useAnimations function.
   * This allows for a flexible and reusable approach to manage animation states.
   *
   **/

  // const {
  //   getSlideAnimation,
  //   setSlideAnimation,
  //   getScaleAnimation,
  //   setScaleAnimation,
  // } = useAnimationTriggers();
}

/* eslint-enable react-hooks/rules-of-hooks */
