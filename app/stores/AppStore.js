import events from "events";
import {AppDispatcher} from "../dispatcher/AppDispatcher";

const EventEmitter = events.EventEmitter;
const _files = [{name:"dir",directory:true},{name:"file",directory:false}];
const AppStore = Object.assign({}, EventEmitter.prototype,{
	getAll() { return _files;}
});

export { AppStore };