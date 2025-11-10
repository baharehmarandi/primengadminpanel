import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {providePrimeNG} from 'primeng/config';
import {MyAura} from './primeng-theme';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MessageService} from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    providePrimeNG({
    theme: {
      preset: MyAura,
      options: {
        darkModeSelector: false,
        cssVariables: true,
      }
    }
  }),provideAnimations(),
    MessageService]
};
