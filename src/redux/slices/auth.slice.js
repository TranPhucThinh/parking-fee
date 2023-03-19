import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://thuphigiaothong.com/api/' }),
  endpoints: (builder) => ({
    registerCus: builder.mutation({
      query: (body) => {
        return {
          url: `auth/register/customer`,
          method: 'POST',
          body
        }
      }
    })
  })
})

export const { useRegisterCusMutation } = authApi
