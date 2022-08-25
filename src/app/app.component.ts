import {Component} from '@angular/core';
import {AppAnimation} from "./app.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [AppAnimation]
})
export class AppComponent {

  constructor() {
  }
}
