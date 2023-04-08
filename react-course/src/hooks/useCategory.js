import axios from 'axios'
import {useEffect, useState} from 'react'

export const useCategory = (categoryName, pageNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [categoryItems, setCategoryItems] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/${categoryName}`,
      params: {page: pageNumber},
    })
      .then((res) => {
        setCategoryItems((prev) => {
          return [...prev, ...res.data.results]
        })
        setHasMore(res.data.info.next)
        setLoading(false)
      })
      .catch((e) => {
        setError(e.message)
        setLoading(false)
      })
  }, [categoryName, pageNumber])

  return {loading, error, categoryItems, hasMore}
}
