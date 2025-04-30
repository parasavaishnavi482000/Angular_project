import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  imports: [BaseChartDirective],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {


  title = 'ng2-charts-demo';

  
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Angular' ], [ 'React'], 'Java' ];
  public pieChartDatasets = [{
    data: [300, 500, 100],
    backgroundColor: [
      'balck', 
      'pink', 
      'grey'  
    ],
    hoverOffset: 4
  }];
  
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }

}
