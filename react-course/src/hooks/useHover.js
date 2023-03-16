import { useEffect, useRef, useState } from 'react'

export function useHover() {
  const [hovered, setHovered] = useState(false)

  const ref = useRef()

  const mouseOver = () => setHovered(true)
  const mouseOut = () => setHovered(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseover', mouseOver)
      node.addEventListener('mouseout', mouseOut)

      return () => {
        node.removeEventListener('mouseover', mouseOver)
        node.removeEventListener('mouseout', mouseOut)
      }
    }
  }, [])

  return { hovered, ref }
}
