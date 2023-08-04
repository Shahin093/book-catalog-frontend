import { api } from "../../api/apiSlice";

const UserApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/users/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation } = UserApi;
