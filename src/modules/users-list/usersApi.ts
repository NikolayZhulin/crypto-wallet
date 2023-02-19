import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const registrationAPI = createApi({
  reducerPath: 'registration/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://new-backend.unistory.app/api',
    credentials: 'include',
  }),
  endpoints: build => ({
    getUsers: build.query<any, any>({
      query: data => ({
        url: '/data',
        method: 'GET',
        params: data,
      }),
    }),
  }),
})

export const {} = registrationAPI
