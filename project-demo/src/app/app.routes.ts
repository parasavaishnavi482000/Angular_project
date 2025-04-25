import { Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { RouteComponent } from './route/route.component';
import { ExceptionHandlingComponent } from './exception-handling/exception-handling.component';

export const routes: Routes = [

    { path: '', redirectTo: 'directive', pathMatch: 'full' }, 
    {path:'directive',component:DirectivesComponent},
    {path:'life-cycle',component:LifeCycleComponent},
    {path:'custom-directives',component:CustomDirectivesComponent},
    {path:'data-binding',component:DataBindingComponent},
    { path: 'parent', component: ParentComponent },
    { path: 'route/:msg', component: RouteComponent },
    { path: 'exception-handling', component: ExceptionHandlingComponent },
    
];
