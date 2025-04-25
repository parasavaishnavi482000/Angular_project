import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-directives',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  // title = 'Project-Demo';
  showMessage: boolean = true; //ngif
 users: string[] = ['ngFor', 'ngFor1'];//ngfor
 isHighlighted: boolean = true;//ngclass
 isHighlighte: boolean = true;// ngstyle
 currentDay: string = 'Friday';//ngswitch
 showDirectives: boolean = false;//button
 
}


