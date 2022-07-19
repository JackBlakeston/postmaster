export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostsState {
  posts: IPost[];
  status: FetchStatus;
  error: TError;
}

export interface IUser {
  userId: number;
  username: string;
  password: string;
}

export interface IFilters {
  search: string;
  users: number[];
  sortType: SortType;
  sortOrder: SortOrder;
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

export enum SortType {
  USER = 'user',
  TITLE = 'title',
}

export enum SortOrder {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export type TError = string | undefined;