import { Form, UploadProps } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useTrainProjectMutation } from "src/app/services/projects";
import { PlaySvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";
import CustomModal from "src/components/common/modal";
import CustomSwitch from "src/components/common/switch";
import CustomUpload from "src/components/common/upload";

function AddDocuments() {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  //Upload new documents
  const [visible, setVisible] = useState(false);
  const [switched, setSwitched] = useState(false);

  const openDocumentModal = () => {
    setVisible(true);
    setNewFileList([]);
  };
  const closeDocumentModal = () => setVisible(false);

  const [newFileList, setNewFileList] = useState<UploadProps["fileList"]>();

  const [trainProject, { isLoading }] = useTrainProjectMutation();
  const {t} = useTranslation();
  const handleUpload = () => {
    if (projectId) {
      const formData = new FormData();
      newFileList?.forEach((item) => {
        item.originFileObj && formData.append("files", item.originFileObj);
      });
      formData.append("skipTranslation", String(!switched));
      trainProject({ id: +projectId, formData: formData }).then(() => {
        closeDocumentModal();
      });
    }
  };
  return (
    <>
      <CustomButton color="light" onClick={openDocumentModal}>
        {t("dashboard.addDoc")}
      </CustomButton>
      <CustomModal open={visible} width={800} onCancel={closeDocumentModal}>
        <div className="documents-add">
          <div className="documents-add-header">
            <p>{t("dashboard.upload")}</p>

            <CustomButton icon={<PlaySvg />} left_icon>
              {t("dashboard.instraction")}
            </CustomButton>
          </div>
          <CustomUpload
            fileList={newFileList}
            maxSize={20}
            disabled={isLoading}
            onChange={(info) => setNewFileList(info.fileList)}
          />
          {newFileList ? (
            <div className="documents-add-footer">
              <div>
                <Form.Item
                  label={t("dashboard.useTranslation")}
                  tooltip={t("dashboard.hovertranslation")}
                >
                  <CustomSwitch
                    checked={switched}
                    onChange={() => setSwitched(!switched)}
                  />
                </Form.Item>
              </div>
              <CustomButton
                color="light"
                onClick={handleUpload}
                loading={isLoading}
              >
                {t("dashboard.uploadBtn")}
              </CustomButton>
            </div>
          ) : (
            ""
          )}
        </div>
      </CustomModal>
    </>
  );
}

export default AddDocuments;
