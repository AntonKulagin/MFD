import React from 'react'
import {useToggle} from '../../hooks/useToggle'
import {TaskBlock} from '../UI/TaskBlock'
import {MyButton} from '../UI/myButton/myButton'

export const HookToggleComponent = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
  return (
    <TaskBlock>
      <h3>Hook Toggle</h3>
      <MyButton onClick={() => toggle()}>{value}</MyButton>
    </TaskBlock>
  )
}
