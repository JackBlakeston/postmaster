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