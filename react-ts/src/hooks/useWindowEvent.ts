import {useEffect} from 'react'

export const useWindowEvent = (type: string, listener: () => void, options?: {[key: string]: boolean}): void => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options)
      return () => window.removeEventListener(type, listener, options)
    }
  }, [type, listener, options])
}
