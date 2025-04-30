import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { AppComponent } from './app.component';
import { ExceptionHandlingComponent } from './exception-handling/exception-handling.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './task-manager/error.interceptor';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
@NgModule({
  declarations: [TaskManagerComponent,
    AppComponent,
    ExceptionHandlingComponent,
    BarChartComponent
    ],
    exports: [TaskManagerComponent],

  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StudentRegisterComponent,
    StudentMarksComponent,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([
      { path: 'exception-handling', component: ExceptionHandlingComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: '/exception-handling' } 
    ])
  ],
  providers: [AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
