import {useCallback, useEffect, useRef, useState} from 'react'

export const useHover = () => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const onMouseEnter = useCallback(() => setHovered(true), [])
  const onMouseLeave = useCallback(() => setHovered(false), [])

  useEffect(() => {
    const hoverBlock = ref.current
    if (hoverBlock) {
      hoverBlock.addEventListener('mouseenter', onMouseEnter)
      hoverBlock.addEventListener('mouseleave', onMouseLeave)

      return () => {
        hoverBlock?.removeEventListener('mouseenter', onMouseEnter)
        hoverBlock?.removeEventListener('mouseleave', onMouseLeave)
      }
    }

    return undefined
  }, [onMouseEnter, onMouseLeave])

  return {hovered, ref}
}
