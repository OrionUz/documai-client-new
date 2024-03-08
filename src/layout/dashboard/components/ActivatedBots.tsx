import { MoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTypedSelector } from "src/app/store";
import { IProject } from "src/app/services/projects/type";
import ProjectInfo from "./ProjectInfo";
import { ActivatedBotsProps } from "../type";

function ActivatedBots({ onChangeMenu }: ActivatedBotsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");
  const activeProject = projectId ? +projectId : 1;
  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const projects = useTypedSelector((state) => state.project.projects);

  const handleChangeMenu = (id: number) => {
    handleMakeParams("projectId", String(id));
    handleMakeParams("userId", "");
    if (onChangeMenu) onChangeMenu?.();
  };

  const openProjectInfo = (id: number) => {
    const obj = projects?.find((el) => el.id === id);
    if (obj) {
      setProjectInfo(obj);
      setInfoVisible(true);
    }
  };

  //See project detail
  const [projectInfo, setProjectInfo] = useState<IProject | undefined>();
  const [infoVisible, setInfoVisible] = useState(false);
  return (
    <div className="dashboard-sidebar-menu">
      {projects?.map((item) => {
        return (
          <div
            onClick={() => handleChangeMenu(item.id)}
            className={`dashboard-sidebar-bot ${activeProject === item.id && "dashboard-sidebar-bot-active"}`}
            key={item.id}
          >
            {item.displayName || `Bot-${item.id}`}{" "}
            {activeProject === item.id && <MoreOutlined onClick={() => openProjectInfo(item.id)} />}
          </div>
        );
      })}
      <ProjectInfo projectInfo={projectInfo} infoVisible={infoVisible} setInfoVisible={setInfoVisible} />
    </div>
  );
}

export default ActivatedBots;
