import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://5173-sivajisj-mernappssj-x7lzacqfztq.ws-us105.gitpod.io' }),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})