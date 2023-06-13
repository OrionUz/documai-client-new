import CustomButton from "src/components/common/button";
import CustomPagination from "src/components/common/pagination";
import QualityCard from "./components/QualityCard";

function QualityPage() {
  return (
    <div className="documents">
      <div className="documents-content">
        {[1, 2, 3, 4, 5].map((item) => {
          return <QualityCard />;
        })}
      </div>
      <div className="documents-footer">
        <div className="documents-footer-left">
          <CustomPagination total={50} />
        </div>
        <div className="documents-footer-right">
          <CustomButton color="dark">Try this data</CustomButton>
          <CustomButton color="light">Add new document</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default QualityPage;
