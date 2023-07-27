export const LANGUAGE = "DOCUM_AI_LANGUAGE";
export const language = localStorage.getItem(LANGUAGE) || "uz";

export const languageOptions = [
  { value: "en", label: "Eng" },
  { value: "ru", label: "Рус" },
  { value: "uz", label: "O'z" },
];
