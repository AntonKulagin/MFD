import React from 'react'
import { useWindowScroll } from '../../hooks/useWindowScroll'
import TaskBlock from '../UI/TaskBlock/TaskBlock'

const HookWindowScrollComponent = () => {
  const [scroll, scrollTo] = useWindowScroll()
  return (
    <TaskBlock>
      <h3>Hook WindowScroll</h3>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </TaskBlock>
  )
}

export default HookWindowScrollComponent
