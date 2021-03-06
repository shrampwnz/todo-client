import { Action } from '@ngrx/store';

export interface MainState {
  login: LoginState;
  app: AppState;
}

export interface LoginState {
  isLogged: boolean;
}

export interface AppState {
  title: string;
}

export interface AppAction extends Action {
  payload?: any;
}

export interface TodoListItem {
  id?: string;
  name?: string;
  isComplete?: boolean;
  description?: string;
}

export interface GetNgClass {
  [key: string]: boolean;
}
