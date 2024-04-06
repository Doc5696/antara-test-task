const apiConfig = {
  apiBase: process.env.REACT_APP_API_BASE,
  webSocketBase: process.env.REACT_APP_WEB_SOCKET_BASE,
  queryConfig: {
    staleTime: Infinity,
    cacheTime: Infinity,
    keepPreviousData: true,
  },
}

export default apiConfig
