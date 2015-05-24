import events from "events";
import { AppDispatcher } from "../dispatcher/AppDispatcher";
import { ActionType } from "../constants/AppConstants";

const CHANGE_EVENT = "change";

const EventEmitter = events.EventEmitter;
var _files = [];
var _loading = true;

const AppStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return _files;
  },
  isLoading() {
    return _loading;
  },
  emitChange() {
  	this.emit(CHANGE_EVENT);
  },
  addChangeListener(cb) {
  	this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb) {
  	this.removeListener(CHANGE_EVENT, cb);
  }
});

AppDispatcher.register(function(action){
	switch(action.actionType) {
		case ActionType.CHANGE_DIRECTORY_SUCCESS:
			_files = action.content;
      _loading = false;
			AppStore.emitChange();
			break;
		default:
			//noop
	}
});

export { AppStore };