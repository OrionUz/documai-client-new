import { CrownSvg, PricingLowSvg, UzcardSvg } from "src/assets/svg/pricing";

export const pricingPlanData = [
  {
    icon: <PricingLowSvg />,
    price: "$29",
    month: "/month",
  },
  {
    icon: <CrownSvg />,
    price: "$299",
    month: "/month",
  },
];

export const pricingCardData = [
  {
    // id: 1,
    icon: <UzcardSvg />,
    balance: "Balance",
    cash: "125.000",
    card_number: "1212 1212 **** **12",
    card_holder: "Jon Do",
    date: "M/Y",
    date_month: "6",
    date_year: "27",
    cvc: "CVC",
    cvc_number: "121",
  },
  {
    icon: <UzcardSvg />,
    balance: "Balance",
    cash: "125.000",
    card_number: "1212 1212 **** **12",
    card_holder: "Jon Do",
    date: "M/Y",
    date_month: "6",
    date_year: "27",
    cvc: "CVC",
    cvc_number: "121",
  },
];
