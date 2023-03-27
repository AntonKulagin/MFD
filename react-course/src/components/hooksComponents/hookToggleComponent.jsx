import React from 'react'
import { useToggle } from '../../hooks/useToggle'
import TaskBlock from '../UI/taskBlock/TaskBlock'

const HookToggleComponent = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
  return (
    <TaskBlock>
      <h3>Hook Toggle</h3>
      <button onClick={() => toggle()}>{value}</button>
    </TaskBlock>
  )
}

export default HookToggleComponent
