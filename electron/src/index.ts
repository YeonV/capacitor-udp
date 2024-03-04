// import { registerPlugin } from '@capacitor/core'
import { EventEmitter } from 'events';

import type { UDPPlugin } from '../../src/definitions'

// const UDP = registerPlugin<UDPPlugin>('UDP', {
//     // web: () => import('./web').then(m => new m.DialogWeb()),
//     electron: () => (window as any).CapacitorCustomPlatform.plugins.UDPElectron
//   });
export class UDP extends EventEmitter implements UDPPlugin {
    constructor() {
        super();       
    }
    send(options: { socketId: number; address: string; port: number; buffer: string; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
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
        throw new Error('Method not implemented YZ.');
    }
    closeAllSockets(): Promise<any> {
        throw new Error('Method not implemented YZ.');
    }
    close(options: { socketId: number; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
    }
    bind(options: { socketId: number; address: string; port: number; }): Promise<any> {
        console.log(options)
        throw new Error('Method not implemented YZ.');
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
