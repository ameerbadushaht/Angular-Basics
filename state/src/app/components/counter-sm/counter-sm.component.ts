import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Appstate } from 'src/app/state/app.state';
import { decrement, increment,reset } from 'src/app/state/counter/counter.action';
import { selectcount } from 'src/app/state/counter/counter.selector';

@Component({
  selector: 'app-counter-sm',
  templateUrl: './counter-sm.component.html',
  styleUrls: ['./counter-sm.component.css']
})
export class CounterSMComponent {
  count$:Observable<number>;

  constructor(private store:Store<Appstate>){
    this.count$ = this.store.select(selectcount)
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  increment(){
    this.store.dispatch(increment())
  }
  reset(){
    this.store.dispatch(reset())
  }
}

  