import { isDocum } from "../const";

export const languageEn = {
  header: {
    about: "About us",
    home: "Homepage",
    pricing: "Pricing",
    try_docum: "Start",
  },
  home: {
    header: "Automatic Customer Service With AI",
    header_con: 'With AI',
    video: "https://youtu.be/mtWxYUG8qjA",
    text: "We will help you develop a custom-knowledge AI for customer service.",
    "btn-text": "START CREATING",
    work: "How it works",
    about: "About",
    pricing: "Pricing",
    intro: {
      title1: "Quick answer!",
      text1: `${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } can provide immediate responses to an unlimited number of customers when they contact your custom bot.`,
      title2: "Control!",
      text2: `You'll maintain complete quality control, with access to view all customer and bot interactions.`,
      title3: "Affordable!",
      text3: `${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } costs four times less than hiring a human customer service employee.`,
    },
    usage: {
      info1:
        "Our team is available to help you compile customer inquiries and responses into one comprehensive file, essential for improving your business.",
      info2: `Please provide a bot username and token to integrate the AI model into your ${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } bot. Once received, we'll equip the bot with AI tailored to your business knowledge.`,
      info3:
        "After the integration is complete, You can engage with the chat bot,  and ask questions specific to your business. AI will carefully note down any questions it cannot answer, we recommend to answer those questions and update it again",
    },
    aboutPart: {
      title1: `${isDocum ? "Docum.ai" : "BlueJourney.pro"} is a platform to create customer service AI`,

      text1: `${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } is a platform designed to help you create AI-powered customer service solutions. Whether you're an entrepreneur, a customer support professional, or a content creator, our platform empowers you to leverage AI and provide outstanding user experiences. \n Instead of relying on human customer service employees who cost $12 per day to serve 100 customers, each with approximately 10 questions, you can create a bot on our platform to handle this workload for just $3!`,
      btn: "Get started",

      title2: "You can test your data real time and edit it",

      text2: `After uploading a document to your Telegram bot, you can enhance its interaction quality. If the bot's responses are unsatisfactory, simply edit the uploaded document for better accuracy. Alternatively, you can delete it or add more documents to improve the bot's performance.`,

      title3: "You can upload any type of file",

      text3:
        "You can train your AI model using a variety of file types, from text documents to spreadsheets. Remember, the data's quality significantly influences the AI's performance, so high-quality data ensures more effective AI outcomes for your needs.",
    },
    pricingPart: {
      type1: "Basic",
      price1: "Free",
      text1: "You could test the AI model with your custom data",
      includes1: {
        line1: "Upload one document (2 mb max)",
        line2: "Chat with AI  custom knowledge based",
        line3: "20 questions",
      },
      type2: "Premium",
      price2: "19$",
      price_duration2: "/ month",
      text2: "+ Also you have to pay AI Fee.",
      includes2: {
        line1: "Upload 10 documents (10 mb max )",
        line2: "Edit document",
        line3: "One Telegram bot integrated",
        line4: "Customer support",
        line5: "Real time checking the data",
      },
      type3: "Enterprise",
      price3: "19$",
      price_duration3: "/ month",
      text3: "+ Also you have to pay AI Fee.",
      includes3: {
        line1: "Unlimited document",
        line2: "10 Telegram bots",
        line3: "Data analytics support",
        line4: "Real time checking the data",
      },
    },
    footer: {
      title: "We are trusted by 10+ of companies",
      description: "No long-term contracts. No catches. Simple.",
      text: "Start your 30-day free trial. Cancel anytime",
      demo: "View demo",
      start: "Get started",
      docum: `${isDocum ? "Docum.ai" : "BlueJourney.pro"}`,
      "text-down": `${isDocum ? "Docum.ai" : "BlueJourney.pro"} - a new era of Customer Service with AI.`,
      overview: "Overview",
      features: "Features",
      "pricing-down": "Pricing",
      help: "Help",
      "demo-down": "Demo",
    },
  },
  about: {
    title: "We built AI tool which makes people’s life easier",
    text: `To be the company our customers want us to be, it takes an electric group of passionate people. Get to know the people leading the way at ${
      isDocum ? "Docum.ai" : "BlueJourney.pro"
    }.`,
    about: "About project",

    aboutPart: {
      title1: `The Mission of ${isDocum ? "Docum.ai" : "BlueJourney.pro"}`,
      text1:
        "Currently we have only text based customer service tool but as AI is developing day by day, we will start voice and video based services as well. This is not all, upcoming 2 months we plan to program ai to take an action as well, which means many possibilities to your business. You just build your brand and our AI tool helps your customers to understand and use your service or product.",
      title2: `The some facts about ${isDocum ? "Docum.ai" : "BlueJourney.pro"}`,
      text2:
        "We are a new company located in Uzbekistan and established in early 2023. Our current team is consisted of 20 people who are eager to see the whole world.  We are open to understand our customers need and would like to make necessary changes, in the end we should make what our customers want not what we want.",
    },

    aboutUs: "About Us",
    names: {
      name1: "Samandar. T.",
      who1: "CEO",
      name2: "Shohruxmirzo. T.",
      who2: "CTO",
      name3: "Asror. N.",
      who3: "Programmer",
      name4: "Mirsaid. B.",
      who4: "UX/UI",
      name5: "Vosilxo'ja. N.",
      who5: "SMM manager",
      name6: "Avazbek. S.",
      who6: "SWE",
    },

    projects: "Our projects",
    project: {
      title1: "Simyog’och",
      text1:
        "Simyog’och is the ultimate app and website that empowers both job seekers and employers. With a user-friendly interface, finding the perfect job or hiring the ideal candidate has never been simpler.",
      title2: "Qunduzbobo",
      text2:
        "Qunduzbobo is the groundbreaking website and app powered by artificial intelligence that brings personalities to life. Engage in dynamic conversations, explore creative pursuits like coding, writing, science, and image generating, all in one place.",
    },
  },

  dashboard: {
    home: "Home",
    help: "Help",
    document: "Document",
    quality: "Quality",
    chat: "Chat",
    label1: "Bot username*",
    name1: "Bot username*",
    message1: "Please write bot username*",
    label2: "Bot token*",
    name2: "Bot token",
    message2: "Please write bot  token*",
    label3: "Chatbot name*",
    name3: "displayName",
    message3: "Please write chatbot name*",
    create: "New Bot",
    create1: "Create your chat bot",
    text: "You can create a Telegram bot on @BotFather",
    guide: "Video guide",
    next: "Next",
    save: "Save",
    edit: "Edit your bot!",
    logout: "Log out",
    name4: "Bot username:",
    user: "Users",
    activation: "Activated bots",
    balance: "Balance:",
    balance1: "Balance:",
    bot: "Bots",
    users: "Users",
    yourBots: "Your bots",
    tryData: "Try this data",
    addDoc: "Add new document",
    upload: "Please upload your documents",
    instraction: "View instruction",
    uploadBtn: "Upload",
    uploadContent: "Click or drag document to this area to upload",
    maxFile: "Maximum file size",
    mb: "MB!",
    useTranslation: "Use translation",
    hovertranslation: "Use this for non-English documents to translate and train to obtain the best results",
    selection: "Select a user to see messaging",
    keywords: "Keywords",
    newKeyword: "New",
    keywordHelp: "*** Please add only one keyword in English for each file ***",
    scriptCodeLabel: "Embed code",
  },

  sign: {
    sign: "Sign in",
    signUp: "Sign up",
    text: "Integrating AI into your business unlocks a world of possibilities",
  },
};
