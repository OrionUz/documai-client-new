import CustomSelect from "src/components/common/select";
import { isMobile } from "src/static/const";
import { LANGUAGE, language, languageOptions } from "./const";
import { useTranslation } from "react-i18next";

function Language() {
  const { i18n } = useTranslation();
  const handleChange = (val: string) => {
    i18n.changeLanguage(val);
    localStorage.setItem(LANGUAGE, val);
  };
  return (
    <div className="language">
      <CustomSelect
        style={{ width: 74 }}
        defaultValue={language}
        size={isMobile ? "middle" : "large"}
        options={languageOptions}
        onChange={handleChange}
      />
    </div>
  );
}

export default Language;
