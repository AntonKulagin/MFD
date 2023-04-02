import {FC} from 'react'
import {TaskWrapper} from '../ui/taskWrapper'
import {FlexColumn} from '../ui/FlexColumn'
import {Title} from '../ui/Title'
import {useHover} from '../../hooks/useHover'

export const HookHover: FC = () => {
  const {hovered, ref} = useHover()
  return (
    <TaskWrapper>
      <FlexColumn>
        <Title>HookHover</Title>
        <div ref={ref} style={{background: '#000'}}>
          {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
      </FlexColumn>
    </TaskWrapper>
  )
}
