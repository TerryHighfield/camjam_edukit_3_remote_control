/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Window {
  isCordovaApp: boolean;
  isMapLoaded: boolean;
}
