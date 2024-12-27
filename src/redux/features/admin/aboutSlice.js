const { api } = require("@/redux/api/MainApiSlice");

const aboutSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => `aboutus`,
    }),
    createAbout: builder.mutation({
      query: (body) => ({
        url: `about-add`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetAboutQuery,
  useCreateAboutMutation,
  useUpdateAboutMutation,
} = aboutSlice;
