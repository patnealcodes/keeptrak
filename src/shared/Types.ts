import Actions from './Actions';

// State
export enum ITrackedItemType {
  TEXT = 'text',
  URL = 'url',
  YOUTUBE = 'youtube',
  CODE = 'code'
}

export interface ITrackedItem {
  name: string;
  type: ITrackedItemType;
  category: string;
  project: string;
}

export interface IState {
  trackedItems: Array<ITrackedItem>;
  tags: Array<string>;
  projects: string;
}

// Actions
type ActionKeys = keyof typeof Actions;
type ActionValues = typeof Actions[ActionKeys];

export interface IAction {
  payload: any,
  type: ActionValues
}