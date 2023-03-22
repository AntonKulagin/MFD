import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

export function useFetch(url) {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const fetching = useCallback(async (url, params) => {
    try {
      setLoading(true)
      const response = await axios.get(url, {
        ...params,
      })
      setData(response.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetching(url)
  }, [url])

  const refetch = useCallback(
    (params) => {
      fetching(url, params)
    },
    [fetching, url],
  )

  return { data, isLoading, error, refetch }
}
