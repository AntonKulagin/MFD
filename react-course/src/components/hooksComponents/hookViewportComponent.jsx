import React from 'react'
import { useViewportSize } from '../../hooks/useViewportSize'
import TaskBlock from '../UI/taskBlock/TaskBlock'

const HookViewportComponent = () => {
  const { height, width } = useViewportSize()
  return (
    <TaskBlock>
      <hr style={{ width: '90vw' }} />
      <h3>Hook ViewportComponent</h3>
      <div>
        Width: {width}, height: {height}
      </div>
    </TaskBlock>
  )
}

export default HookViewportComponent
