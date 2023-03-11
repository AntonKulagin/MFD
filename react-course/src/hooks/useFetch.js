import { useCallback, useEffect, useState } from 'react';

const getFetchEndpoint = (params) => {
  if (params) {
    return Object.keys(params).map((item) => {
      if (item === '_limit') {
        return `?_limit=${params[item]}`;
      } else {
        return '';
      }
    });
  }
  return '';
};

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const fetching = useCallback((url, params) => {
    return fetch(url + getFetchEndpoint(params))
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
