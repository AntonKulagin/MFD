import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

const initialScroll = {
  x: window.scrollX.toFixed(),
  y: window.scrollY.toFixed(),
}

export function useWindowScroll() {
  const [scroll, setScroll] = useState(initialScroll)

  const scrollTo = ({ y }) => {
    window.scrollTo(scroll.x, y)
  }

  const saveScroll = () => {
    setScroll({ x: window.scrollX.toFixed(), y: window.scrollY.toFixed() })
  }

  useWindowEvent('scroll', saveScroll)

  return [scroll, scrollTo]
}
