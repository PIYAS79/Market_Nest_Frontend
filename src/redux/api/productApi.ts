import baseApi from "./baseApi";




const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: '/product',
                method: "GET",
            }),
            transformResponse: (res: any) => {
                return res.data;
            },
            providesTags: ['product'],
        }),
        createProduct: builder.mutation({
            query: (data) => ({
                url: '/product',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['product']
        }),
        updateProduct: builder.mutation({
            query: ({ data, pid }) => ({
                url: `/product/${pid}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['product']
        }),
        deleteProduct: builder.mutation({
            query: (pid) => ({
                url: `/product/${pid}`,
                method: "DELETE",
            }),
            invalidatesTags: ['product'],
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
    })
})

export const { useGetAllProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi;