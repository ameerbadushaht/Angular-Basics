import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() name: string = '';

  // child to parent

  @Output() notify = new EventEmitter<string>();

  sendMessage() {
    this.notify.emit('Hello from Child!');
  }
}
