'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.UDP = void 0;
// import { registerPlugin } from '@capacitor/core'
const events_1 = require("events");
// const UDP = registerPlugin<UDPPlugin>('UDP', {
//     // web: () => import('./web').then(m => new m.DialogWeb()),
//     electron: () => (window as any).CapacitorCustomPlatform.plugins.UDPElectron
//   });
class UDP extends events_1.EventEmitter {
    constructor() {
        super();
    }
    send(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    setPaused(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    leaveGroup(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    joinGroup(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    getInfo(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    getSockets() {
        throw new Error('Method not implemented YZ.');
    }
    getProperties(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    create(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    closeAllSockets() {
        throw new Error('Method not implemented YZ.');
    }
    close(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    bind(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    update(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    setMulticastTimeToLive(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    setMulticastLoopbackMode(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    setBroadcast(options) {
        console.log(options);
        throw new Error('Method not implemented YZ.');
    }
    getJoinedGroups() {
        throw new Error('Method not implemented YZ.');
    }
    remove() {
        throw new Error('Method not implemented YZ.');
    }
}
exports.UDP = UDP;
//# sourceMappingURL=plugin.js.map
