import { useState } from 'react'

export function useHandleForm(initData, onSubmit) {
  const [data, setData] = useState(initData)

  const handleChange = (target) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(data)
    setData(initData)
  }

  return [data, handleChange, handleSubmit]
}
