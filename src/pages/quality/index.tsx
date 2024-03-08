import CustomButton from "src/components/common/button";
import CustomPagination from "src/components/common/pagination";
import QualityCard from "./components/QualityCard";
import { useTranslation } from "react-i18next";

function QualityPage() {

  const {t} = useTranslation();
  return (
    <div className="documents">
      <div className="documents-content">
        {[1, 2, 3, 4, 5].map((item) => {
          return <QualityCard key={item} />;
        })}
      </div>
      <div className="documents-footer">
        <div className="documents-footer-left">
          <CustomPagination total={50} />
        </div>
        <div className="documents-footer-right">
          <CustomButton color="dark">{t("dashboard.tryData")}</CustomButton>
          <CustomButton color="light">{t("dashboard.addDoc")}</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default QualityPage;
