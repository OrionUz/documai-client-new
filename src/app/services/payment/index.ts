import { api } from "../api";
import { ICardsRes, ICreateClickToken, ICreateClickTokenRes, IVerifyClickToken } from "./type";

export const billingCardsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCards: build.query<ICardsRes, number>({
      query: (orgId) => ({ url: `cards/${orgId}` }),
      providesTags: (result) =>
        result
          ? [
              ...result.cards.map(({ id }) => ({
                type: "Cards" as const,
                id,
              })),
              { type: "Cards", id: "LIST" },
            ]
          : [{ type: "Cards", id: "LIST" }],
    }),

    createClickToken: build.mutation<ICreateClickTokenRes, ICreateClickToken>({
      query: (body) => ({
        url: "v2/cards/click/token",
        method: "POST",
        body,
      }),
    }),

    verifyClickToken: build.mutation<void, IVerifyClickToken>({
      query: (body) => ({
        url: "v2/cards/click/token/verify",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Cards", id: "LIST" }],
    }),
  }),
});

export const {
    useCreateClickTokenMutation,
    useGetCardsQuery,
    useVerifyClickTokenMutation,
} = billingCardsApi;
