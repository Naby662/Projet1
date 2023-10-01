import { api } from "./api";

export const registerApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (body) => ({
                url: `/register/register`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["register"],
        }),
        login: builder.mutation({
            query: (body) => ({
                url: `/auth/login`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["auth"],
        }),
    }),
    overrideExisting: false,
});

export const { useSignupMutation, useLoginMutation } = registerApi;