import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBillingCard } from "../services/payment/type";

export interface IAuthState {
  cards?: IBillingCard[];
}

const initialState: IAuthState = {
  cards: undefined,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    saveCards: (state, action: PayloadAction<IBillingCard[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { saveCards } = cardSlice.actions;

export default cardSlice.reducer;
