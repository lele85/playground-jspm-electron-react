import events from "events";
import { AppDispatcher } from "../dispatcher/AppDispatcher";

const CHANGE_EVENT = "change";

const EventEmitter = events.EventEmitter;
var _files = [{
  name: "dir",
  directory: true
}, {
  name: "file",
  directory: false
}];
const AppStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return _files;
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
	console.log(action)
	switch(action.actionType) {
		case "CHANGE_DIRECTORY_SUCCESS":
			_files = [];
			AppStore.emitChange();
			break;
		default:
			//noop
	}
});

export { AppStore };