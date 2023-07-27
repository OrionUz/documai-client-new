import { type } from "os";

//Project types
export interface IProjectRes {
  message: string;
  projects: IProject[];
}
export interface IProject {
  id: number;
  type: ProjectTypeAttribute;
  botToken: string;
  botUserName: string;
  displayName: string;
  organizationId: number;
  chatbotId: number;
  defaultLanguage: string;
  trained: boolean;
  documents?: IDocument[];
  createdAt: string;
  updatedAt?: string;
}

export interface IDocument {
  id: number;
  name: string;
  projectId: number;
  createdAt: string;
  updatedAt: string;
  type: DocumentTypeAttribute;
  size: string;
}

type DocumentTypeAttribute = "url" | "file";
type ProjectTypeAttribute = "private" | "public";

//Add project types
export interface IAddProjectRes {
  message: string;
}
export interface IResponseChatBot {}
export interface IAddProjec {
  orgId: number;
  username: string;
  botToken: string;
  displayName: string;
}

//Edit project types
export interface IEditProject {
  botId: number;
  name: string;
}

//Train project types
export interface ITrainProject {
  id: number;
  formData: any;
}

//Project user types
export interface IProjectUserRes {
  botUsers: IProjectUser[];
}

export interface IProjectUser {
  id: number;
  socialId: number;
  fullName?: string;
  username?: string;
  phoneNumber?: string;
  language?: string;
  botId: number;
  createdAt: string;
  updatedAt?: string;
}

export interface IProjectUserMessagesRes {
  chats: IProjectUserMessage[];
}

export interface IProjectUserMessage {
  id: number;
  question: string;
  response: string;
  questionTranslated?: string;
  responseTranslated?: string;
  sourceLanguage: string;
  botId: number;
  botUserId: number;
  createdAt: string;
  updatedAt?: string;
}


