import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { PullRequest } from "../types/pull-request"

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: build => ({
    getPullRequests: build.query<PullRequest[], void>({
      query: () => "repos/divvydose/ui-coding-challenge/pulls",
    }),
  }),
})

export const { useGetPullRequestsQuery } = apiService
