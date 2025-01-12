import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Cookies from "js-cookie";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://182.252.68.227:8005/api/",
    prepareHeaders: (headers) => {
      const token = Cookies.get("token"); // Correct usage
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Accept", `*/*`);
        // headers.set("Content-Type", `application/json`);
        headers.set("Access-Control-Allow-Origin", `*/*`);
      }
      return headers;
    },
  }),
  tagTypes: ["user", "blog", "faq", "about","notification"],
  endpoints: () => ({}),
});

export const imageUrl = "http://210.4.77.100:8001/";
