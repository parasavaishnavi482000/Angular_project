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

  // Function to select a card and show its definition
  selectCard(title: string, description: string) {
    this.selectedCard = {
      title: title,
      description: description
    };
  }
}