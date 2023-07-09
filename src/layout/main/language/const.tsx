export const LANGUAGE = "DOCUM_AI_LANGUAGE";
export const language = localStorage.getItem(LANGUAGE) || "uz";

export const languageOptions = [
  { value: "uz", label: "O’z" },
  { value: "ru", label: "Рус" },
  { value: "en", label: "Eng" },
];
