//Chat types
export interface IChatRes {
  messages: IMessage[];
}

export interface IMessage {
  id: number;
  projectId?: number;
  question?: string;
  response?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

//Send chat query types
export interface IChatQueryRes {
  message: string;
}

export interface IChatQuery {
  question: string;
  projectId: string;
}
