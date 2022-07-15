export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export enum IconName {
  DELETE = 'delete',
  EDIT = 'edit',
  NEW = 'newPost'
}

export enum FetchStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

export type TError = string | undefined;