export interface PricingPlanProps {
  item: {
    icon: JSX.Element;
    price: string;
    month: string;
  };
}

export interface PricingCardsProps {
  item: {
    // id: number;
    icon: JSX.Element;
    balance: string;
    cash: string;
    card_number: string;
    card_holder: string;
    date: string;
    date_month: string;
    date_year: string;
    cvc: string;
    cvc_number: string;
  };
}
