import React from 'react'
import {useViewportSize} from '../../hooks/useViewportSize'
import {TaskWrapper} from '../UI/taskWrapper'

export const HookViewportComponent = () => {
  const {height, width} = useViewportSize()
  return (
    <TaskWrapper>
      <h3>Hook ViewportComponent</h3>
      <div>
        Width: {width}, height: {height}
      </div>
    </TaskWrapper>
  )
}
