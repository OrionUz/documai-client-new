import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBillingCard } from "../services/payment/type";
import { PricingCardProps } from "src/pages/home/type";
import { billingCardsApi } from "../services/payment";

export interface IBillingState {
  cards?: IBillingCard[];
  cardInfo?: PricingCardProps["item"];
  billingInfo?: Partial<IBillingCard>;
  billingVisible: boolean;
}

const initialState: IBillingState = {
  cards: undefined,
  billingVisible: false,
};

const billing = createSlice({
  name: "card",
  initialState,
  reducers: {
    saveBillingCards: (state, action: PayloadAction<IBillingState["cards"]>) => {
      state.cards = action.payload;
    },
    saveBillingCardInfo: (state, action: PayloadAction<IBillingState["cardInfo"]>) => {
      state.cardInfo = action.payload;
    },
    setBillingModal: (state, action: PayloadAction<IBillingState["billingVisible"]>) => {
      state.billingVisible = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(billingCardsApi.endpoints.createClickToken.matchFulfilled, (state, action) => {
      state.billingInfo = { cardToken: action.payload.cardToken };
    });
  },
});

export const { saveBillingCards, setBillingModal, saveBillingCardInfo } = billing.actions;

export default billing.reducer;
