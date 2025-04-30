import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tree-view',
  imports:[FormsModule,CommonModule],
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  treeData = [
    {
      name: 'Angular Basics',
      children: [
        { name: 'Modules' },
        { name: 'Components' },
        { name: 'Templates & Data Binding' },
        { name: 'Directives' }
      ]
    },
    {
      name: 'Advanced Concepts',
      children: [
        { name: 'Lifecycle Hooks' },
        { name: 'Custom Directives' },
        { name: 'Pipes' },
        { name: 'Reactive Forms' },
        { name: 'Template Driven Forms' }
      ]
    },
    {
      name: 'Routing & Navigation',
      children: [
        { name: 'RouterModule' },
        { name: 'Route Guards' },
        { name: 'Lazy Loading' }
      ]
    },
    {
      name: 'Services & Dependency Injection',
      children: [
        { name: 'Injectable Services' },
        { name: 'HTTP Client' },
        { name: 'Interceptors' }
      ]
    },
    {
      name: 'RxJS & State Management',
      children: [
        { name: 'Observables & Subjects' },
        { name: 'BehaviorSubject' },
        { name: 'NgRx (Redux)' }
      ]
    },
    {
      name: 'Deployment & Testing',
      children: [
        { name: 'Unit Testing' },
        { name: 'Integration Testing' },
        { name: 'Build & Deployment' }
      ]
    }
  ];
}
