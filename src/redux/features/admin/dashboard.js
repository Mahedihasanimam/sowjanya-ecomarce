const { api } = require("@/baseApi");

const statisticsSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: () => ({
        url: `statistics`,
        method: "GET",
      }),
    }),
    getAnalytics: builder.query({
      query: (year) => ({
        url: `/analytics?filter=monthly&year=${year}`,
        method: "GET",
      }),
    }),



    getMostEarning: builder.query({
      query: ( year ) => ({
        url: `most-earning?year=${year}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetStatisticsQuery,useGetAnalyticsQuery,useGetMostEarningQuery } = statisticsSlice;
