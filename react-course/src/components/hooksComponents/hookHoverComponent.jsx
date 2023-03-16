import React from 'react'
import { useHover } from '../../hooks/useHover'
import TaskBlock from '../UI/taskBlock/TaskBlock'

const HookHoverComponent = () => {
  const { hovered, ref } = useHover()
  return (
    <TaskBlock>
      <hr style={{ width: '90vw' }} />
      <h3>Hook Hover</h3>
      <div ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
    </TaskBlock>
  )
}

export default HookHoverComponent
