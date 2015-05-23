import { AppDispatcher } from '../dispatcher/AppDispatcher';

var AppActions = {
  changeDirectorySuccess() {
    AppDispatcher.dispatch({
      actionType: "CHANGE_DIRECTORY_SUCCESS"
    });
  }
};

export { AppActions };