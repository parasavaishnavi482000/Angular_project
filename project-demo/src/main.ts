import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), 
    importProvidersFrom(HttpClientModule)
    ,
    provideStore()
]
}).catch((err) => console.error(err));
