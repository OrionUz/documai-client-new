import { Form } from "antd";
import { useEffect, useState } from "react";
import { useAddProjectMutation } from "src/app/services/projects";
import { IAddProjec } from "src/app/services/projects/type";
import { useTypedSelector } from "src/app/store";
import { PlaySvg } from "src/assets/svg";
import { addProjectFormItems } from "../const";
import CustomButton from "src/components/common/button";
import CustomInput from "src/components/common/input";
import CustomModal from "src/components/common/modal";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function AddProject() {
  const [form] = Form.useForm();
  const [addProject] = useAddProjectMutation();
  const projects = useTypedSelector((state) => state.project.projects);

  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();
  const openModal = () => setVisible(true);
  const closeModal = () => {
    setVisible(false);
    form.resetFields();
  };

  useEffect(() => {
    if (projects && projects.length === 0) openModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  return (
    <>
      <CustomButton className="add-bot" color="dark" bordered onClick={openModal}>
        {t("dashboard.create")}
      </CustomButton>
      <CustomModal
        open={visible}
        width={650}
        onCancel={() => (projects && projects.length !== 0 ? closeModal() : null)}
      >
        <div className="custom-modal">
          <div className="custom-modal-header">
            <h2>{t("dashboard.create1")}</h2>
            <p>{t("dashboard.text")}</p>
          </div>
          <div className="custom-modal-content">
            <Form
              form={form}
              name="add_project"
              layout="vertical"
              onFinish={(data: IAddProjec) => addProject(data).then(() => closeModal())}
            >
              <div className="custom-modal-form-project">
                {addProjectFormItems.map((item) => {
                  return (
                    <Form.Item
                      key={t(item.name)}
                      label={t(item.label)}
                      name={t(item.name)}
                      rules={[{ required: true, message: t(item.message) }]}
                    >
                      <CustomInput size="large" placeholder={t(item.message)} />
                    </Form.Item>
                  );
                })}
              </div>

              <div className="custom-modal-buttons">
                <CustomButton icon={<PlaySvg />} left_icon>
                  {t("dashboard.guide")}
                </CustomButton>
                <CustomButton color="light" bordered type="submit">
                  {t("dashboard.next")}
                </CustomButton>
              </div>
            </Form>
          </div>
        </div>
      </CustomModal>
    </>
  );
}

export default AddProject;
