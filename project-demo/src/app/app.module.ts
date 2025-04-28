import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExceptionHandlingComponent } from './exception-handling/exception-handling.component';

// (Add other component imports here like LifeCycleComponent, DataBindingComponent, etc.)

import { AuthGuard } from './auth.guard'; // Import AuthGuard

@NgModule({
  declarations: [
    AppComponent,
    ExceptionHandlingComponent,
    // (Add all other components here like LifeCycleComponent, DirectiveComponent, etc.)
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'exception-handling', component: ExceptionHandlingComponent, canActivate: [AuthGuard] },
      // (Add other routes like life-cycle, directive, custom-directive etc. with canActivate)
      { path: '**', redirectTo: '/exception-handling' } // fallback route
    ])
  ],
  providers: [AuthGuard], // provide AuthGuard here!
  bootstrap: [AppComponent]
})
export class AppModule { }
