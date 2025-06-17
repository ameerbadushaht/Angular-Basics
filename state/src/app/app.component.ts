import { Component } from '@angular/core';
import { CounterSMComponent } from "./components/counter-sm/counter-sm.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [CounterSMComponent]
})
export class AppComponent {
  title = 'april2';
}
