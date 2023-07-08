import { IProject, IProjectUser } from "src/app/services/projects/type";

export interface UserCardProps {
  data: IProjectUser;
  active?: boolean;
  onClick?: () => void;
}

export interface ProjectInfoProps {
  projectInfo?: IProject;
  infoVisible: boolean;
  setInfoVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DeleteProjectProps {
  projectId: number;
  closeModal: () => void;
}

export interface EditProjectProps {
  projectInfo: IProject;
  setInfoVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ActivatedBotsProps {
  onChangeMenu?: () => void;
}

export interface ProjectUserProps {
  onChangeUser?: () => void;
}
