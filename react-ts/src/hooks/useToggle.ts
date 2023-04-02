import {useReducer} from 'react'

const reducer = (state: any[], action: any) => {
  const value = action instanceof Function ? action(state[0]) : action
  const index = Math.abs(state.indexOf(value))

  return state.slice(index).concat(state.slice(0, index))
}

export function useToggle(options: boolean[] | string[]): [string | boolean, any] {
  const [[option], toggle] = useReducer(reducer, options)

  return [option, toggle]
}
