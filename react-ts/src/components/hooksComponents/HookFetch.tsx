import {FC} from 'react'
import {TaskWrapper} from '../ui/taskWrapper'
import {useFetch} from '../../hooks/useFetch'
import {MyButton} from '../ui/MyButton'
import {FlexColumn} from '../ui/FlexColumn'
import {Title} from '../ui/Title'

export const HookFetch: FC = () => {
  const {data, isLoading, error, refetch} = useFetch('https://jsonplaceholder.typicode.com/posts')
  return (
    <TaskWrapper>
      <FlexColumn>
        <Title>HookFetch</Title>
        <MyButton onClick={() => refetch({params: {_limit: 3}})}>Перезапросить</MyButton>
        {isLoading && 'Загрузка...'}
        {error && 'Произошла ошибка'}
        {data &&
          !isLoading &&
          data.map((item) => (
            <div key={item.id}>
              {item.id}. {item.title}
            </div>
          ))}
      </FlexColumn>
    </TaskWrapper>
  )
}
