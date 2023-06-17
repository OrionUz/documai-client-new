import { api } from "../api";
import { IDeleteRes } from "../api/type";
import { IChatQuery, IChatQueryRes, IChatRes } from "./type";

export const chatApi = api.injectEndpoints({
  endpoints: (build) => ({
    //Get chat endpoint
    getChat: build.query<IChatRes, string | null>({
      query: (id) => `chat/${id}`,
      providesTags: (result) =>
        result
          ? [
              ...result.messages.map(({ id }) => ({
                type: "Chat" as const,
                id,
              })),
              { type: "Chat", id: "LIST" },
            ]
          : [{ type: "Chat", id: "LIST" }],
    }),

    //Chat query endpoint
    sendChatQuery: build.mutation<IChatQueryRes, IChatQuery>({
      query: (body) => ({
        url: "chat/query",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Chat", id: "MESSAGE" }],
    }),

    //Public chat query endpoint
    sendPublicChatQuery: build.mutation<IChatQueryRes, IChatQuery>({
      query: (body) => ({
        url: "chat/query/public",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Chat", id: "MESSAGE" }],
    }),

    //Delete chat endpoint
    deleteChat: build.mutation<IDeleteRes, number>({
      query(id) {
        return {
          url: `chat/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (post) => [{ type: "Chat", id: post?.id }],
    }),
  }),
});

export const {
  useGetChatQuery,
  useLazyGetChatQuery,
  useSendChatQueryMutation,
  useSendPublicChatQueryMutation,
  useDeleteChatMutation,
} = chatApi;

export const {
  endpoints: { getChat },
} = chatApi;
