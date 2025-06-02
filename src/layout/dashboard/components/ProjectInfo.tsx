import { message } from "antd";
import { ClipboardSvg } from "src/assets/svg";
import { copyClipboard, encodeProjectId } from "src/utils";
import { ProjectInfoProps } from "../type";
import EditProject from "./EditProject";
import DeleteProject from "./DeleteProject";
import CustomModal from "src/components/common/modal";
import { useTranslation } from "react-i18next";
import ReactMarkdown from 'react-markdown';

function ProjectInfo({ projectInfo, infoVisible, setInfoVisible }: ProjectInfoProps) {
  const {t} = useTranslation();
  const closeModal = () => {
    setInfoVisible(false);
  };
  const handleCopy = (val: string, name: string) => {
    copyClipboard(val);
    message.success(`${name} saved clipboard successfully!`);
  };

  const getScriptCode = () => {
    if (!projectInfo) return "";
    const content = `
    <script
      src="https://shokhrukhmirzo.uz/widget/chat.js"
      data-name="docum-ai-chatbot"
      data-address="https://shokhrukhmirzo.uz/embed/chat"
      data-id="${encodeProjectId(projectInfo?.id)}"
      data-ignore-paths=""
      defer
    ></script>
    `
    return content
  }
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
              <h3>{t("dashboard.name4")}</h3>
              <div>
                <p>{projectInfo.botUserName}</p>
                <ClipboardSvg onClick={() => handleCopy(projectInfo.botUserName, "Bot username")} />
              </div>
            </div>

            {/* Bot token */}
            <div className="projectinfo-informs">
              <h3>{t("dashboard.name2")}</h3>
              <div>
                <p>{projectInfo?.botToken?.slice(0,5) + " * * * * * " + projectInfo?.botToken?.slice(projectInfo?.botToken?.length - 20)}</p>
                <ClipboardSvg onClick={() => handleCopy(projectInfo.botToken, "Bot tokken")} />
              </div>
            </div>

            {/* Bot token */}
            {projectInfo?.id && <div className="projectinfo-informs" style={{ marginTop: 30}}>
              <h3>{t("dashboard.scriptCodeLabel")}</h3>
              <div style={{ background: 'black', padding: '14px 14px', borderRadius: 6}}>
              <ReactMarkdown>{getScriptCode()}</ReactMarkdown>
              <ClipboardSvg onClick={() => handleCopy(getScriptCode(), "Script code")} />
              </div>
            </div>}
          </div>
        </div>
      )}
    </CustomModal>
  );
}

export default ProjectInfo;
