import baseApi from "./baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        Login_User: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: "POST",
                body: data
            })
        }),

    })
})

export const { useLogin_UserMutation } = authApi;