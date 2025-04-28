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
  newsUpdateSubject = new Subject<string>();
  subscribers: { person: string, updates: string[] }[] = [];

  subscribe(person: string) {
    if (!this.isSubscribed) {
      const subscriber: { person: string; updates: string[] } = {
        person,
        updates: [] 
      };

      this.subscribers.push(subscriber);

     this.newsUpdateSubject.subscribe(
        (message) => {
          subscriber.updates.push(message); 
          console.log(`${person} received update: ${message}`);
        },
        (error) => {
          console.error('Error in subscription:', error);
        }
      );

     this.isSubscribed = true;
    }
  }

  simulateUpdates() {
    let updateCount = 1;
    setInterval(() => {
      const message = `Breaking News Update #${updateCount}`;
      this.newsUpdateSubject.next(message); 
      updateCount++;
    }, 5000);
  }


  triggerUpdates() {
    this.simulateUpdates();
  }
}
