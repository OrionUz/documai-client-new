import { api } from "../api";
import { ILogin, ILoginRes } from "./type";

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
  }),
});

export const { useLoginMutation } = authApi;
