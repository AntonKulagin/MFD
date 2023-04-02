import {useEffect, useState} from 'react'
import {useWindowEvent} from './useWindowEvent'

export interface IPosition {
  x?: number
  y?: number
}

function getScrollPosition(): IPosition {
  return typeof window !== 'undefined'
    ? {x: +window.pageXOffset.toFixed(), y: +window.pageYOffset.toFixed()}
    : {x: 0, y: 0}
}

function scrollTo({x = 0, y = 0}: IPosition): void {
  if (typeof window !== 'undefined') {
    const scrollOptions: ScrollToOptions = {behavior: 'smooth'}

    if (typeof x === 'number') {
      scrollOptions.left = x
    }

    if (typeof y === 'number') {
      scrollOptions.top = y
    }

    window.scrollTo(scrollOptions)
  }
}

export const useWindowScroll = (): [IPosition, ({x, y}: IPosition) => void] => {
  const [position, setPosition] = useState(() => getScrollPosition())

  useWindowEvent('scroll', () => setPosition(getScrollPosition()))
  useWindowEvent('resize', () => setPosition(getScrollPosition()))

  useEffect(() => {
    setPosition(getScrollPosition())
  }, [])

  return [position, scrollTo]
}
