import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-key": "26c51f6b67msh8a1d0ef7d6b25b5p1b592cjsn2f6ad44583f4",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCRDetails: builder.query({
      query: (CRId) => createRequest(`/coin/${CRId}`),
    }),
    getCRHistory: builder.query({
      query: ({ CRId, timePeriod }) =>
        createRequest(`/coin/${CRId}/history/${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCRDetailsQuery,
  useGetCRHistoryQuery,
} = cryptoApi;
