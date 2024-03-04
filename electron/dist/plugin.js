'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.UDP = void 0;
const dgram_as_promised_1 = require("dgram-as-promised");
const events_1 = require("events");
let socket;
const PORT = 21324;
let message;
class UDP extends events_1.EventEmitter {
    async send(options) {
        message = Buffer.from(atob(options.buffer), 'utf8');
        try {
            await (socket === null || socket === void 0 ? void 0 : socket.send(message, 0, message.length, options.port || PORT, options.address));
        }
        catch (error) {
            console.error(error);
        }
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
        socket = dgram_as_promised_1.DgramAsPromised.createSocket('udp4');
        return Promise.resolve({ socketId: 0, ipv4: '0.0.0.0', ipv6: '::' });
    }
    closeAllSockets() {
        throw new Error('Method not implemented YZ.');
    }
    async close(options) {
        console.log(options);
        try {
            await (socket === null || socket === void 0 ? void 0 : socket.close());
        }
        catch (error) {
            console.error(error);
        }
    }
    async bind(options) {
        console.log(options);
        try {
            await (socket === null || socket === void 0 ? void 0 : socket.bind(options.port || PORT, options.address));
        }
        catch (error) {
            console.error(error);
        }
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
