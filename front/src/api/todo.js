import { api } from "./todo";

export const todoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (body) => ({
                url: `/todo/todo`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["todo"],
        }),
        login: builder.mutation({
            query: (body) => ({
                url: `/auth/todo`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["auth"],
        }),
    }),
    overrideExisting: false,
});

export const { useSignupMutation, useLoginMutation } = todoApi;