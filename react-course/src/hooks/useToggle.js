import {useReducer} from 'react'

const getInitialState = (data) => {
  if (Array.isArray(data)) {
    return {
      data,
      count: 0,
    }
  }
  return {
    data: [false, true],
    count: 0,
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'item':
      return {
        ...state,
        data: state.data.filter((item) => item === action.payload),
      }
    case 'booleanItem':
      return {
        ...state,
        data: [action.payload],
      }
    case 'loop':
      return {
        ...state,
        count: state.count >= state.data.length - 1 ? 0 : state.count + 1,
      }
    default:
      break
  }
}

export function useToggle(data) {
  const [state, dispatch] = useReducer(reducer, getInitialState(data))

  const toggle = (item) => {
    if (typeof item === 'string') {
      dispatch({
        type: 'item',
        payload: item,
      })
    }
    if (typeof item === 'boolean') {
      dispatch({
        type: 'booleanItem',
        payload: item,
      })
    }
    dispatch({
      type: 'loop',
    })
  }

  const value = state.data[state.count].toString()

  return [value, toggle]
}
