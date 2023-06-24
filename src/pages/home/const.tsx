import { AboutCardSvg1, AboutCardSvg2 } from "src/assets/svg/freepik/about";
import { UsageCardSvg1, UsageCardSvg2, UsageCardSvg3 } from "src/assets/svg/freepik/usage";

export const introcardData = [
  {
    title: "Quick answer!",
    description: "Docum.ai can answer your customers immediately  when they contact your custom bot.",
    img: require("src/assets/img/home/introcard1.png"),
  },
  {
    title: "Custom AI",
    description: "Docum.ai can serve 24/7 and talk to unlimited customers with custom knowledge",
    img: require("src/assets/img/home/introcard2.png"),
  },
  {
    title: "Affordable",
    description: "Docum.ai cost you 4 times cheaper than human customer service employee",
    img: require("src/assets/img/home/introcard3.png"),
  },
];

export const usagecardData = [
  {
    icon: <UsageCardSvg1 />,
    info: "You should collect data about your business. Think about what customers ask  and what answers should be given. You should write all of them into one file. If you need help, you can always contact our team",
  },
  {
    icon: <UsageCardSvg2 />,
    info: "Upload it to Docum.ai. We will ask you to give us a bot username and token. After that we will integrate ai model which knows about your business into the bot.",
  },
  {
    icon: <UsageCardSvg3 />,
    info: "You should enter the chat bot which you provided and ask questions about your business. You should take notes which question it could not answer and update the document you uploaded",
  },
];

export const aboutcardData = [
  {
    title: "Docum.ai is a platform to create customer service AI",
    description: [
      "Whether you're an entrepreneur, a customer support professional, or a content creator, our platform enables you to harness the power of AI and deliver exceptional user experiences.",
      "Human customer service employees cost you 12$ per day and they serve 100 customers and each customer may have 10 questions.  You can create a bot which can do this job for 3$!",
    ],
    button: "Get started",
    icon: <AboutCardSvg1 />,
    width: "full",
  },
  {
    title: "You can test your data real time and edit it",
    description: [
      "Once you upload document, you can connect it to Telegram bot. If you do not like the bot answers, you can edit the document you uploaded or delete it or add more document.",
    ],
    img: require("src/assets/img/home/aboutcard2.png"),
    width: "half",
  },
  {
    title: "You can upload any type of file",
    description: [
      "We can train AI model with your data. You can upload any type of file. Be sure that data quality is up to you. As long as data is good, Ai can do better job",
    ],
    icon: <AboutCardSvg2 />,
    width: "half",
  },
];

export const pricingCardData = [
  {
    current: true,
    type: "Basic",
    price: "Free",
    description: "You could test the AI model with your custom data",
    includes: ["Upload one document (2 mb max)", "Chat with AI  custom knowledge based", "20 questions"],
  },
  {
    main: true,
    type: "Premium",
    price: "29$",
    price_duration: "/ month",
    requirement: "+ Also you have to pay AI Fee.",
    includes: [
      "Upload 10 documents (10 mb max )",
      "Edit document",
      "One Telegram bot integrated",
      "Customer support",
      "Real time checking the data",
    ],
  },
  {
    type: "Enterprise",
    price: "299$",
    price_duration: "/ month",
    requirement: "+ Also you have to pay AI Fee.",
    includes: [
      "Unlimited document",
      "10 Telegram bots",
      "Data analytics support",
      "Real time checking the data",
      "Edit documents",
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
    description: "DC. Midwestern metropolis Chicago is known for and on the west coast, Los Angeles'",
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
