import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
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
import { ToasterComponent } from './toaster/toaster.component';

import { DataBindingComponent } from './data-binding/data-binding.component';
@NgModule({
  declarations: [TaskManagerComponent,
    AppComponent,
    ExceptionHandlingComponent,
    BarChartComponent,
    ToasterComponent,
   
    DataBindingComponent
    ],
    exports: [TaskManagerComponent],

  imports: [
    
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StudentRegisterComponent,
    StudentMarksComponent,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,    
    ToastrModule.forRoot(),

    RouterModule.forRoot([
      { path: 'exception-handling', component: ExceptionHandlingComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: '/exception-handling' } 
    ])
  ],
  providers: [
    AuthGuard,  // Register AuthGuard if you're using it
  
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptor,  // Register ErrorInterceptor (another example)
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
