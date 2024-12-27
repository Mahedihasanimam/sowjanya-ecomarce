const { api } = require("@/redux/api/MainApiSlice");

const statisticsSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: () => ({
        url: `statistics`,
        method: "GET",
      }),
    }),
    getAnalytics: builder.query({
      query: ({ year, type }) => ({
        url: `analytics?filter=${type}}&year=${year}`,
        method: "GET",
      }),
    }),
    getMostEarning: builder.query({
      query: ({ year }) => ({
        url: `most-earning?year=${year}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetStatisticsQuery } = statisticsSlice;
