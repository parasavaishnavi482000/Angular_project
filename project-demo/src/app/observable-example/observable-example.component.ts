import { Component } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-observable-example',
  imports:[CommonModule],
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent {
  loading: boolean = false;
  message: string = '';
  userData: string = '';
  productData: string = '';

  // Simulating API calls with Observable and forkJoin
  fetchDataUsingForkJoin() {
    this.loading = true;
    this.message = '';
    this.userData = '';
    this.productData = '';

    // Simulate an API call for user data
    const userApiCall: Observable<string> = of('User data fetched successfully!');

    // Simulate an API call for product data
    const productApiCall: Observable<string> = of('Product data fetched successfully!');

    // Using forkJoin to wait for both observables to complete
    forkJoin([userApiCall, productApiCall]).subscribe({
      next: (results) => {
        this.userData = results[0]; // First API response
        this.productData = results[1]; // Second API response
        this.message = 'Both data fetched successfully!';
        this.loading = false;
      },
      error: (err) => {
        this.message = 'Error occurred while fetching data';
        this.loading = false;
      }
    });
  }
}
