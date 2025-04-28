import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExceptionHandlingComponent } from './exception-handling/exception-handling.component';


import { AuthGuard } from './auth.guard'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExceptionHandlingComponent,
    ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'exception-handling', component: ExceptionHandlingComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: '/exception-handling' } 
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
