import { IState, IAction } from './Types';
import Actions from './Actions';

export const infoReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case Actions.ADD_PROJECT:
      break;
    case Actions.UPDATE_PROJECT:
      break;
    case Actions.DELETE_PROJECT:
      break;
    case Actions.ADD_TAG:
      break;
    case Actions.UPDATE_TAG:
      break;
    case Actions.DELETE_TAG:
      break;
    case Actions.ADD_TASK_ITEM:
      break;
    case Actions.UPDATE_TASK_ITEM:
      break;
    case Actions.DELETE_TASK_ITEM:
      break;

    default:
      break;
  }
}