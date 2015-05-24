import { AppDispatcher } from '../dispatcher/AppDispatcher';
import { ActionType } from "../constants/AppConstants";

var AppActions = {
  changeDirectorySuccess(content) {
    AppDispatcher.dispatch({
      actionType: ActionType.CHANGE_DIRECTORY_SUCCESS,
      content : content
    });
  },
  changeDirectory(path) {
  	AppDispatcher.dispatch({
  		actionType : ActionType.CHANGE_DIRECTORY,
  		cwd : cwd
  	})
  }
};

export { AppActions };