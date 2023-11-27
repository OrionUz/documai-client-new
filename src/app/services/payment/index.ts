import { getRootState } from "src/app/store";
import { api } from "../api";
import { ICardsRes, ICreateClickToken, ICreateClickTokenRes, IVerifyClickToken } from "./type";

export const billingCardsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCards: build.query<ICardsRes, void>({
      query: () => ({ url: `cards/${ getRootState().auth.profile?.organizationId}` }),
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
        url: "cards/click/token",
        method: "POST",
        body: { ...body, orgId: getRootState().auth.profile?.organizationId },
      }),
    }),

    verifyClickToken: build.mutation<void, IVerifyClickToken>({
      query: (body) => ({
        url: "v2/cards/click/token/verify",
        method: "POST",
        body: { ...body, orgId: getRootState().auth.profile?.organizationId },
      }),
      invalidatesTags: [{ type: "Cards", id: "LIST" }],
    }),
  }),
});

export const { useCreateClickTokenMutation, useGetCardsQuery, useVerifyClickTokenMutation } = billingCardsApi;
