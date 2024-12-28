const { api } = require("@/redux/api/MainApiSlice");

const productSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: ({ page, perPage, search }) =>
        `product-list?page=${page}&per_page=${perPage}&search=${search}`,
    }),

    // add new products
    createProduct: builder.mutation({
      query: (body) => ({
        url: `product-add`,
        method: "POST",
        body,
      }),
    }),
    // add new products
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product-delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductListQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productSlice;
