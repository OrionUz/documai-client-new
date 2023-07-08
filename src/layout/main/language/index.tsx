import CustomSelect from "src/components/common/select";
import { isMobile } from "src/static/const";
import { languageOptions } from "./const";

function Language() {
  return (
    <div className="language">
      <CustomSelect
        style={{ width: 74 }}
        defaultValue="en"
        size={isMobile ? "middle" : "large"}
        options={languageOptions}
      />
    </div>
  );
}

export default Language;
