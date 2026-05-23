import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../../services/baseQueryWithReauth";

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Users", "Groups"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ({ page = 1, limit = 20, search = "" }) =>
                `/admin/users?page=${page}&limit=${limit}&search=${search}`,
            providesTags: ["Users"],
        }),
        updateUser: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/admin/users/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["Users"],
        }),
        banUser: builder.mutation({
            query: (id) => ({
                url: `/admin/users/${id}/ban`,
                method: "PATCH",
            }),
            invalidatesTags: ["Users"],
        }),
        unbanUser: builder.mutation({
            query: (id) => ({
                url: `/admin/users/${id}/unban`,
                method: "PATCH",
            }),
            invalidatesTags: ["Users"],
        }),
        getGroups: builder.query({
            query: ({ page = 1, limit = 20 }) =>
                `/admin/groups?page=${page}&limit=${limit}`,
            providesTags: ["Groups"],
        }),
        deleteGroup: builder.mutation({
            query: (id) => ({
                url: `/admin/groups/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Groups"],
        }),
        getTodayStats: builder.query({
            query: () => "admin/stats/today",
            providesTags: ["Stats"],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useUpdateUserMutation,
    useBanUserMutation,
    useUnbanUserMutation,
    useGetGroupsQuery,
    useDeleteGroupMutation,
    useGetTodayStatsQuery,
} = adminApi;
