import { api } from "../../api/apiSlice";

const BookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (id = "") => `/book/?searchTerm=${id}`,
    }),

    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),

    postBook: builder.mutation({
      query: (data) => ({
        url: "/book/create-book",
        method: "POST",
        body: data,
      }),
    }),

    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/comment/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBookMutation,
  useSingleBookQuery,
  useUpdateBookMutation,
} = BookApi;
