import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { fromEvent } from 'rxjs/observable/fromEvent';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(() => {}, (error) => {
    console.log('Failed to boot strap');
    console.log(error);
  });
};

if (window.isCordovaApp) {
  // The app is running as a native app in 'Cordova' mode on a mobile device.
  const deviceReadyEvent = fromEvent(document, 'deviceready');
    deviceReadyEvent.subscribe(bootstrap);
} else {
  // The app is not running in 'cordova' mode. Most likely being displayed in a webpage
  bootstrap();
}
