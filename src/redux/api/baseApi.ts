import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5022/app/v1', credentials: 'include' }),
    tagTypes:['category','product','order','user'],
    endpoints: () => ({})
})


export default baseApi;