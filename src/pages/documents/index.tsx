import { Form, UploadProps } from "antd";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTrainProjectMutation } from "src/app/services/projects";
import { IDocument } from "src/app/services/projects/type";
import { useTypedSelector } from "src/app/store";
import { PlaySvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";
import CustomModal from "src/components/common/modal";
import CustomUpload from "src/components/common/upload";
import DocumCard from "./components/DocumCard";
import CustomSwitch from "src/components/common/switch";

function DocumentsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [switched, setSwitched] = useState(false);
  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const projectId = searchParams.get("projectId");

  const projects = useTypedSelector((state) => state.project.projects);

  const [documents, setDocuments] = useState<IDocument[]>();

  useEffect(() => {
    if (projects.length) {
      if (projectId) {
        let obj = projects.find((el) => el.id === +projectId);
        if (obj) setDocuments(obj.documents);
      } else {
        handleMakeParams("projectId", String(projects[0].id));
      }
    } else setDocuments([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId, projects]);

  //Upload new documents
  const [visible, setVisible] = useState(false);
  const openDocumentModal = () => {
    setVisible(true);
    setNewFileList([]);
  };
  const closeDocumentModal = () => setVisible(false);

  const [newFileList, setNewFileList] = useState<UploadProps["fileList"]>();

  const [trainProject, { isSuccess, isLoading }] = useTrainProjectMutation();
  const handleUpload = () => {
    if (projectId) {
      const formData = new FormData();
      newFileList?.forEach((item) => {
        item.originFileObj && formData.append("files", item.originFileObj);
      });
      formData.append("skipTranslation", String(!switched));
      trainProject({ id: +projectId, formData: formData });
    }
  };

  useEffect(() => {
    isSuccess && closeDocumentModal();
  }, [isSuccess]);

  return (
    <div className="documents">
      <div className="documents-content">
        {documents &&
          documents.map((item) => {
            return <DocumCard data={item} key={item.id} />;
          })}
      </div>
      <div className="documents-footer">
        <div className="documents-footer-left">{/* <CustomPagination total={50} /> */}</div>
        <div className="documents-footer-right">
          <Link to={`train?projectId=${projectId}`}>
            <CustomButton color="dark" bordered>
              Try this data
            </CustomButton>
          </Link>
          <CustomButton color="light" onClick={openDocumentModal}>
            Add new documents
          </CustomButton>
        </div>
      </div>

      <CustomModal open={visible} width={800} onCancel={closeDocumentModal}>
        <div className="documents-add">
          <div className="documents-add-header">
            <p>Please upload your documents</p>

            <CustomButton icon={<PlaySvg />} left_icon>
              View instruction
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
                  label="Use translation"
                  tooltip="Use this for non-English documents to translate and train to obtain the best results"
                >
                  <CustomSwitch checked={switched} onChange={() => setSwitched(!switched)} />
                </Form.Item>
              </div>
              <CustomButton color="light" onClick={handleUpload} loading={isLoading}>
                Upload
              </CustomButton>
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
