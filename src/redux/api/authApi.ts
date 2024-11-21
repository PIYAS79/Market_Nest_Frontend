import baseApi from "./baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        Login_User: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: "POST",
                body: data
            }),
        }),
        getDashOverview: builder.query({
            query: () => ({
                url: '/auth/dashboard',
                method: "GET"
            }),
            transformErrorResponse: (res: any) => {
                return res.data.data;
            },
            providesTags: ['product', 'user', 'order', 'category']
        })

    })
})

export const { useLogin_UserMutation,useGetDashOverviewQuery } = authApi;