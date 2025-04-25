import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component'; 

@Component({
  selector: 'app-parent',
  standalone: true, 
  imports: [ChildComponent], 
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = "Hey from Parent!";
  childResponse = '';

  receiveFromChild(data: string) {
    this.childResponse = data;
  }
}
