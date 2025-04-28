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

 
  fetchDataUsingPromise() {
    this.loading = true;
    this.message = ''; 
    this.getDataUsingPromise().then(data => {
      this.loading = false;
      this.message = data; 
    }).catch(error => {
      this.loading = false;
      this.message = 'Error fetching data!';
    });
  }

  
  getDataUsingPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; 
        if (success) {
          resolve('Data fetched successfully using Promise!');
        } else {
          reject('Failed to fetch data!');
        }
      }, 2000); 
    });
  }
}
