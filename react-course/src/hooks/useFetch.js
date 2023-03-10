import { useCallback, useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const getFetchLimit = (params) => {
    if (params) return `?_limit=${params._limit}`;
    return '';
  };

  const fetching = useCallback((url, params) => {
    return fetch(url + getFetchLimit(params))
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => setData(json))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetching(url);
  }, [fetching, url]);

  const refetch = useCallback(
    ({ params }) => {
      fetching(url, params);
    },
    [fetching, url]
  );

  return { data, isLoading, error, refetch };
}
