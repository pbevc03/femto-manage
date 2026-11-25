const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() ?? ''

export const apiUrl = (path: string) =>
  `${configuredBaseUrl.replace(/\/+$/, '')}/api/${path.replace(/^\/+/, '')}`