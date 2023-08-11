import { api } from "../../api/apiSlice";

const BookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ search, page = 1, genre = "" }) =>
        `/book/?searchTerm=${search}&page=${page}&${genre}`,
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

    updateBookStatus: builder.mutation({
      query: (id) => ({
        url: `/book/updateStatus/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["statusUpdated"],
    }),

    getBookWithYourself: builder.query({
      query: (id) => `/book/user/${id}`,
      providesTags: ["statusUpdated"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookWithYourselfQuery,
  usePostBookMutation,
  useSingleBookQuery,
  useUpdateBookMutation,
  useUpdateBookStatusMutation,
  useDeleteBookMutation,
} = BookApi;
