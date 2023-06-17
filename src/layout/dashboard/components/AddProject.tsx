import { Form } from "antd";
import { useEffect, useState } from "react";
import { useAddProjectMutation } from "src/app/services/projects";
import { IAddProjec } from "src/app/services/projects/type";
import { PlaySvg } from "src/assets/svg";
import { addProjectFormItems } from "../const";
import CustomButton from "src/components/common/button";
import CustomInput from "src/components/common/input";
import CustomModal from "src/components/common/modal";

function AddProject() {
  const [addProject, { isSuccess }] = useAddProjectMutation();

  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => {
    setVisible(false);
    form.resetFields();
  };

  useEffect(() => {
    isSuccess && closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <>
      <CustomButton color="dark" bordered onClick={openModal}>
        Create new bot
      </CustomButton>
      <CustomModal open={visible} width={650} onCancel={closeModal}>
        <div className="custom-modal">
          <div className="custom-modal-header">
            <h2>Create your chat bot</h2>
            <p>We automatically bill on the 1st of each month.</p>
          </div>
          <div className="custom-modal-content">
            <Form
              form={form}
              name="add_project"
              layout="vertical"
              onFinish={(data: IAddProjec) => addProject(data)}
            >
              <div className="custom-modal-form-project">
                {addProjectFormItems.map((item) => {
                  return (
                    <Form.Item
                      key={item.name}
                      label={item.label}
                      name={item.name}
                      rules={[{ required: true, message: item.message }]}
                    >
                      <CustomInput size="large" placeholder={item.message} />
                    </Form.Item>
                  );
                })}
              </div>

              <div className="custom-modal-buttons">
                <CustomButton icon={<PlaySvg />} left_icon>
                  Video guide
                </CustomButton>
                <CustomButton color="light" bordered type="submit">
                  Next
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
