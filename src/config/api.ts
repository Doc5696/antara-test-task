const apiConfig = {
  apiBase: process.env.REACT_APP_API_BASE,
  queryConfig: {
    staleTime: Infinity,
    cacheTime: Infinity,
    keepPreviousData: true,
  },
}

export default apiConfig
