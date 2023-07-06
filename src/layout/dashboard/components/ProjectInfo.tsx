import { message } from "antd";
import { ClipboardSvg, Delete2Svg, EditSvg } from "src/assets/svg";
import { copyClipboard } from "src/utils";
import { ProjectInfoProps } from "../type";
import CustomModal from "src/components/common/modal";
import CustomPopconfirm from "src/components/common/popconfirm";
import { useDeleteProjectMutation } from "src/app/services/projects";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProjectInfo({ projectInfo, setProjectInfo }: ProjectInfoProps) {
  const closeModal = () => {
    setProjectInfo(undefined);
  };
  const handleCopy = (val: string, name: string) => {
    copyClipboard(val);
    message.success(`${name} saved clipboard successfully!`);
  };

  //Delelte project
  const navigate = useNavigate();
  const [deleteProject, { isSuccess }] = useDeleteProjectMutation();

  const handleDelete = async () => {
    if (projectInfo) {
      deleteProject(projectInfo.id);
      navigate("/dashboard");
      closeModal();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Project deleted successfully!");
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <CustomModal open={projectInfo !== undefined} onCancel={closeModal}>
      {projectInfo && (
        <div className="custom-modal">
          <div className="custom-modal-header projectinfo-header" style={{ borderBottom: "none" }}>
            <h2>{projectInfo.displayName}</h2>
            <div>
              <EditSvg />
              <CustomPopconfirm
                title="Are you sure to delete this project?"
                placement="rightBottom"
                okText="Yes"
                cancelText="No"
                onConfirm={handleDelete}
              >
                <Delete2Svg />
              </CustomPopconfirm>
            </div>
          </div>
          <div className="custom-modal-content projectinfo">
            <div className="projectinfo-informs">
              <h3>Bot username:</h3>
              <div>
                <p>{projectInfo.botUserName}</p>
                <ClipboardSvg onClick={() => handleCopy(projectInfo.botUserName, "Bot username")} />
              </div>
            </div>
            <div className="projectinfo-informs">
              <h3>Bot tokken:</h3>
              <div>
                <p>{projectInfo?.botToken}</p>
                <ClipboardSvg onClick={() => handleCopy(projectInfo.botToken, "Bot tokken")} />
              </div>
            </div>
          </div>
        </div>
      )}
    </CustomModal>
  );
}

export default ProjectInfo;
