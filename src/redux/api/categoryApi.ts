import baseApi from "./baseApi";



const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        CreateNewCategory: builder.mutation({
            query: (data) => ({
                url: '/category',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['category']
        }),
        GetAllCategory: builder.query({
            query: () => ({
                url: '/category',
                method: "GET",
            }),
            providesTags: ['category'],
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
        DeleteCategory: builder.mutation({
            query: (cid) => ({
                url: `/category/${cid}`,
                method: "DELETE",
            }),
            invalidatesTags: ['category'],
            transformResponse: (res: any) => {
                return res.data;
            }
        })
    })
})

export const {
    useCreateNewCategoryMutation,
    useGetAllCategoryQuery,
    useDeleteCategoryMutation,
} = categoryApi;