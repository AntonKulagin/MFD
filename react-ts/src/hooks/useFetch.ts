import axios from 'axios'
import {useState, useEffect} from 'react'

export interface IPost {
  id: number
  userId: number
  title: string
  body: string
}

export interface IFetchParams {
  params?: {[key: string]: number}
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<IPost[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  async function getData(params: IFetchParams = {}) {
    try {
      setLoading(true)
      const response = await axios.get<IPost[]>(url, {...params})
      setData(response.data)
    } catch (error: any) {
      if (error) {
        setError(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const refetch = (params: IFetchParams): void => {
    getData(params)
  }

  return {data, isLoading, error, refetch}
}
