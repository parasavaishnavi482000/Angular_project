import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-promise-example',
  imports:[CommonModule],
  templateUrl: './promise-example.component.html',
  styleUrls: ['./promise-example.component.css']
})
export class PromiseExampleComponent {
  message: string = '';
  loading: boolean = false;

  // Simulating an async API call with a Promise
  fetchDataUsingPromise() {
    this.loading = true;
    this.message = ''; // Clear any previous messages
    this.getDataUsingPromise().then(data => {
      this.loading = false;
      this.message = data; // Assign the data received from the promise
    }).catch(error => {
      this.loading = false;
      this.message = 'Error fetching data!';
    });
  }

  // Simulating an API call that returns a Promise
  getDataUsingPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulate a successful response
        if (success) {
          resolve('Data fetched successfully using Promise!');
        } else {
          reject('Failed to fetch data!');
        }
      }, 2000); // 2-second delay to simulate an API call
    });
  }
}
