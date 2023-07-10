import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLazyGetProjetUsersQuery } from "src/app/services/projects";
import { useTypedSelector } from "src/app/store";
import { IProjectUser } from "src/app/services/projects/type";
import UserCard from "./UserCard";
import { ProjectUserProps } from "../type";
import { useTranslation } from "react-i18next";

function ProjectUsers({ onChangeUser }: ProjectUserProps) {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const projectId = searchParams.get("projectId");

  const projects = useTypedSelector((state) => state.project.projects);
  const botId = projects?.find((el) => String(el.id) === projectId)?.chatbotId;

  const [trigger, { data }] = useLazyGetProjetUsersQuery();

  const {t} = useTranslation();

  useEffect(() => {
    botId && trigger(botId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botId, projectId]);

  const [users, setUsers] = useState<IProjectUser[]>([]);
  useEffect(() => {
    if (data && botId) setUsers(data.botUsers);
    else setUsers([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId, data]);

  return (
    <div className="dashboard-users">
      <div className="dashboard-users-header">
        <h2>{users.length} {t("dashboard.user")}</h2>
      </div>
      <div className="dashboard-users-content">
        {users.map((item) => {
          return (
            <UserCard
              key={item.id}
              data={item}
              active={userId && +userId === item.id ? true : false}
              onClick={onChangeUser}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectUsers;
