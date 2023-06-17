import { getRootState } from "src/app/store";
import { api } from "../api";
import { IDeleteRes } from "../api/type";
import {
  IAddProjec,
  IAddProjectRes,
  IProjectRes,
  IProjectUserMessagesRes,
  IProjectUserRes,
  ITrainProject,
} from "./type";

export const projectsApi = api.injectEndpoints({
  endpoints: (build) => ({
    //Get projects endpoint
    getProjects: build.query<IProjectRes, void>({
      query: () => ({ url: "v2/projects" }),
      providesTags: (result) =>
        result
          ? [
              ...result.projects.map(({ id }) => ({
                type: "Projects" as const,
                id,
              })),
              { type: "Projects", id: "LIST" },
            ]
          : [{ type: "Projects", id: "LIST" }],
    }),

    //Get public projects endpoint
    getPublicProjects: build.query<IProjectRes, void>({
      query: () => ({ url: "v2/projects/public" }),
      providesTags: (result) =>
        result
          ? [
              ...result.projects.map(({ id }) => ({
                type: "Projects" as const,
                id,
              })),
              { type: "Projects", id: "LIST" },
            ]
          : [{ type: "Projects", id: "LIST" }],
    }),

    //Add project endpoint
    addProject: build.mutation<IAddProjectRes, IAddProjec>({
      query: (body) => ({
        url: "v2/projects",
        method: "POST",
        body: { ...body, orgId: getRootState().auth.profile?.organizationId },
      }),
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),

    //Train project endpoint
    trainProject: build.mutation<any, ITrainProject>({
      query(data) {
        const { id, formData } = data;
        return {
          url: `v2/projects/train/${id}`,
          method: "POST",
          body: formData,
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
          formData: true,
        };
      },
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),

    //Delete project endpoint
    deleteProject: build.mutation<IDeleteRes, number>({
      query(id) {
        return {
          url: `v2/projects/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (post) => [{ type: "Projects", id: post?.id }],
    }),

    //Get project users
    getProjetUsers: build.query<IProjectUserRes, number>({
      query: (id) => `v2/projects/${id}/users`,
      providesTags: (result) =>
        result
          ? [
              ...result?.botUsers?.map(({ id }) => ({
                type: "Users" as const,
                id,
              })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),

    //Get project user messages
    getProjetUserMessages: build.query<IProjectUserMessagesRes, { botId: number; userId: string | null }>({
      query: ({ botId, userId }) => `chatbot/${botId}/user/${userId}/chats`,
      keepUnusedDataFor: 5,
      providesTags: (result) =>
        result
          ? [
              ...result?.chats?.map(({ id }) => ({
                type: "UserChats" as const,
                id,
              })),
              { type: "UserChats", id: "LIST" },
            ]
          : [{ type: "UserChats", id: "LIST" }],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetPublicProjectsQuery,
  useAddProjectMutation,
  useTrainProjectMutation,
  useDeleteProjectMutation,
  useGetProjetUsersQuery,
  useLazyGetProjetUsersQuery,
  useGetProjetUserMessagesQuery,
  useLazyGetProjetUserMessagesQuery,
} = projectsApi;

export const {
  endpoints: { deleteProject, getProjects },
} = projectsApi;
