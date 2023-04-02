import {FC} from 'react'
import {TaskWrapper} from '../ui/taskWrapper'
import {FlexColumn} from '../ui/FlexColumn'
import {Title} from '../ui/Title'
import {useWindowScroll} from '../../hooks/useWindowScroll'
import {MyButton} from '../ui/MyButton'

export const HookWindowScroll: FC = () => {
  const [scroll, scrollTo] = useWindowScroll()
  return (
    <TaskWrapper>
      <FlexColumn>
        <Title>HookWindowScroll</Title>
        <p>
          Scroll position x: {scroll.x}px, y: {scroll.y}px
        </p>
        <MyButton onClick={() => scrollTo({y: 0})}>Scroll to top</MyButton>
      </FlexColumn>
    </TaskWrapper>
  )
}
