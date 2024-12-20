import baseApi from "./baseApi";



const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query({
            query: () => ({
                url: '/order',
                method: "GET"
            }),
            transformResponse: (res: any) => {
                return res.data;
            },
            providesTags: ['order']
        }),
        deleteOrder: builder.mutation({
            query: (pid) => ({
                url: `/order/${pid}`,
                method: "DELETE",
            }),
            invalidatesTags: ['order'],
            transformResponse: (res: any) => {
                return res.data;
            },
        }),
        updateOrder: builder.mutation({
            query: ({ data, pid }) => ({
                url: `/order/${pid}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['order']
        }),
        CreateNewOrder: builder.mutation({
            query: (data) => ({
                url: '/order',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['order'],
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
    })
})

export const { useGetAllOrderQuery, useDeleteOrderMutation, useUpdateOrderMutation, useCreateNewOrderMutation } = orderApi;