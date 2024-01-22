import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url_auth, api_key } from '../../Firebase/db'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: url_auth }),
  endpoints: (builder) => ({
    Signup: builder.mutation({
      query: (user) => ({
        url:`accounts:signUp?key=${api_key}`,
        method:"POST",
        body:user
      }),
    }),
    Login: builder.mutation({
        query: (user) => ({
          url:`accounts:signInWithPassword?key=${api_key}`,
          method:"POST",
          body:user
        }),
      })
  }),
})

export const { useSignupMutation, useLoginMutation } = authApi