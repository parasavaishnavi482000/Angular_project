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
  @Input() type: 'success' | 'error' = 'success'; // Determines the color/icon
  @Input() show: boolean = false;

  ngOnInit(): void {
    if (this.show) {
      setTimeout(() => {
        this.show = false;
      }, 3000); // Auto-hide after 3 seconds
    }
  }

  closeToaster() {
    this.show = false;
  }

  
}

