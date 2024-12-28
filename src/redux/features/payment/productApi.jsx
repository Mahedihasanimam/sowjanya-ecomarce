const { api } = require("@/baseApi");

const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    payment: builder.mutation({
      query: (data) => ({
        url: `/create-order`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetallproductQuery,
  useGetSingleproductByidQuery,
  useGetreviewByproductidQuery,
} = paymentApi;
