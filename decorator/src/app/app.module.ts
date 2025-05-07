import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighlightDirective } from './directives/highlight.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './components/property/child/child.component';
import { ParentComponent } from './components/property/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,

    HighlightDirective,

     ChildComponent,
     ParentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
