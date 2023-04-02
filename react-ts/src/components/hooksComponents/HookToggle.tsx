import {FC} from 'react'
import {TaskWrapper} from '../ui/taskWrapper'
import {FlexColumn} from '../ui/FlexColumn'
import {Title} from '../ui/Title'
import {useToggle} from '../../hooks/useToggle'
import {MyButton} from '../ui/MyButton'

export const HookToggle: FC = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
  const [value2, toggle2] = useToggle([false, true])

  return (
    <TaskWrapper>
      <FlexColumn>
        <Title>HookToggle</Title>
        <MyButton onClick={() => toggle()}>{value}</MyButton>
        <MyButton onClick={() => toggle2()}>{value2.toString()}</MyButton>
      </FlexColumn>
    </TaskWrapper>
  )
}
