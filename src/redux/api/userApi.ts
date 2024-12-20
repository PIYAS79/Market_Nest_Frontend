import baseApi from "./baseApi";




const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        RegisterUser: builder.mutation({
            query: (data) => ({
                url: '/user',
                method: 'POST',
                body: data
            }),
        }),
        updateUser: builder.mutation({
            query: ({ data, uid }) => ({
                url: `/user/${uid}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['user']
        }),
        getAllUser: builder.query({
            query: () => ({
                url: '/user',
                method: "GET"
            }),
            providesTags: ['user'],
            transformResponse: (res: any) => {
                console.log(res)
                return res.data;
            }
        })
    })
})

export const { useRegisterUserMutation, useGetAllUserQuery, useUpdateUserMutation } = userApi;