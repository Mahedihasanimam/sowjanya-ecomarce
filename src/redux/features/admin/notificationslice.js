const { api } = require("@/baseApi");

const notification = api.injectEndpoints({
  endpoints: (builder) => ({
    getallnotification: builder.query({
      query: () => `notify`,
    }),



    // createAbout: builder.mutation({
    //   query: (body) => ({
    //     url: `about-add`,
    //     method: "POST",
    //     body,
    //   }),
    // }),



  }),
});

export const {
 useGetallnotificationQuery,
} = notification;
