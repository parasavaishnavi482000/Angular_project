import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-life-cycle',
  imports: [FormsModule,CommonModule],
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  inputData: string = '';
  updatedValue: string = '';
  showForm: boolean = false;

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges - inputData changed:', changes['inputData']?.currentValue);
    this.updatedValue = changes['inputData']?.currentValue;
  }

  ngOnInit() {
    console.log('ngOnInit - Component initialized');
  }

  ngDoCheck() {
    console.log('ngDoCheck - Change detection cycle triggered');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - Content projected');
  }

   ngAfterContentChecked() {
    console.log('ngAfterContentChecked - Content checked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - Component view initialized');
  }

   ngAfterViewChecked() {
    console.log('ngAfterViewChecked - Component view checked');
  }

   updateData() {
    this.updatedValue = this.inputData;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
