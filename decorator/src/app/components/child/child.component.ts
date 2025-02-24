import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

    @Output() notify=new EventEmitter<string>();

    submit(){
        this.notify.emit("hello from child")
    }


}
