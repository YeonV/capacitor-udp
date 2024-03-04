import { registerPlugin } from '@capacitor/core';
const UDP = registerPlugin('UDP', {
    web: () => import('./web').then(m => new m.UDPWeb()),
    // electron: () => import('./electron').then(m => new m.UDPElectron()),
    electron: () => window.CapacitorCustomPlatform.plugins.UDP
    // electron: () => new UDPElectron()
});
export * from './definitions';
export { UDP };
//# sourceMappingURL=index.js.map