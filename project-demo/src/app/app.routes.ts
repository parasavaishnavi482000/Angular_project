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

import { AuthGuard } from './auth.guard'; // Import AuthGuard
import { StateManagementComponent } from './state-management/state-management.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // first load login
    { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },

    // Protected Routes (only after login, user can access)
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

    { path: '**', redirectTo: 'login' } ,
    
];
