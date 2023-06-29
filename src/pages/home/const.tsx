import { AboutCardSvg1, AboutCardSvg2 } from "src/assets/svg/freepik/about";
import { UsageCardSvg1, UsageCardSvg2, UsageCardSvg3 } from "src/assets/svg/freepik/usage";

export const introcardData = [
  {
    title: "Quick answer!",
    description:
      "Docum.ai can provide immediate responses to an unlimited number of customers when they contact your custom bot.",
    img: require("src/assets/img/home/introcard1.png"),
  },
  {
    title: "Custom AI",
    description:
      "Docum.ai offers 24/7 service and can handle unlimited customers with custom knowledge.",
    img: require("src/assets/img/home/introcard2.png"),
  },
  {
    title: "Affordable",
    description:
      "Docum.ai costs four times less than hiring a human customer service employee.",
    img: require("src/assets/img/home/introcard3.png"),
  },
];

export const usagecardData = [
  {
    icon: <UsageCardSvg1 />,
    info: "It is important for your business to collect data regarding customer inquiries and corresponding answers. This information should be consolidated into a single file. If you require assistance, our team is always available to help.",
  },
  {
    icon: <UsageCardSvg2 />,
    info: "To proceed with the integration of the AI model into the bot on Docum.ai, please provide us with a bot username and token. Once we receive the necessary information, we will incorporate the AI model that is knowledgeable about your business.",
  },
  {
    icon: <UsageCardSvg3 />,
    info: "After the integration is complete, I will engage with the chat bot you provided and ask questions specific to your business. I will carefully note down any questions it cannot answer and ensure that the uploaded document is updated accordingly.",
  },
];

export const aboutcardData = [
  {
    title: "Docum.ai is a platform to create customer service AI",
    description: [
      "Docum.ai is a platform designed to help you create AI-powered customer service solutions. Whether you're an entrepreneur, a customer support professional, or a content creator, our platform empowers you to leverage AI and provide outstanding user experiences.",
      "Instead of relying on human customer service employees who cost $12 per day to serve 100 customers, each with approximately 10 questions, you can create a bot on our platform to handle this workload for just $3!",
    ],
    button: "Get started",
    icon: <AboutCardSvg1 />,
    width: "full",
  },
  {
    title: "You can test your data real time and edit it",
    description: [
      "With Docum.ai, you have the ability to test and edit your data in real time. After uploading your document, you can connect it to a Telegram bot. If you're unsatisfied with the bot's answers, you can easily make edits to the uploaded document, delete it, or add more documents as needed. This flexibility allows you to refine and improve the performance of your AI-powered customer service bot.",
    ],
    img: require("src/assets/img/home/aboutcard2.png"),
    width: "half",
  },
  {
    title: "You can upload any type of file",
    description: [
      "You have the flexibility to upload any type of file for training your AI model. Whether it's text documents, spreadsheets, images, or other formats, you can utilize your data to train the AI model. It's important to note that the quality of the data directly impacts the performance of the AI. Therefore, ensuring the data is of good quality will enable the AI to do a better job in serving your specific needs.",
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
