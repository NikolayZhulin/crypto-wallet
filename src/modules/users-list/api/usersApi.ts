import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'users/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://new-backend.unistory.app/api/',
  }),
  tagTypes: ['Users'],
  endpoints: build => ({
    getUsersList: build.query<UserType[], unknown>({
      query: () => ({
        url: '/data',
        method: 'GET',
      }),
      transformResponse: (response: ServerResponse<UserType[]>) => response.items,
      providesTags: ['Users'],
    }),
    getUser: build.query<UserType, string | undefined>({
      query: data => ({
        url: `/data/id/${data}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useLazyGetUserQuery, useLazyGetUsersListQuery } = usersApi

type ServerResponse<D> = {
  meta: MetaType
  items: D
}

type UserType = {
  id: number
  username: string
  email: string
  address: string
}

type MetaType = {
  currentPage: number
  perPage: number
  totalPages: number
}
