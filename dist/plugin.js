var capacitorUDP = (function (exports, core) {
    'use strict';

    const UDP = core.registerPlugin('UDP', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.UDPWeb()),
        // electron: () => import('./electron').then(m => new m.UDPElectron()),
        electron: () => window.CapacitorCustomPlatform.plugins.UDP
        // electron: () => new UDPElectron()
    });

    // TODO lvb, maybe implement a safe mock web plugin for development
    // import type { UDPPlugin } from './definitions';
    // export class UDPWeb extends WebPlugin implements UDPPlugin {
    class UDPWeb extends core.WebPlugin {
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        UDPWeb: UDPWeb
    });

    exports.UDP = UDP;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
