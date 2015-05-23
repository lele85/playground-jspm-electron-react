import events from "events";
const EventEmitter = events.EventEmitter;
const _files = [];
const AppStore = Object.assign({}, EventEmitter.prototype,{
	getAll() { return _files;}
});

export { AppStore };