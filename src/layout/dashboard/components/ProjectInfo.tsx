import { message } from "antd";
import { ClipboardSvg } from "src/assets/svg";
import { copyClipboard } from "src/utils";
import { ProjectInfoProps } from "../type";
import EditProject from "./EditProject";
import DeleteProject from "./DeleteProject";
import CustomModal from "src/components/common/modal";
import { useTranslation } from "react-i18next";

function ProjectInfo({ projectInfo, infoVisible, setInfoVisible }: ProjectInfoProps) {
  const closeModal = () => {
    setInfoVisible(false);
  };
  const handleCopy = (val: string, name: string) => {
    copyClipboard(val);
    message.success(`${name} saved clipboard successfully!`);
  };

  const {t} = useTranslation();

  return (
    <CustomModal open={infoVisible} onCancel={closeModal}>
      {projectInfo && (
        <div className="custom-modal">
          <div className="custom-modal-header projectinfo-header" style={{ borderBottom: "none" }}>
            <h2>{projectInfo.displayName}</h2>
            <div>
              <EditProject projectInfo={projectInfo} setInfoVisible={setInfoVisible} />
              <DeleteProject projectId={projectInfo.id} closeModal={closeModal} />
            </div>
          </div>
          <div className="custom-modal-content projectinfo">
            {/* Bot username */}
            <div className="projectinfo-informs">
              <h3>{t("dashboard.name")}</h3>
              <div>
                <p>{projectInfo.botUserName}</p>
                <ClipboardSvg onClick={() => handleCopy(projectInfo.botUserName, "Bot username")} />
              </div>
            </div>

            {/* Bot token */}
            <div className="projectinfo-informs">
              <h3>{t("dashboard.name4")}</h3>
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
