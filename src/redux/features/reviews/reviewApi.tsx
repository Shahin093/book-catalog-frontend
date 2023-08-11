import { api } from "../../api/apiSlice";

const ReviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ["reviews"],
    }),

    createReview: builder.mutation({
      query: (data) => ({
        url: "/reviews/create-review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useCreateReviewMutation, useGetReviewsQuery } = ReviewApi;
