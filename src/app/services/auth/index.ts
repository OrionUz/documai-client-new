import { api } from "../api";
import { ILogin, ILoginRes, INewClient, INewClientRes } from "./type";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    //Auth login endpoint
    login: build.mutation<ILoginRes, ILogin>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),

     //Get new client
     getNewClient: build.mutation<INewClientRes, void>({
      query: () => ({ url: 'new-client' }),
    }),

    //Add new client
    addNewClient: build.mutation<INewClientRes, INewClient>({
      query: (body) => ({
        url: 'new-client',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetNewClientMutation, useAddNewClientMutation } = authApi;
