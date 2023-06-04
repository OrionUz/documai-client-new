import React from "react";
import DocumCard from "./components/DocumCard";
import CustomButton from "src/components/common/button";

function DocumentsPage() {
  return (
    <div className="documents">
      <div className="documents-header">Mytaxi bot</div>
      <div className="documents-content">
        {[1, 2, 3, 4, 5].map((item) => {
          return <DocumCard />;
        })}
      </div>
      <div className="documents-footer">
        <div className="documents-footer-left"></div>
        <div className="documents-footer-right">
          <CustomButton color="dark">Try this data</CustomButton>
          <CustomButton color="light">Add new document</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default DocumentsPage;
