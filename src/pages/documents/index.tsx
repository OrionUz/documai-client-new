import CustomPagination from "src/components/common/pagination";
import DocumCard from "./components/DocumCard";
import CustomButton from "src/components/common/button";
import { useState } from "react";
import CustomModal from "src/components/common/modal";
import { PlaySvg } from "src/assets/svg";
import CustomUpload from "src/components/common/upload";
import type { UploadProps } from "antd";

function DocumentsPage() {
  const [visible, setVisible] = useState(false);
  const openDocumentModal = () => setVisible(true);
  const closeDocumentModal = () => setVisible(false);

  const [newFileList, setNewFileList] = useState<UploadProps["fileList"]>();

  console.log(newFileList);

  return (
    <div className="documents">
      <div className="documents-content">
        {[1, 2, 3, 4, 5].map((item) => {
          return <DocumCard />;
        })}
      </div>
      <div className="documents-footer">
        <div className="documents-footer-left">
          <CustomPagination total={50} />
        </div>
        <div className="documents-footer-right">
          <CustomButton color="dark">Try this data</CustomButton>
          <CustomButton color="light" onClick={openDocumentModal}>
            Add new documents
          </CustomButton>
        </div>
      </div>

      <CustomModal open={visible} width={800} onCancel={closeDocumentModal}>
        <div className="documents-add">
          <div className="documents-add-header">
            <p>Please Upload your Documents!</p>
            <CustomButton icon={<PlaySvg />} left_icon>
              View instruction
            </CustomButton>
          </div>
          <CustomUpload
            maxSize={20}
            onChange={(info) => setNewFileList(info.fileList)}
          />
          {newFileList ? (
            <div className="documents-add-footer">
              <CustomButton color="light">Add documents</CustomButton>
            </div>
          ) : (
            ""
          )}
        </div>
      </CustomModal>
    </div>
  );
}

export default DocumentsPage;
