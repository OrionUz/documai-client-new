import { Affordable, CustomAI, QuickAnswer } from "src/assets/svg";
import { AboutCardSvg1, AboutCardSvg2 } from "src/assets/svg/freepik/about";
import {
  UsageCardSvg1,
  UsageCardSvg2,
  UsageCardSvg3,
} from "src/assets/svg/freepik/usage";

export const introcardData = [
  {
    title: "home.intro.title1",
    description: "home.intro.text1",
    icon: <QuickAnswer />,
  },
  {
    title: "home.intro.title2",
    description: "home.intro.text2",
    icon: <CustomAI />,
  },
  {
    title: "home.intro.title3",
    description: "home.intro.text3",
    icon: <Affordable />,
  },
];

export const usagecardData = [
  {
    icon: <UsageCardSvg1 />,
    info: "home.usage.info1",
  },
  {
    icon: <UsageCardSvg2 />,
    info: "home.usage.info2",
  },
  {
    icon: <UsageCardSvg3 />,
    info: "home.usage.info3",
  },
];

export const aboutcardData = [
  {
    title: "home.aboutPart.title1",
    description: ["home.aboutPart.text1"],
    button: "home.aboutPart.btn",
    icon: <AboutCardSvg1 />,
    width: "full",
  },
  {
    title: "home.aboutPart.title2",
    description: ["home.aboutPart.text1"],
    img: require("src/assets/img/home/aboutcard2.png"),
    width: "half",
  },
  {
    title: "home.aboutPart.title3",
    description: ["home.aboutPart.text3"],
    icon: <AboutCardSvg2 />,
    width: "half",
  },
];

export const pricingCardData = [
  {
    current: true,
    type: "home.pricingPart.type1",
    price: "home.pricingPart.price1",
    description: "home.pricingPart.text1",
    includes: [
      "home.pricingPart.includes1.line1",
      "home.pricingPart.includes1.line2",
      "home.pricingPart.includes1.line3",
    ],
  },
  {
    main: true,
    type: "home.pricingPart.type2",
    price: "29$",
    price_duration: "home.pricingPart.price_duration2",
    requirement: "home.pricingPart.text2",
    includes: [
      "home.pricingPart.includes2.line1",
      "home.pricingPart.includes2.line2",
      "home.pricingPart.includes2.line3",
      "home.pricingPart.includes2.line4",
      "home.pricingPart.includes2.line5",
    ],
  },
  {
    type: "home.pricingPart.type3",
    price: "299$",
    price_duration: "home.pricingPart.price_duration3",
    requirement: "home.pricingPart.text3",
    includes: [
      "home.pricingPart.includes3.line1",
      "home.pricingPart.includes3.line2",
      "home.pricingPart.includes3.line3",
      "home.pricingPart.includes3.line4",
    ],
  },
];

export const newscardData = [
  {
    date: "May 23, 2023",
    title: "The Beatles – is home to the capital, London,",
    description: "The United Kingdom, made up of England, Scotland, Wales",
    img: require("src/assets/img/home/newscard1.png"),
  },
  {
    date: "May 23, 2023",
    title: "The U.S. is a country of 50",
    description:
      "DC. Midwestern metropolis Chicago is known for and on the west coast, Los Angeles'",
    img: require("src/assets/img/home/newscard2.png"),
  },
  {
    date: "May 23, 2023",
    title: "Major Atlantic coast cities are New York, a global finance",
    description:
      "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest",
    img: require("src/assets/img/home/newscard3.png"),
  },
];
