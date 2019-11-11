import { IState, IAction } from './Types';
import Actions from './Actions';

export const infoReducer = (state: IState, { type, payload }: IAction) => {
  switch (type) {
    case Actions.ADD_PROJECT:
      console.log('ADD_PROJECT dispatched.');
      console.log('payload: ', payload);
      return { ...state };
    case Actions.UPDATE_PROJECT:
      console.log('UPDATE_PROJECT dispatched.');
      console.log('payload: ', payload);
      return { ...state };
    case Actions.DELETE_PROJECT:
      console.log('DELETE_PROJECT dispatched.');
      console.log('payload: ', payload);
      return { ...state };
    case Actions.ADD_TAG:
      console.log('ADD_TAG dispatched.');
      console.log('payload: ', payload);
      return { ...state };
    case Actions.UPDATE_TAG:
      console.log('UPDATE_TAG dispatched.');
      console.log('payload: ', payload);
      return { ...state };
    case Actions.DELETE_TAG:
      console.log('DELETE_TAG dispatched.');
      console.log('payload: ', payload);
      return { ...state };
    case Actions.ADD_TASK_ITEM:
      console.log('ADD_TASK_ITEM dispatched.');
      console.log('payload: ', payload);
      return { ...state };
    case Actions.UPDATE_TASK_ITEM:
      console.log('UPDATE_TASK_ITEM dispatched.');
      console.log('payload: ', payload);
      return { ...state };
    case Actions.DELETE_TASK_ITEM:
      console.log('DELETE_TASK_ITEM dispatched.');
      console.log('payload: ', payload);
      return { ...state };

    default:
      break;
  }
}