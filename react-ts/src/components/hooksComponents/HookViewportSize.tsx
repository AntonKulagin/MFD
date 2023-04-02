import {FC} from 'react'
import {TaskWrapper} from '../ui/taskWrapper'
import {FlexColumn} from '../ui/FlexColumn'
import {Title} from '../ui/Title'
import {useViewportSize} from '../../hooks/useViewportSize'

export const HookViewportSize: FC = () => {
  const {height, width} = useViewportSize()

  return (
    <TaskWrapper>
      <FlexColumn>
        <Title>HookViewportSize</Title>
        Width: {width}, height: {height}
      </FlexColumn>
    </TaskWrapper>
  )
}
