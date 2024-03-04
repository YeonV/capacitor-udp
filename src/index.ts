import { registerPlugin } from '@capacitor/core';

// import { UDPElectron } from '../electron/src/index';

import type { UDPPlugin } from './definitions';


const UDP = registerPlugin<UDPPlugin>('UDP', {
  web: () => import('./web').then(m => new m.UDPWeb()),
  // electron: () => import('./electron').then(m => new m.UDPElectron()),
  electron: () => (window as any).CapacitorCustomPlatform.plugins.UDP
  // electron: () => new UDPElectron()
});

export * from './definitions';
export { UDP };
