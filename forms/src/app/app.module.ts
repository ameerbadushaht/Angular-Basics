import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthDirective } from './validators/password-strength.directive';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { Rdemo1Component } from './components/rdemo1/rdemo1.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    PasswordStrengthDirective,
    ReactiveComponent,
    Rdemo1Component
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
