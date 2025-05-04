import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports:[FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  username: string = 'Vaishnavi';
  selectedCard: any = null;

  selectCard(title: string, description: string) {
    this.selectedCard = {
      title: title,
      description: description
    };
  }
}