import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterSMComponent } from './components/counter-sm/counter-sm.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterSMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({}, {})
    // Appstate interface in app.state.ts defines forRoot() counter
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
