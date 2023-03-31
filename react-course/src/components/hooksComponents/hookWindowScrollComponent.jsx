import React from 'react'
import {useWindowScroll} from '../../hooks/useWindowScroll'
import {TaskBlock} from '../UI/TaskBlock'
import {MyButton} from '../UI/myButton'

export const HookWindowScrollComponent = () => {
  const [scroll, scrollTo] = useWindowScroll()
  return (
    <TaskBlock>
      <h3>Hook WindowScroll</h3>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <MyButton onClick={() => scrollTo({y: 0})}>Scroll to top</MyButton>
    </TaskBlock>
  )
}
