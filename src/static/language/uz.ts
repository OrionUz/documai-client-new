import { isDocum } from "../const";

export const languageUz = {
  header: {
    about: "Biz haqimizda",
    home: "Bosh sahifa",
    pricing: "Narxlar",
    try_docum: "Boshlash",
  },

  home: {
    header: "Mijozlarga xizmat ko'rsata oladigan su'niy intellekt yordamchisini yarating",
    video: "https://youtu.be/y7JcFCj9k1I",
    text: "Siz unga xohlagan narsani o'rgatishingiz mumkin va u mijozlarning savollariga javob bera oladi. Siz taqdim etgan ma'lumotlarga asoslanib javob bera oladigan Sun'iy intellekt yaratishingizga yordam beramiz.",
    "btn-text": "Demo versiya ko'rish",
    work: "Qanday ishlaydi",
    about: "Haqida",
    pricing: "Narxlar",
    intro: {
      title1: "Tezkor javoblar!",
      text1: `${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } istalgancha mijozga bir vaqtning o'zida javob bera oladi, hech kim kutib qolishi shart emas.`,
      title2: "Maxsus AI!",
      text2: `${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } 24/7 xizmat ko'rsatuvchi yordamchingiz bo'la oladi. Siz bergan ma'lumotdan tashqariga chiqib ketmaydi`,
      title3: "Hamyonbop!",
      text3: `${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } narxi xizmat ko‘rsatish xodimini yollashdan ko'ra to‘rt barobar arzonroq`,
    },
    usage: {
      info1:
        "Biznesingiz haqida kerakli ma'lumotlarni yeg'ishingiz kerak. Mijozlaringiz nimalar so'rashi mumkin bo'lgan savollarga javob yozing. To'plangan informatsiyani bir faylga joylang. Agar sizga yordam kerak bo'lsa, biz bilan bog'lanishingiz mumkin.",
      info2: `Botni sun'iy intellektga ulash uchun bot tokeni va username ni kiritishingiz kerak bo'ladi. Shundan so'ng, ma'lumotlar yozilgan faylni ${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } ga yuklashingiz kerak. Biz berilgan ma'lumotni sun'iy intellektga o'rgatib, botga ulab beramiz.`,
      info3:
        "Integratsiya tugaganidan so'ng, botingiz tayyor bo'ladi. Uni savol javob qilib ko'rishingiz mumkin. Bilmagan savollari esa ajralib ko'rinadi, shunday savollarga javob berib, yana yangilab turish tavsiya etiladi.",
    },
    aboutPart: {
      title1: `${isDocum ? "Docum.ai" : "BlueJourney.pro"} - bu mijozlarga xizmat ko'rsatish AI yaratish platformasi`,

      text1: `${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } - bu sun'iy intellekt asosidagi mijozlarga xizmat ko'rsatish yechimlarini yaratishda yordam berish uchun mo'ljallangan platforma. Siz tadbirkor, mijozlarni qo‘llab-quvvatlash bo‘yicha mutaxassis yoki kontent yaratuvchisi bo‘lasizmi, platformamiz sizga sun’iy intellektdan foydalanish va va uning imkoniyatlaridan o'z yo'lingizda ishlatish imkonini beradi. Inson bir kunda taxminan 10 ta savolga ega boʻlgan 100 ta mijozga xizmat koʻrsatadi va bu uchun kuniga o'rtacha 12$ to'lanadi. ${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } esa atigi $3 evaziga ushbu ish yukini hal qila oladi!`,
      btn: "Boshlash",

      title2: "Maʼlumotlaringizni real vaqtda sinab koʻrishingiz va tahrirlashingiz mumkin",

      text2: `${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } yordamida siz real vaqtda ma'lumotlaringizni sinab ko'rish va tahrirlash imkoniyatiga egasiz. Hujjatingizni yuklaganingizdan so'ng uni Telegram botiga ulashingiz mumkin. Agar siz botning javoblaridan qoniqmasangiz, yuklangan hujjatga osongina tahrir qilishingiz, uni o‘chirishingiz yoki kerak bo‘lganda boshqa hujjatlarni qo‘shishingiz mumkin. Ushbu moslashuvchanlik sizga sun'iy intellektga asoslangan mijozlarga xizmat ko'rsatish botini yaxshilash va ish faoliyatini yaxshilash imkonini beradi.`,

      title3: "Siz har qanday turdagi faylni yuklashingiz mumkin",

      text3:
        "AI modelingizni o'rgatish uchun istalgan turdagi faylni yuklash imkoniyati mavjud. Matnli hujjatlar, elektron jadvallar, tasvirlar yoki boshqa formatlar boʻladimi, siz oʻz maʼlumotlaringizdan AI modelini oʻrgatish uchun foydalanishingiz mumkin. Shuni ta'kidlash kerakki, ma'lumotlarning sifati AI ishlashiga bevosita ta'sir qiladi. Shu sababli, ma'lumotlarning sifatli bo'lishini ta'minlash AIga sizning maxsus ehtiyojlaringizni qondirishda yaxshiroq ish qilish imkonini beradi.",
    },
    pricingPart: {
      type1: "Boshlang'ich",
      price1: "Bepul",
      text1: "Siz o'zingizning shaxsiy ma'lumotlaringiz bilan AI modelini sinab ko'rishingiz mumkin",
      includes1: {
        line1: "Bitta hujjatni yuklash (maksimal 2 mb)",
        line2: "AI maxsus bilimlari asosida suhbatlashing",
        line3: "20 ta savollar",
      },
      type2: "Premium",
      price2: "19$",
      price_duration2: "/ oy",
      text2: "+ Shuningdek, siz AI to'lovini to'lashingiz kerak.",
      includes2: {
        line1: "10 ta hujjatni yuklang (maksimal 10 mb)",
        line2: "Hujjatni tahrirlash",
        line3: "Bitta Telegram botni integratsiyalangan",
        line4: "Mijozlarni qo'llab-quvvatlash",
        line5: "Haqiqiy vaqtda ma'lumotlarni tekshirish",
      },
      type3: "Korxona",
      price3: "19$",
      price_duration3: "/ oy",
      text3: "+ Shuningdek, siz AI to'lovini to'lashingiz kerak",
      includes3: {
        line1: "Cheksiz hujjat",
        line2: "10 ta Telegram botlari",
        line3: "Ma'lumotlar tahlilini qo'llab-quvvatlash",
        line4: "Haqiqiy vaqtda ma'lumotlarni tekshirish",
      },
    },
    footer: {
      title: "Bizga 10 dan ortiq kompaniya ishonadi",
      description: "Uzoq muddatli shartnomalar yo'q. Oddiy.",
      text: "30 kunlik bepul sinovni boshlang. Istalgan vaqtda bekor qiling",
      demo: "Demoni ko'rish",
      start: "Boshlash",
      docum: `${isDocum ? "Docum.ai" : "BlueJourney.pro"}`,
      "text-down": `${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } - bu sizning biznesingiz uchun avtomatlashtirish yechimlarini taklif qiluvchi platforma. Sun'iy intellekt kuchidan foydalangan holda, ${
        isDocum ? "Docum.ai" : "BlueJourney.pro"
      } sizga turli jarayonlarni soddalashtirish va avtomatlashtirish, tashkilotingizdagi samaradorlikni  oshirish imkonini beradi.`,
      overview: "Umumiy koʻrinish",
      features: "Xususiyatlari",
      "pricing-down": "Narxlar",
      help: "Yordam",
      "demo-down": "Demo",
    },
  },

  about: {
    title: "Biz odamlarning hayotini osonlashtiradigan AI tizimini yaratdik",
    text: `Mijozlarimiz bizni xohlagan kompaniya bo'lish uchun ehtirosli odamlarning elektr guruhi kerak. ${
      isDocum ? "Docum.ai" : "BlueJourney.pro"
    } saytida yetakchi odamlar bilan tanishing.`,
    about: "Loyiha haqida",

    aboutPart: {
      title1: `${isDocum ? "Docum.ai" : "BlueJourney.pro"} maqsadi`,
      text1:
        "Hozirda bizda faqat matnga asoslangan mijozlarga xizmat ko'rsatish vositasi mavjud, ammo sun'iy intellekt kundan-kunga rivojlanib borayotganligi sababli biz ovozli va videoga asoslangan xizmatlarni ham ishga tushiramiz. Bu hammasi emas, yaqin 2 oy ichida biz ham chora ko'rish uchun dasturlashni rejalashtirmoqdamiz, bu sizning biznesingiz uchun ko'p imkoniyatlarni bildiradi. Siz shunchaki o'z brendingizni yaratasiz va bizning AI vositamiz mijozlaringizga xizmat yoki mahsulotingizni tushunish va undan foydalanishga yordam beradi.",
      title2: `${isDocum ? "Docum.ai" : "BlueJourney.pro"} haqidagi ba'zi faktlar`,
      text2:
        "Biz Oʻzbekistonda joylashgan va 2023-yil boshida tashkil etilgan yangi kompaniyamiz. Hozirgi jamoamiz butun dunyoni koʻrishga ishtiyoqmand 20 kishidan iborat. Biz mijozlarimizning ehtiyojlarini tushunishga ochiqmiz va kerakli o'zgarishlarni amalga oshirishni xohlaymiz, oxirida biz mijozlarimiz xohlagan narsani qilishimiz kerak.",
    },

    aboutUs: "Biz haqimizda",
    names: {
      name1: "Samandar. T.",
      who1: "CEO",
      name2: "Shohruxmirzo. T.",
      who2: "CTO",
      name3: "Asror. N",
      who3: "Dasturchi",
      name4: "Mirsaid. B",
      who4: "UX/UI",
      name5: "Vosilxo'ja. N",
      who5: "SMM manager",
    },

    projects: "Bizning loyihalarimiz",
    project: {
      title1: "Simyog’och",
      text1:
        "Simyog'och - bu ish izlovchilarga ham, ish beruvchilarga ham imkon beruvchi eng yaxshi ilova va veb-sayt. Foydalanuvchi uchun qulay interfeys bilan mukammal ishni topish yoki ideal nomzodni yollash hech qachon oson bo'lmagan.",
      title2: "Qunduzbobo",
      text2:
        "Qunduzbobo - bu shaxsiyatni hayotga olib keladigan sun'iy intellektga asoslangan yangi veb-sayt va ilova. Dinamik suhbatlarda qatnashing, kodlash, yozish, ilm-fan va tasvir yaratish kabi ijodiy izlanishlarni bir joyda o‘rganing.",
    },
  },
  dashboard: {
    home: "Bosh sahifa",
    help: "Yordam",
    document: "Dokument",
    quality: "Sifat",
    chat: "Chat",
    label1: "Bot nomi*",
    name1: "Bot nomi*",
    message1: "Iltimos, bot nomini kiriting*",
    label2: "Bot token*",
    name2: "botToken",
    message2: "Iltimos, bot token ini kiriting*",
    label3: "Chatbot nomi*",
    name3: "Nom",
    message3: "Iltimos, chatbot nomini kiriting*",
    create: "Yangi bot yarating",
    create1: "O'z chat botingizni yarating",
    text: "Telegram botni @BotFather da yaratishingiz mumkin",
    guide: "Video qo'llanma",
    next: "Keyingisi",
    save: "Saqlash",
    edit: "Botingizni tahrirlang!",
    logout: "Chiqish",
    name4: "Bot nomi:",
    user: "Foydalanuvchilar",
    activation: "Faollashtirilgan botlar",
    balance: "Hisob:",
    balance1: "Hisob:",
    bot: "Botlar",
    users: "Foydalanuvchilar",
    yourBots: "Sizning botlaringiz",
    tryData: "Bu maʼlumotlarni sinab koʻring",
    addDoc: "Yangi hujjat qo'shing",
    upload: "Hujjatlaringizni yuklang",
    instraction: "Yo'riqnomani ko'rish",
    uploadBtn: "Yuklash",
    uploadContent: "Yuklash uchun hujjatni ushbu hududga bosing yoki torting",
    maxFile: "Maksimal fayl hajmi",
    mb: "MB!",
    useTranslation: "Tarjimadan foydalaning",
    hovertranslation:
      "Ingliz tilidan tashqari hujjatlarni tarjima qilish va eng yaxshi natijalarga erishish uchun mashq qilish uchun undan foydalaning",
    selection: "Xabarlarni ko'rish uchun foydalanuvchini tanlang",
    keywords: "Kalit so'zlar",
    newKeyword: 'Yangi',
    keywordHelp: "*** Iltimos, har bir fayl uchun ingliz tilida faqat bitta kalit so'z kiriting ***",
  },

  sign: {
    sign: "Kirish",
    signUp: "Ro'yxatdan o'tish",
    text: "AIni biznesingizga integratsiya qilish imkoniyatlar dunyosini ochib beradi",
  },
};
