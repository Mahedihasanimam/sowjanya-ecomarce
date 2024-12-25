const { api } = require("@/redux/api/MainApiSlice");

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
  



  getallproduct:builder.query({
    query:()=>({
      url:`/product-view`,
      method:'GET'
    }),
    providesTags:['product']
  }),

  getSingleproductByid:builder.query({
    query:(id)=>({
      url:`/showProduct/${id}`,
      method:'GET'
    }),
    providesTags:['product']
  })



  }),
});

export const {

useGetallproductQuery,
useGetSingleproductByidQuery,


} = productApi;
