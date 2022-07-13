import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IPost } from '../../interfaces';

export const postsApiSlice = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (builder) => {
    return {
      fetchPosts: builder.query<IPost[], void> ({
        query: () => ({
          url: '/posts'
        })
      })
    }
  }
})

export const { useFetchPostsQuery } = postsApiSlice;