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
        }),
    })
})

export const { useRegisterUserMutation, useUpdateUserMutation } = userApi;