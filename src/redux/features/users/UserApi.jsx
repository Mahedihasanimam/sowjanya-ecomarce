const { api } = require("@/redux/api/MainApiSlice");

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/auth/signup",
        method: "POST",
        body: user,
      }),
      invalidatesTags:['user']
    }),


    verifyEmail: builder.mutation({
      query: (email) => ({
        url: "/auth/verify",
        method: "POST",
        body: email,
      }),
    }),
    forgetpassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    
    resetpassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
       
        
        body: data,
      }),
    }),
    

    loginUser: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ['user'],
    }),

    

    OtpVerify: builder.mutation({
      query: (otp) => ({
        url: "/users/auth/verify-email",
        method: "POST",
        body: otp,
      }),
    }),



    getLoginUserById: builder.query({
      query: (id) => `/users/get-one-user/${id}`,
      providesTags: ['user'],
    }),

    getProfile: builder.query({
      query: (token) => ({
        url: '/own-profile',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['user'],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/update-profile-by-user",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ['user'], // Invalidate user to refetch
    }),

    getNotifiByUserId: builder.query({
      query: (id) => `/users/notifications-by-user/${id}`,
      providesTags:['notifications']
    }),



    // contactUs: builder.mutation({
    //   query: (data) => ({
    //     url: "/help/send-mail-to-support",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),

  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useVerifyEmailMutation,
  useOtpVerifyMutation,

  useGetLoginUserByIdQuery,
  useLazyGetProfileQuery,
  useUpdateProfileMutation,
  useForgetpasswordMutation,
  useResetpasswordMutation,
} = userApi;
