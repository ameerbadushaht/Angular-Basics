import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    message: string = 'Initial Data';
    showComponent: boolean = true;
  
    toggleComponent() {
      this.showComponent = !this.showComponent;
    }
}
