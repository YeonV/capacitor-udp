import type { SocketAsPromised } from 'dgram-as-promised';
import { DgramAsPromised } from 'dgram-as-promised'
import { EventEmitter } from 'events';

import type { UDPPlugin } from '../../src/definitions'

let socket: SocketAsPromised
const PORT = 21324
let message: Buffer


export class UDP extends EventEmitter implements UDPPlugin {
    async send(options: { socketId: number; address: string; port: number; buffer: string; }): Promise<any> {
        try {
            await socket?.send(options.buffer, 0, message.length, options.port || PORT, options.address)
        } catch (error) {
            console.error(error)
        }
    }
    setPaused(options: { socketId: number; paused: boolean; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    leaveGroup(options: { socketId: number; address: string; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    joinGroup(options: { socketId: number; address: string; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    getInfo(options: { socketId: number; }): Promise<{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string; localPort?: number; }> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    getSockets(): Promise<{ sockets: [{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string; localPort?: number; }]; }> {
        throw new Error('Method not implemented YZ.');
    }
    getProperties(options: { socketId: number; }): Promise<{ socketId: number; ipv4: string; ipv6: string; }> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    create(options?: { properties?: { name?: string; bufferSize?: number; }; }): Promise<{ socketId: number; ipv4: string; ipv6: string; }> {
        console.log(options)
        socket = DgramAsPromised.createSocket('udp4')
        return Promise.resolve({ socketId: 0, ipv4: '0.0.0.0', ipv6: '::' })
    }
    closeAllSockets(): Promise<any> {
        throw new Error('Method not implemented YZ.');
    }
    async close(options: { socketId: number; }): Promise<any> {
        console.log(options)
        try {
            await socket?.close()
        } catch (error) {
            console.error(error)
        }
    }
    async bind(options: { socketId: number; address: string; port: number; }): Promise<any> {
        console.log(options)
        try {
            await socket?.bind(options.port || PORT, options.address)
        } catch (error) {
            console.error(error)
        }
    }
    update(options: { socketId: number; properties: { name?: string; bufferSize?: number; }; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    setMulticastTimeToLive(options: { socketId: number; ttl: number; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    setMulticastLoopbackMode(options: { socketId: number; enabled: boolean; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    setBroadcast(options: { socketId: number; enabled: boolean; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    getJoinedGroups(): any {
        throw new Error('Method not implemented YZ.');
    }
    remove(): Promise<void> {
        throw new Error('Method not implemented YZ.');
    }
}
