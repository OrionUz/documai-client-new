// Cards
export interface ICardsRes {
  message: string;
  cards: IBillingCard[];
}

export interface IBillingCard {
  id: number;
  cardToken: string;
  last4Digits?: string;
  thirdParty: PaymentMethodType;
  isDefault: boolean;
  organizationId: number;
  createdAt: string;
  updatedAt?: string;
}

export type PaymentMethodType = "click" | "payme";

export interface ICreateClickToken {
  orgId: number;
  cardNumber: string;
  expireDate: string; 
}

export interface ICreateClickTokenRes {
    cardToken: string;
}

export interface IVerifyClickToken {
  orgId: number;
  cardToken: string;
  smsCode: string;
}