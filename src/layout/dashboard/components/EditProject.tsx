import { Form } from "antd";
import { useEffect, useState } from "react";
import { useEditProjectMutation } from "src/app/services/projects";
import { IEditProject } from "src/app/services/projects/type";
import { EditSvg } from "src/assets/svg";
import { EditProjectProps } from "../type";
import { addProjectFormItems } from "../const";
import CustomButton from "src/components/common/button";
import CustomInput from "src/components/common/input";
import CustomModal from "src/components/common/modal";
import { useTranslation } from "react-i18next";
import CustomTextArea from "src/components/common/input/Textarea";

function EditProject({ projectInfo, setInfoVisible }: EditProjectProps) {
  const [editProject] = useEditProjectMutation();

  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);
  const handleOpen = () => {
    setVisible(true);
    setInfoVisible(false);
  };
  const handleClose = () => {
    setVisible(false);
    setInfoVisible(true);
  };

  const handleSubmit = (data: IEditProject) => {
    data.botId = projectInfo.chatbotId;
    editProject(data).then(() => {
      setVisible(false);
    });
  };

  const {t} = useTranslation();

  useEffect(() => {
    form.setFieldsValue({ name: projectInfo.displayName, prompt: projectInfo.prompt });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <EditSvg onClick={handleOpen} />
      <CustomModal open={visible} width={500} onCancel={handleClose}>
        <div className="custom-modal">
          <div className="custom-modal-header">
            <h2>{t("dashboard.edit")}</h2>
          </div>
          <div className="custom-modal-content">
            <Form form={form} name="add_project" layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Chatbot name"
                name="name"
                rules={[{ required: true, message: addProjectFormItems[2].message }]}
              >
                <CustomInput size="large" placeholder={addProjectFormItems[2].message} />
              </Form.Item>
              <Form.Item
                label="Chatbot prompt"
                name="prompt"
                rules={[{ required: false }]}
              >
                <CustomTextArea size="large" value={""} autoSize={{ minRows: 3, maxRows: 8}}/>
                {/* <CustomInput size="large" placeholder={addProjectFormItems[2].message} /> */}
              </Form.Item>

              <div className="custom-modal-buttons">
                <CustomButton color="light" bordered type="submit">
                  {t("dashboard.save")}
                </CustomButton>
              </div>
            </Form>
          </div>
        </div>
      </CustomModal>
    </>
  );
}

export default EditProject;
