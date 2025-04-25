import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent {
  routeMessage: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.routeMessage = params['msg'];
    });
  }
}
