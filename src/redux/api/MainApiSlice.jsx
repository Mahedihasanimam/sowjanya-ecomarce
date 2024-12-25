import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.12.79:8000/api/' ,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token"); // Correct usage
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Accept", `*/*`);
        headers.set("Content-Type", `application/json`);
        headers.set("Access-Control-Allow-Origin", `*/*`);
      }
      return headers;
    },
}),
tagTypes: [
  'user',
],
  endpoints: () => ({}),
});


export const imageUrl = "http://192.168.12.158:4000/"