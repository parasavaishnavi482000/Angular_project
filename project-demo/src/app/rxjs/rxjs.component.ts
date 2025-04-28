import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
  imports: [CommonModule]
})
export class RxjsComponent {
  isSubscribed = false;
  newsUpdateSubject = new Subject<string>(); // Subject to simulate newspaper updates
  subscribers: { person: string, updates: string[] }[] = []; // List to store subscribers

  // Subscribe to the newspaper
  subscribe(person: string) {
    if (!this.isSubscribed) {
      // Create a new subscriber with the correct type for 'updates'
      const subscriber: { person: string; updates: string[] } = {
        person,
        updates: [] // Initialize empty updates array
      };

      // Add the subscriber to the list
      this.subscribers.push(subscriber);

      // Subscribe to the news updates
      this.newsUpdateSubject.subscribe(
        (message) => {
          subscriber.updates.push(message); // Add the new message to the subscriber's updates
          console.log(`${person} received update: ${message}`);
        },
        (error) => {
          console.error('Error in subscription:', error);
        }
      );

      // Mark as subscribed to prevent multiple subscriptions
      this.isSubscribed = true;
    }
  }

  // Simulate a newspaper update every 5 seconds
  simulateUpdates() {
    let updateCount = 1;
    setInterval(() => {
      const message = `Breaking News Update #${updateCount}`;
      this.newsUpdateSubject.next(message); // Emit a new newspaper update
      updateCount++;
    }, 5000);
  }

  // Manually trigger the newspaper updates
  triggerUpdates() {
    this.simulateUpdates();
  }
}
