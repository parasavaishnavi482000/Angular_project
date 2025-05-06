import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-toaster',
  imports:[FormsModule,CommonModule],
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success'; 
  @Input() show: boolean = false;

  ngOnInit(): void {
    if (this.show) {
      setTimeout(() => {
        this.show = false;
      }, 2000); 
    }
  }

  closeToaster() {
    this.show = false;
  }

  
}

