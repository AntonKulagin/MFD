import React from 'react'
import {useViewportSize} from '../../hooks/useViewportSize'
import {TaskBlock} from '../UI/taskBlock'

export const HookViewportComponent = () => {
  const {height, width} = useViewportSize()
  return (
    <TaskBlock>
      <h3>Hook ViewportComponent</h3>
      <div>
        Width: {width}, height: {height}
      </div>
    </TaskBlock>
  )
}
