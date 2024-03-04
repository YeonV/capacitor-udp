import { registerPlugin } from '@capacitor/core';

import type { UDPPlugin } from './definitions';

const UDP = registerPlugin<UDPPlugin>('UDP', {
  web: () => import('./web').then(m => new m.UDPWeb()),
  electron: () => (window as any).CapacitorCustomPlatform.plugins.UDPElectron
});

export * from './definitions';
export { UDP };
