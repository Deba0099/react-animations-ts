export type SlideAnimationStylesProps = {
  endPositionY: number
  startPositionY?: number
  duration: number
  triggerOnClick?: boolean
  isClickable?: boolean | undefined
  overrideParentOverflow?: string[]
}

export interface ScaleAnimationProps {
  startScale: number
  endScale: number
  duration: number
  triggerOnClick?: boolean
}

export type OverflowPropertyType = 'overflow' | 'overflowX' | 'overflowY'

export type OverflowPropertyValue =
  | 'visible'
  | 'hidden'
  | 'scroll'
  | 'auto'
  | 'inherit'
  | 'initial'
  | 'unset'
  | 'clip'
  | 'overlay'
  | 'visible'
  | 'hidden'
  | 'clip'

export type OverflowCSSProperties = {
  overflowType: OverflowPropertyType
  overflowValue: OverflowPropertyValue
}
