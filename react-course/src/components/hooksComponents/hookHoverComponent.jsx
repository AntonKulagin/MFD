import React from 'react'
import {useHover} from '../../hooks/useHover'
import {TaskWrapper} from '../UI/taskWrapper'

export const HookHoverComponent = () => {
  const {hovered, ref} = useHover()
  return (
    <TaskWrapper>
      <h3>Hook Hover</h3>
      <div ref={ref}>{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}</div>
    </TaskWrapper>
  )
}
