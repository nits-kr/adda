// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const PostApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-65-2-108-172.ap-south-1.compute.amazonaws.com:5000",
    // headers: {
    //   "x-auth-token-user": localStorage.getItem("token"),
    // },
  }),
  endpoints: (builder) => ({
    getAllPostGoverner: builder.query({
      query: (name) => ({
        url: `admin/add-doc`,
        method: "post",
      }),
    }),
    getDashboardUserTotal: builder.query({
      query: (name) => ({
        url: `/adda/adge-dashboard`,
        method: "post",
      }),
    }),
    getAllPostHome: builder.query({
      query: (name) => ({
        url: `/adda/adda-home`,
        method: "post",
      }),
    }),
    userLogin: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: `/adda/adda-Login`,
          method: "post",
          body,
        };
      },
    }),
    // addHomeSchedule: builder.mutation({
    //   query: (body) => {
    //     console.log("update login data", body);
    //     return {
    //       url: `/adda/add-schedule/${id}`,
    //       method: "post",
    //       body,
    //     };
    //   },
    // }),
    addHomeSchedule: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id, ...data } = body;
        console.log("update address body data", data);
        return {
          url: `/adda/adda-shedule-add/${id}`,
          method: "post",
          body: data,
        };
      },
    }),
    addApprove: builder.mutation({
      query: (body) => {
        const { id } = body;
        console.log("viewDetails id", id);
        return {
          url: `/adda/adda-aproved-in/${id}`,
          method: "post",
        };
      },
    }),
    questionList: builder.mutation({
      query: (body) => {
        const { id } = body;
        console.log("viewDetails id question list", id);
        return {
          url: `/adda/adge-questionList/${id}`,
          method: "post",
        };
      },
    }),
    rolesList: builder.query({
      query: (body) => {
        return {
          url: `/adda/adda-Role-List`,
          method: "post",
        };
      },
    }),
    userList: builder.query({
      query: (body) => {
        return {
          url: `/adda/adda-user-list`,
          method: "post",
        };
      },
    }),
    addRole: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: `/adda/adda-role-add`,
          method: "post",
          body,
        };
      },
    }),
    addUser: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: `/adda/adda-user-add`,
          method: "post",
          body,
        };
      },
    }),
    sendEmail: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: `user/user/user/send-mail`,
          method: "post",
          body,
        };
      },
    }),
    varifyOtp: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: `user/user/user/verify-otp`,
          method: "post",
          body,
        };
      },
    }),
    createForm: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        return {
          url: `/adge/add-form`,
          method: "post",
          body,
        };
      },
    }),
    viewDetails: builder.mutation({
      query: (body) => {
        const { id } = body;
        console.log("viewDetails id", id);
        return {
          url: `/admin/list/${id}`,
          method: "post",
        };
      },
    }),
    updateDuplicate: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id, ...data } = body;
        console.log("update address body data", data);
        return {
          url: `/adda/adda-update-title/${id}`,
          method: "post",
          body: data,
        };
      },
    }),
    deleteRole: builder.mutation({
      query: (id) => ({
        url: `/adda/adda-role-delete/${id}`,
        method: "post",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/adda/adda-user-delete/${id}`,
        method: "post",
      }),
    }),
    updateRole: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id, ...data } = body;
        console.log("update address body data", data);
        return {
          url: `/adda/adda-Role-update/${id}`,
          method: "post",
          body: data,
        };
      },
    }),
    updateQuestionList: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id, ...data } = body;
        console.log("update address body data", data);
        return {
          url: `/adda/update-question/${id}`,
          method: "post",
          body: data,
        };
      },
    }),
    updateUser: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id, ...data } = body;
        console.log("update address body data", data);
        return {
          url: `/adda/adda-user-update/${id}`,
          method: "post",
          body: data,
        };
      },
    }),
    AddCommentsAdda: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id, ...data } = body;
        console.log("update address body data", data);
        return {
          url: `/adda/add-comment/${id}`,
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useUserLoginMutation,
  useSendEmailMutation,
  useVarifyOtpMutation,
  useGetAllPostGovernerQuery,
  useGetAllPostHomeQuery,
  useGetDashboardUserTotalQuery,
  useCreateFormMutation,
  useViewDetailsMutation,
  useUpdateDuplicateMutation,
  useAddHomeScheduleMutation,
  useAddRoleMutation,
  useRolesListQuery,
  useDeleteRoleMutation,
  useUpdateRoleMutation,
  useUserListQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useAddUserMutation,
  useAddApproveMutation,
  useQuestionListMutation,
  useUpdateQuestionListMutation,
  useAddCommentsAddaMutation,
} = PostApi;
