import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() name: string = ''

 @Output() notify = new EventEmitter<string>()
 sendMessage() {
   this.notify.emit(`Hello from child!`)
 }
}
