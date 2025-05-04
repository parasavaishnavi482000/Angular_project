import { Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { RouteComponent } from './route/route.component';
import { ExceptionHandlingComponent } from './exception-handling/exception-handling.component';
import { CurdOpeartionComponent } from './curd-operation/curd-operation.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { AuthGuard } from './auth.guard'; 
import { StateManagementComponent } from './state-management/state-management.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ToasterComponent } from './toaster/toaster.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },

    { path: 'directive', component: DirectivesComponent, canActivate: [AuthGuard] },
    { path: 'life-cycle', component: LifeCycleComponent, canActivate: [AuthGuard] },
    { path: 'custom-directives', component: CustomDirectivesComponent, canActivate: [AuthGuard] },
    { path: 'data-binding', component: DataBindingComponent, canActivate: [AuthGuard] },
    { path: 'parent', component: ParentComponent, canActivate: [AuthGuard] },
    { path: 'route/:msg', component: RouteComponent, canActivate: [AuthGuard] },
    { path: 'exception-handling', component: ExceptionHandlingComponent, canActivate: [AuthGuard] },
    { path: 'curd-operation', component: CurdOpeartionComponent, canActivate: [AuthGuard] },
    { path: 'rxjs', component: RxjsComponent, canActivate: [AuthGuard] },
    { path: 'promise-example', component: PromiseExampleComponent, canActivate: [AuthGuard] },
    { path: 'observable-example', component: ObservableExampleComponent, canActivate: [AuthGuard] },
    { path: 'promise-example', component: PromiseExampleComponent, canActivate: [AuthGuard] },
    { path: 'state-management', component: StateManagementComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'bar-chart', component: BarChartComponent, canActivate: [AuthGuard] },
    { path: 'pie-chart', component: PieChartComponent, canActivate: [AuthGuard] },
    { path: 'tree-view', component: TreeViewComponent, canActivate: [AuthGuard] }, 
    { path: 'toaster', component: ToasterComponent, canActivate: [AuthGuard] }, 
    
       { path: 'task-manager', component: TaskManagerComponent, canActivate: [AuthGuard] },
    { path: 'student-marks', component: StudentMarksComponent, canActivate: [AuthGuard] },
    { path: 'student-register', component: StudentRegisterComponent, canActivate: [AuthGuard] },
    // { path: '**', redirectTo: 'login' } ,
    { path: '**', redirectTo: 'student-marks' } ,
   
   
];
