import { Component } from '@angular/core';
import { HoverHighlightDirective } from '../hover-highlight.directive';

@Component({
  selector: 'app-custom-directive',
  imports:[HoverHighlightDirective],
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent {}
