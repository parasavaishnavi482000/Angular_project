import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExceptionHandlingComponent } from './exception-handling/exception-handling.component';


@NgModule({
  declarations: [
    AppComponent,
    ExceptionHandlingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]) // Configure routes here if needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
