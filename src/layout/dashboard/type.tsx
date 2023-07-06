import { IProject, IProjectUser } from "src/app/services/projects/type";

export interface UserCardProps {
  data: IProjectUser;
  active?: boolean;
}

export interface ProjectInfoProps {
  projectInfo?: IProject;
  setProjectInfo: React.Dispatch<React.SetStateAction<IProject | undefined>>;
}
