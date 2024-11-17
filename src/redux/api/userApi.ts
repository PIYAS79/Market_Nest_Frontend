import baseApi from "./baseApi";




const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        RegisterUser: builder.mutation({
            query: (data) => ({
                url: '/user',
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useRegisterUserMutation } = userApi;