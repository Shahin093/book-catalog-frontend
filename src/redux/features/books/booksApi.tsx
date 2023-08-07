import { api } from "../../api/apiSlice";

const BookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ search = "", page = 1 }) =>
        `/book/?searchTerm=${search}&page=${page}`,
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
        url: `/book/${id}`,
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
