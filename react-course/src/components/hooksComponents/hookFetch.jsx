import React from 'react'
import {useFetch} from '../../hooks/useFetch'
import {MyButton} from '../UI/myButton/myButton'
import {TaskBlock} from '../UI/taskBlock'

export const HookFetch = () => {
  const {data, isLoading, error, refetch} = useFetch('https://jsonplaceholder.typicode.com/posts')
  return (
    <TaskBlock>
      <h3>Hook Fetch</h3>
      <div>
        <MyButton onClick={() => refetch({params: {_limit: 3}})}>Перезапросить</MyButton>
      </div>
      {isLoading && <span style={{color: 'greenyellow'}}>Загрузка...</span>}
      {error && <span style={{color: 'red'}}>Произошла ошибка</span>}
      {data && !isLoading && data.map((item) => <div key={item.id}>{item.title}</div>)}
    </TaskBlock>
  )
}
