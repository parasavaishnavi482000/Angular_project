import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childMessage: string = '';
  @Output() messageToParent = new EventEmitter<string>();

  sendMessage() {
    this.messageToParent.emit("Hello Parent! From Child.");
  }
}
