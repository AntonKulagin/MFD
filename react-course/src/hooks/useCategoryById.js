import axios from 'axios'
import {useEffect, useState} from 'react'

export const useCategoryById = (category, id) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [itemById, setItemById] = useState({})

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/${category}/${id}`,
    })
      .then((res) => {
        setItemById(res.data)
        setLoading(false)
      })
      .catch((e) => {
        setError(e.message)
        setLoading(false)
      })
  }, [category, id])

  return {loading, error, itemById}
}
