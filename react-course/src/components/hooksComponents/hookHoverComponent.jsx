import React from 'react'
import {useHover} from '../../hooks/useHover'
import {TaskBlock} from '../UI/taskBlock'

export const HookHoverComponent = () => {
  const {hovered, ref} = useHover()
  return (
    <TaskBlock>
      <h3>Hook Hover</h3>
      <div ref={ref}>{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}</div>
    </TaskBlock>
  )
}
