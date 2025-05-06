import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructureComponent } from './components/structure/structure.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { ComponentComponent } from './components/component/component.component';
import { CustomDirective } from './directives/custom.directive';


@NgModule({
  declarations: [
    AppComponent,
    StructureComponent,
    AttributeComponent,
    ComponentComponent,
    CustomDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
